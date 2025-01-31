'use client'
import { optionValues } from '@/app/data/select-data.data'
import DashboardHeader from '@/components/compound/dashboard-header'
import ActionButton from '@/components/unit/action-button.unit'
import CustomInput from '@/components/unit/custom-input.unit'
import CustomSelect from '@/components/unit/custom-select.unit'
import { Formik } from 'formik'
import { useState } from 'react'

const TaskAllocator = () => {
	const [showModal, setShowModal] = useState(false)

	return (
		<>
			<div className='masterTaskAllocatorContainer '>
				<DashboardHeader setSearchInput={() => {}} />
				<div className='recordCreators flex justify-end'>
					<ActionButton
						title={'Create Task'}
						onClick={() => setShowModal(!showModal)}
					/>
					<ActionButton title={'Create Log'} onClick={() => {}} />
				</div>
			</div>
			<div className={`collapsibleContainer w-[960] m-auto`}>
				<Formik
					initialValues={{ email: '', password: '' }}
					validate={(values) => {
						const errors = {}
						if (!values.email) {
							// errors.email = 'Required'
						} else if (
							!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
						) {
							// errors.email = 'Invalid email address'
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
						<form
							className='formInput grid grid-rows-8 grid-cols-2'
							onSubmit={handleSubmit}
						>
							{/* <CustomInput
								title='Task Title'
								type='email'
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.email}
								placeholder='Enter a email'
							/> */}
							<CustomSelect
								title='Task Title'
								options={optionValues}
								onChange={() => {}}
							/>
							<CustomSelect
								title='Task Type'
								options={optionValues}
								onChange={() => {}}
							/>
							<CustomSelect
								title='Assigned To'
								options={optionValues}
								onChange={() => {}}
							/>
							<CustomSelect
								title='Asset Allocation'
								options={optionValues}
								onChange={() => {}}
							/>
							<p className='col-span-full'> Schedule date and Time</p>
							<CustomSelect
								title='Date'
								options={optionValues}
								onChange={() => {}}
							/>
							<CustomSelect
								title='Time'
								options={optionValues}
								onChange={() => {}}
							/>
							<p className='col-span-full'> Address</p>
							<CustomSelect
								title='Source'
								options={optionValues}
								onChange={() => {}}
							/>
							<CustomSelect
								title='Destination'
								options={optionValues}
								onChange={() => {}}
							/>
							<CustomInput title='Notes' onChange={() => {}} />
							<CustomInput title='Drag n drop' onChange={() => {}} />
							<CustomInput title='Status' onChange={() => {}} />
							<CustomSelect
								title='Is Recurring'
								options={optionValues}
								onChange={() => {}}
							/>
							<CustomInput title='Completion remark' onChange={() => {}} />
							{/* {errors.email && touched.email && errors.email}
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
							</button> */}
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
