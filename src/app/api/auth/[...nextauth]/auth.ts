import NextAuth, { NextAuthOptions, User } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const authOptions: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				email: { label: 'Username', type: 'text' },
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials): Promise<User | null> {
				// Add logic here to look up the user from the credentials supplied

				console.log('*************credentials', credentials)

				const user: User = {
					email: credentials?.email,
					id: 'test1',
					name: 'John Doe',
					image: '',
				}

				if (user) {
					console.log('###########################returning user', user)
					return user
				} else {
					return null
				}
			},
		}),
	],
	secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions)
export default handler
