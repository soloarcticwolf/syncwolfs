import Image from 'next/image'
import { FC, HTMLInputTypeAttribute } from 'react'

interface Props {
	image?: string
	placeholder: string
	className?: string
	title: string
	inputType?: HTMLInputTypeAttribute
	charLimit?: number
}

const CustomInput: FC<Props> = ({
	title,
	image,
	className,
	placeholder,
	inputType,
	charLimit,
}) => {
	return (
		<div className={`masterInputContainer flex flex-col text-sm ${className}`}>
			<span className='ml-1 text-sm'>{title}</span>
			<div className='inputContainer flex border-2 p-2 m-1 rounded-2xl'>
				{image ? (
					<Image src={image} alt={title} height={20} width={20} />
				) : null}
				<input
					className='pl-2 outline-none bg-white w-full ml-1'
					placeholder={placeholder}
					type={inputType}
					maxLength={charLimit}
					max={charLimit}
				/>
			</div>
		</div>
	)
}

export default CustomInput
