'use client'
import Image from 'next/image'
import { FC, useRef } from 'react'

interface Props {
	setSearchInput: (val: string) => void
}

const DashboardHeader: FC<Props> = ({ setSearchInput }) => {
	const searchInput = useRef('')

	return (
		<div className='dashboardHeader h-[142] rounded-t-lg border border-blue-700 flex items-center justify-around'>
			<div className='inputContainer'>
				<input
					className='p-4 border border-blue-500 w-[773] h-[64] rounded-md'
					onChange={(e) => {
						console.log(e.target.value)
						searchInput.current = e.target.value
					}}
					type='search'
				/>
				<button
					className='searchButton bg-blue-500 rounded-md ml-2 p-5'
					onClick={() => setSearchInput(searchInput.current)}
				>
					Search
				</button>
			</div>
			<div className='notificationContainer relative cursor-pointer'>
				{/* open modla here for notifications */}
				<Image src={'/globe.svg'} alt='file-name' height={30} width={30} />
				<div className='notificationText w-[20] h-[20] absolute bg-red-600 text-white top-[-8] right-[-15] rounded-full flex items-center justify-center'>
					<p className='text-xs'>10</p>
				</div>
			</div>
		</div>
	)
}

export default DashboardHeader
