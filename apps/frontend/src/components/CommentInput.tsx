import { useState } from 'react'
import { TextareaAutosize } from '@mui/material'

export const CommentInput = () => {
	const [inputMode, setInputMode] = useState(false)

	return (
		<div className="border border-solid rounded-[1.25em] p-3 border-neutral-400 focus-within:border-neutral-800">
			{inputMode ? (
				<TextareaAutosize className="border-0 outline-0 text-sm" />
			) : (
				<div onClick={() => setInputMode(true)}>
					Add new comment...
				</div>
			)}
		</div>
	)
}
