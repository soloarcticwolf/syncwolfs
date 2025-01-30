import { FC, ReactNode } from 'react'
interface Props {
	show: boolean
	closeModal: () => void
	children: ReactNode
}

const CustomModal: FC<Props> = ({ show, closeModal, children }) => {
	return show ? (
		<div className='customModalMasterContainer fixed inset-0 flex items-center justify-center'>
			<div className='modal-overlay absolute inset-0 bg-gray-600 opacity-50 -z-10'></div>
			<div className='modal-container rounded-md shadow-lg p-6 z-20 bg-white'>
				<button
					className='absolute text-3xl font-bold text-red-600 top-3 right-3  hover:text-gray-700'
					onClick={closeModal}
				>
					&times;
				</button>
				<div className='modalContent border border-red-700'>{children}</div>
			</div>
		</div>
	) : null
}

export default CustomModal
