import { FC, MouseEvent } from 'react'

interface Props {
	title: string
	onClick: (e: MouseEvent<HTMLButtonElement>) => unknown
	className: string
	bgColor: string
}

const BtnPrimary: FC<Props> = ({ title, onClick, className, bgColor }) => {
	return (
		<button
			className={`bg-${bgColor}-400 ${className} rounded-lg text-white text-sm font-semibold py-2 w-full`}
			onClick={onClick}
		>
			{title}
		</button>
	)
}

export default BtnPrimary
