'use client'
import TaskItem from '@/components/compound/task-item'

import DashboardHeader from '@/components/compound/dashboard-header'
import { TypeTaskItem } from '@/components/compound/task-item.types'
import ActionButton from '@/components/unit/action-button.unit'
import { useState } from 'react'
import { tasks } from '../data/taskdata'

const Dashboard = () => {
	const [searchInput, setSearchInput] = useState('')

	const [fetchedTasks, setFetchedTasks] = useState(tasks)
	const [filteredTasks, setFilteredTasks] = useState(tasks)

	function filterTasks(filter: TypeTaskItem['type'] | '') {
		console.log('*************from dashbaord page', searchInput)
		if (!filter) return setFilteredTasks(fetchedTasks)
		const filteredTasks = fetchedTasks.filter((task) => task.type === filter)
		setFilteredTasks(filteredTasks)
	}

	return (
		<div className='dashboardMasterContainer'>
			<DashboardHeader setSearchInput={setSearchInput} />
			<div className='dashboardActions flex justify-between'>
				<div className='dashboardFilters'>
					<ActionButton title={'all'} onClick={() => filterTasks('')} />
					<ActionButton
						title={'active task'}
						onClick={() => filterTasks('active')}
					/>
					<ActionButton
						title={'pending task'}
						onClick={() => filterTasks('pending')}
					/>
					<ActionButton
						title={'complete task'}
						onClick={() => filterTasks('complete')}
					/>
				</div>
			</div>
			<div className='dashboardcontentsMasterContainer flex justify-start h-full'>
				<div className='dashboardItemsContainer w-[595] h-screen overflow-scroll border-2 border-rose-400'>
					{filteredTasks.map((task, index) => (
						<TaskItem
							key={index}
							title={task.title}
							desc={task.desc}
							date={task.date}
							assignedTo={task.assignedTo}
							type={task.type}
						/>
					))}
				</div>
				<div className='notificationContainer w-[500] h-min-[200px] ml-7 rounded-lg bg-slate-200'></div>
			</div>
		</div>
	)
}

export default Dashboard
