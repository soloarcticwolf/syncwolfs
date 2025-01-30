'use client'

import { signOut } from 'next-auth/react'
import Link from 'next/link'
import { FC } from 'react'

const DashSidebarFooter: FC = () => {
	return (
		<div>
			<Link href={'#'} onClick={() => signOut()}>
				Sign out
			</Link>
		</div>
	)
}

export default DashSidebarFooter
