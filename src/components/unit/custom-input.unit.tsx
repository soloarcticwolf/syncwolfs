import Image from 'next/image'
import { FC, useState } from 'react'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
	title: string
	placeholder?: string
	image?: string
	className?: string
	errorMsg?: string
}

const CustomInput: FC<Props> = (props) => {
	const [focused, setFocused] = useState(false)
	return (
		<div
			className={`masterInputContainer flex flex-col text-sm m-5 ${props.className}`}
		>
			<span className='ml-2 mb-1 text-sm capitalize'>{props.title}</span>
			<div
				className={`inputContainer flex border-2 p-2 rounded-2xl w-full transition-all delay-200 ${
					focused ? 'border border-blue-500' : ''
				}`}
			>
				{props.image ? (
					<Image
						src={props.image}
						alt={props.title || ''}
						height={20}
						width={20}
					/>
				) : null}
				<input
					{...props}
					className={`${props.className} outline-none px-2 `}
					onFocus={() => setFocused(true)}
					onBlur={() => {
						setFocused(false)

						// @ts-expect-error invalid type
						if (props.onBlur) props.onBlur(e)
					}}
				/>
			</div>
			{props.errorMsg ? (
				<p className='text-xs text-red-500 ml-5'>
					{props.errorMsg || 'Please enter a vlaid email'}
				</p>
			) : null}
		</div>
	)
}

export default CustomInput
