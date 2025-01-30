'use client'
import DashboardHeader from '@/components/compound/dashboard-header'
import ActionButton from '@/components/unit/action-button.unit'
import { Formik } from 'formik'
import { useState } from 'react'

const TaskAllocator = () => {
	const [showModal, setShowModal] = useState(false)

	return (
		<>
			<div className='masterTaskAllocatorContainer'>
				<DashboardHeader setSearchInput={() => {}} />
				<div className='recordCreators flex justify-end'>
					<ActionButton
						title={'Create Task'}
						onClick={() => setShowModal(!showModal)}
					/>
					<ActionButton title={'Create Log'} onClick={() => {}} />
				</div>
			</div>
			<div className={`collapsibleContainer`}>
				<Formik
					initialValues={{ email: '', password: '' }}
					validate={(values) => {
						const errors = {}
						if (!values.email) {
							errors.email = 'Required'
						} else if (
							!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
						) {
							errors.email = 'Invalid email address'
						}
						return errors
					}}
					onSubmit={(values, { setSubmitting }) => {
						setTimeout(() => {
							alert(JSON.stringify(values, null, 2))
							setSubmitting(false)
						}, 400)
					}}
				>
					{({
						values,
						errors,
						touched,
						handleChange,
						handleBlur,
						handleSubmit,
						isSubmitting,
						/* and other goodies */
					}) => (
						<form onSubmit={handleSubmit}>
							<input
								type='email'
								name='email'
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.email}
							/>
							{errors.email && touched.email && errors.email}
							<input
								type='password'
								name='password'
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.password}
							/>
							{errors.password && touched.password && errors.password}
							<button type='submit' disabled={isSubmitting}>
								Submit
							</button>
						</form>
					)}
				</Formik>
			</div>
			{
				//create unassigned but created tasks here by the author
			}
		</>
	)
}

export default TaskAllocator
