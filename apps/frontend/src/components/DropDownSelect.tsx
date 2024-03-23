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
}

export const DropDownSelect = ({
	options,
}: DropDownSelectProps) => {
	const [value, setValue] = useState(options[0].value)

	return (
		<Select
			value={value}
			onChange={({ target }: SelectChangeEvent) => {
				setValue(target.value as string)
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
				<MenuItem value={value}>
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
