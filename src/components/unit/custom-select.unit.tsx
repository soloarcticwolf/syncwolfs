import { FC } from 'react'
import Select from 'react-select'

interface TypeSelectOption {
	label: string
	value: string
}

interface Props {
	title: string
	options: TypeSelectOption[]
	onChange: (newValue: unknown | TypeSelectOption) => void
}

const CustomSelect: FC<Props> = ({ title, options, onChange }) => {
	return (
		<div className='customSelectMasterContainer m-2'>
			<span className='ml-2 mb-1 text-sm capitalize'>{title}</span>
			<Select options={options} onChange={onChange} />
		</div>
	)
}

export default CustomSelect
