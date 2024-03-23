import {
	MenuItem,
	Select,
	SelectChangeEvent,
} from '@mui/material'
import { useState, ReactNode } from 'react'

export interface DropDownSelectProps {
	options: Array<{
		icon: ReactNode
		label: string
		value: string
	}>
	onChange?: (value: string) => void
}

export const DropDownSelect = ({
	options,
	onChange,
}: DropDownSelectProps) => {
	const [value, setValue] = useState(options[0].value)

	return (
		<Select
			value={value}
			onChange={({
				target: { value },
			}: SelectChangeEvent) => {
				setValue(value)
				onChange?.(value)
			}}
			variant="standard"
			disableUnderline
			sx={{
				'& .MuiSelect-standard': {
					backgroundColor: 'inherit !important',
				},
			}}
		>
			{options.map(({ icon, label, value }) => (
				<MenuItem key={value} value={value}>
					<div
						className="flex items-center"
						style={{ gap: '10px' }}
					>
						{icon}
						<span className="font-medium">
							{label}
						</span>
					</div>
				</MenuItem>
			))}
		</Select>
	)
}
