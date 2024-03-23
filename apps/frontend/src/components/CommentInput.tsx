import { useState } from 'react'

export const CommentInput = () => {
	const [inputMode, setInputMode] = useState(false)

	return inputMode ? (
		<textarea></textarea>
	) : (
		<div onClick={() => setInputMode(true)}>
			Add new comment...
		</div>
	)
}
