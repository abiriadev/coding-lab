import { TextField, TextareaAutosize } from '@mui/material'
import { FlatButton } from './FlatButton'

export const PostInput = () => {
	return (
		<div>
			<TextField></TextField>
			<TextareaAutosize className="border-2 border-solid border-neutral-400 focus-within:border-neutral-800 rounded-[1.25em] p-5 text-lg" />
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
