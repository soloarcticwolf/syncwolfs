import Link from 'next/link'
import { FC } from 'react'

interface TypeNavlink {
	link: string
	text: string
	// icon: ReactNode
}

const Navlink: FC<TypeNavlink> = ({ link, text }) => {
	return (
		<Link className='py-4' href={link}>
			{text}
		</Link>
	)
}

export default Navlink
