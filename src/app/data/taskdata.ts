import { TypeTaskItem } from '@/components/compound/task-item.types'
import { TypeUserShortInfo } from '../types/user.types'

export const dummyUser: TypeUserShortInfo = {
	avatar: '/file.svg',
	name: 'John Doe',
	email: 'john.doe@example.com',
	id: '1',
}

export const tasks: Array<TypeTaskItem> = [
	{
		title: 'Task 1',
		desc: 'Task somethign',
		date: new Date(),
		type: 'pending',
		assignedTo: dummyUser,
	},
	{
		title: 'Task 2',
		desc: 'Task somethign',
		date: new Date(),
		type: 'pending',
		assignedTo: dummyUser,
	},
	{
		title: 'Task 3',
		desc: 'Task somethign',
		date: new Date(),
		type: 'active',
		assignedTo: dummyUser,
	},
	{
		title: 'Task 4',
		desc: 'Task somethign',
		date: new Date(),
		type: 'complete',
		assignedTo: dummyUser,
	},
	{
		title: 'Task 5',
		desc: 'Task somethign',
		date: new Date(),
		type: 'complete',
		assignedTo: dummyUser,
	},
	{
		title: 'Task 6',
		desc: 'Task somethign',
		date: new Date(),
		type: 'pending',
		assignedTo: dummyUser,
	},
]
