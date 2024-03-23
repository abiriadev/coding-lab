import { useState } from 'react'
import { TextareaAutosize } from '@mui/material'
import { FlatButton } from './FlatButton'

export const CommentInput = () => {
	const [inputMode, setInputMode] = useState(false)

	return (
		<div className="border-2 border-solid rounded-[1.25em] p-2 border-neutral-400 focus-within:border-neutral-800">
			{inputMode ? (
				<div className="flex flex-col">
					<TextareaAutosize className="border-0 outline-0 text-lg mx-3 mt-3 mb-5" />
					<div className="flex justify-end gap-2">
						<FlatButton>Cancel</FlatButton>
						<FlatButton>Submit</FlatButton>
					</div>
				</div>
			) : (
				<div onClick={() => setInputMode(true)}>
					Add new comment...
				</div>
			)}
		</div>
	)
}
