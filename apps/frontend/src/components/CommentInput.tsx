import { useState } from 'react'

export const CommentInput = () => {
	const [inputMode, setInputMode] = useState(false)

	return (
		<div className="border border-solid rounded-[1.25em] p-3 border-neutral-400 focus-within:border-neutral-800">
			{inputMode ? (
				<textarea className="border-0 outline-0 text-sm"></textarea>
			) : (
				<div onClick={() => setInputMode(true)}>
					Add new comment...
				</div>
			)}
		</div>
	)
}
