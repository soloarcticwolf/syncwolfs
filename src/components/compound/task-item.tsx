'use client'
import Image from 'next/image'
import { FC, useState } from 'react'
import { TypeTaskItem } from './task-item.types'

const TaskItem: FC<TypeTaskItem> = ({
	title,
	desc,
	date,
	assignedTo,
	type,
}) => {
	const [showMore, setShowMore] = useState(false)

	return (
		<div className='task-item flex border bg-slate-100 overflow-hidden my-2 rounded-md'>
			<div
				className={`chevron w-[10] ${
					type === 'complete'
						? 'bg-blue-400'
						: type === 'active'
						? 'bg-green-500'
						: 'bg-yellow-500'
				}`}
			/>
			<div
				className={`master-task-item flex flex-col w-[505] ${
					showMore ? 'h-auto' : 'h-[153]'
				} m-2 rounded-md transition-all ease-in-out duration-100`}
			>
				<p>Time - {date.toISOString()}</p>
				<p className='task-item-title text-lg text-yellow-700'>{title}</p>
				<p
					className={`task-description text-md ${
						showMore ? '' : 'line-clamp-1'
					} `}
				>
					{desc}
				</p>
				<div className='operator-container flex'>
					<div className='operator-image rounded-full overflow-hidden border-2 border-white-600'>
						<Image
							src={assignedTo.avatar}
							width={50}
							height={50}
							alt='profile-image'
						/>
					</div>
					<div className='operator-name flex flex-col ml-2 justify-center '>
						<p className='text-xs'>Assigned Operator</p>
						<p>{assignedTo.name}</p>
					</div>
				</div>
				<p
					className='cursor-pointer text-sm  font-semibold'
					onClick={() => setShowMore(!showMore)}
				>
					Show {showMore ? 'less' : 'more'}
				</p>
			</div>
		</div>
	)
}

export default TaskItem
