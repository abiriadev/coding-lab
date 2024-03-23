import { TextField } from '@mui/material'
import { FlatButton } from './FlatButton'

export const PostInput = () => {
	return (
		<div>
			<TextField></TextField>
			<div></div>
			<div className="flex justify-end gap-2">
				<FlatButton>Cancel</FlatButton>
				<FlatButton
					color="text-neutral-100"
					bg="bg-neutral-800"
					hover="bg-neutral-800"
					active="bg-neutral-700"
				>
					Submit
				</FlatButton>
			</div>
		</div>
	)
}
