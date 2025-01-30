import Image from 'next/image'
import { FC } from 'react'

interface Props {
	altText: string
	logo: string
	height: number
	width: number
	onClick: () => void
}

const LogoButton: FC<Props> = ({ altText, logo, height, width, onClick }) => {
	return (
		<Image
			height={height}
			width={width}
			src={logo}
			alt={altText}
			onClick={onClick}
		/>
	)
}

export default LogoButton
