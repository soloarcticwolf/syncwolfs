import { TypeUserShortInfo } from '@/app/types/user.types'

export interface TypeTaskItem {
	type: 'active' | 'complete' | 'pending'
	title: string
	date: Date
	desc: string
	assignedTo: TypeUserShortInfo
}
