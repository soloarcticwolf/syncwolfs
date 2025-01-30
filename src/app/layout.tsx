import SessionWrapper from '@/components/compound/session-wrapper'
import './globals.css'

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<SessionWrapper>
			<html lang='en'>
				<body>{children}</body>
			</html>
		</SessionWrapper>
	)
}
