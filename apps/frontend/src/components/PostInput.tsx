import { TextareaAutosize } from '@mui/material'
import { FlatButton } from './FlatButton'
import { Link } from 'react-router-dom'

export const PostInput = () => {
	return (
		<div className="flex flex-col gap-3">
			<input className="border-2 border-solid border-neutral-400 focus-within:border-neutral-800 rounded-xl p-3 text-lg"></input>
			<TextareaAutosize className="min-h-40 border-2 border-solid border-neutral-400 focus-within:border-neutral-800 rounded-xl p-3 text-lg" />
			<div className="flex justify-end gap-2">
				<Link to="/">
					<FlatButton>Cancel</FlatButton>
				</Link>
				<FlatButton className="text-white bg-neutral-800 hover:bg-neutral-800 active:bg-neutral-700">
					Submit
				</FlatButton>
			</div>
		</div>
	)
}
