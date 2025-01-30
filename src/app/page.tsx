'use client'
import BtnPrimary from '@/components/unit/button.unit'
import CustomInput from '@/components/unit/input.unit'
import LogoButton from '@/components/unit/logo-button.unit'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import {
	FORGOT_PASS,
	LOGIN_DESC,
	LOGIN_HEADER,
} from './constant/login.constant'

export default function Home() {
	const router = useRouter()
	const [loginType, setLoginType] = useState<'email' | 'phone'>('email')

	async function handleLogin() {
		await signIn('credentials', {
			email: 'test@gamil.com',
			password: '123',
		})
		console.log('@@@@@@@@@@@from signin button')
		router.push('/dashboard')
	}

	return (
		<div className='masterLoginContainer flex h-screen justify-center items-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient'>
			<div className='loginContainer flex items-center gap-24'>
				<div className='loginInfo border border-rose-500 w-[500]'>
					<Image src={'/globe.svg'} width={95} height={89} alt='logo' />
					<h1 className='text-3xl font-bold'>{LOGIN_HEADER}</h1>
					<p className='text-xl font-normal'>{LOGIN_DESC}</p>
				</div>
				<div className='loginForm flex flex-col justify-center bg-white w-[576] h-[670] p-10 rounded-2xl'>
					<div className='loginMethodSwitcher flex bg-blue-100 rounded-2xl'>
						<button
							className={`w-1/2 text-sm border ${
								loginType === 'email' ? 'border-blue-500' : ''
							} text-center rounded-xl p-2 m-3`}
							onClick={() => setLoginType('email')}
						>
							Email
						</button>
						<button
							className={`w-1/2 text-sm border ${
								loginType === 'phone' ? 'border-blue-500' : ''
							}  text-center rounded-xl p-2 m-3`}
							onClick={() => setLoginType('phone')}
						>
							Mobile
						</button>
					</div>
					{loginType === 'email' ? (
						<div className='loginTypeEmail'>
							<CustomInput
								placeholder='Domain'
								image='/globe.svg'
								title='Domain'
								className=''
							/>
							<CustomInput
								placeholder='Email'
								image='/globe.svg'
								title='Email'
								className=''
								inputType='email'
							/>
							<CustomInput
								placeholder='Password'
								image='/globe.svg'
								title='Password'
								className=''
								inputType='password'
							/>
							<div className='forgotPassword'>
								<p className='text-sm text-right text-blue-600 cursor-pointer m-2'>
									{FORGOT_PASS}
								</p>
							</div>
							<BtnPrimary
								bgColor='blue'
								className=''
								onClick={() => handleLogin()}
								title='Login'
							/>
						</div>
					) : (
						<div className='loginTypeMobile'>
							<CustomInput
								placeholder='Phone'
								image='/globe.svg'
								title='Phone'
								className=''
								inputType='number'
								charLimit={10}
							/>
						</div>
					)}

					<div className='text-center m-2'>
						Dont have an account?
						<Link className='font-semibold text-blue-600' href='/register'>
							Signup
						</Link>
						<div className='separationContainer flex justify-center items-center m-2'>
							<div className='separationLine border-2 w-full' />
							<p className='separationText mx-2 text-xs'>OR</p>
							<div className='separationLine border-2 w-full' />
						</div>
						<div className='alternativeLoginContainer flex justify-center gap-2 mt-5'>
							<LogoButton
								altText='google'
								height={30}
								width={30}
								logo='/globe.svg'
								onClick={() => {}}
							/>
							<LogoButton
								altText='google'
								height={30}
								width={30}
								logo='/globe.svg'
								onClick={() => {}}
							/>
							<LogoButton
								altText='google'
								height={30}
								width={30}
								logo='/globe.svg'
								onClick={() => {}}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
