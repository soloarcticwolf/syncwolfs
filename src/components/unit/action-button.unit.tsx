import { FC } from 'react'

interface Props {
	title: string
	onClick: () => void
}

const ActionButton: FC<Props> = ({ title, onClick }) => {
	return (
		<button
			className='rounded-lg p-2 hover:text-white capitalize m-2 hover:bg-blue-500 hover:ease-in-out border border-gray-300'
			onClick={onClick}
		>
			{title}
		</button>
	)
}

export default ActionButton
