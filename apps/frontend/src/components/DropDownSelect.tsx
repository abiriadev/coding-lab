import {
	MenuItem,
	Select,
	SelectChangeEvent,
} from '@mui/material'
import { useState } from 'react'

export const DropDownSelect = () => {
	const [age, setAge] = useState('10')

	return (
		<Select
			value={age}
			onChange={({ target }: SelectChangeEvent) => {
				setAge(target.value as string)
			}}
			variant="standard"
			disableUnderline
			sx={{
				'& .MuiSelect-standard': {
					backgroundColor: 'inherit',
				},
			}}
		>
			<MenuItem value={10}>Ten</MenuItem>
			<MenuItem value={20}>Twenty</MenuItem>
			<MenuItem value={30}>Thirty</MenuItem>
		</Select>
	)
}
