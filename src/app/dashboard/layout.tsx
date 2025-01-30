import DashSidebarFooter from '@/components/compound/dash-sidebar-footer'
import DashSidebarUserInfo from '@/components/compound/dash-user-info'
import Navlink from '@/components/compound/navlink'
import { getSession } from 'next-auth/react'
import { ReactNode } from 'react'

const DashboardLayout = async ({ children }: { children: ReactNode }) => {
	const session = await getSession()

	console.log(
		'##########################session from dashbaord layout',
		session
	)
	// if (!session) {
	// 	console.log('No session redirecting to login')
	// 	redirect(LINK_DASHBOARD)
	// }

	return (
		<div className='app-master-layout flex '>
			<div className='flex flex-col justify-between w-[250] h-screen p-4'>
				<nav className='flex flex-col justify-between border border-y-white h-screen p-4'>
					<DashSidebarUserInfo name='sanwar hussain' />
					<div className='navlinks flex flex-col'>
						<Navlink text={'Dashboard'} link='/dashboard' />
						<Navlink text={'Task allocator'} link='/dashboard/task-allocator' />
						<Navlink text={'Account'} link='/dashboard/account' />
						<Navlink text={'Chat'} link='/dashboard/chat' />
					</div>
					<div className='sidebar-footer'>
						<DashSidebarFooter />
					</div>
				</nav>
			</div>
			<div className='dashboardContent w-full h-screen overflow-hidden'>
				{children}
			</div>
		</div>
	)
}

export default DashboardLayout
