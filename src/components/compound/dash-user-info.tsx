import Image from 'next/image'
import { FC } from 'react'

interface TypeDashUserInfo {
	name: string
}

const DashSidebarUserInfo: FC<TypeDashUserInfo> = () => {
	return (
		<div className='border border-red-400 h-[174] flex flex-col justify-center items-center'>
			<Image
				className='border rounded-full border-red-500'
				height={54}
				width={54}
				src={'/window.svg'}
				alt='profile-user'
			/>
			<h2 className='text-lg text-center'>Sanwar Hussain</h2>
			<p className='text-sm text-center'>Last login time:</p>
			<p className='text-sm text-center'>Date: 12/12/24</p>
		</div>
	)
}

export default DashSidebarUserInfo
