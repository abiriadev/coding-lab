import { useEffect, useRef, useState } from 'react'
import { TextareaAutosize } from '@mui/material'
import { FlatButton } from './FlatButton'

export interface CommentInputProps {
	className?: string
}

export const CommentInput = ({
	className,
}: CommentInputProps) => {
	const [inputMode, setInputMode] = useState(false)
	const ta = useRef<null | HTMLTextAreaElement>(null)

	useEffect(() => {
		if (inputMode) {
			ta.current?.focus()
		}
	}, [inputMode])

	return (
		<div
			className={`border-2 border-solid rounded-[1.25em] p-2 border-neutral-400 focus-within:border-neutral-800 ${className}`}
		>
			{inputMode ? (
				<div className="flex flex-col">
					<TextareaAutosize
						ref={ta}
						className="border-0 outline-0 text-lg mx-3 mt-3 mb-5"
					/>
					<div className="flex justify-end gap-2">
						<FlatButton
							onClick={() =>
								setInputMode(false)
							}
						>
							Cancel
						</FlatButton>
						<FlatButton className="text-white bg-neutral-800 hover:bg-neutral-800 active:bg-neutral-700">
							Submit
						</FlatButton>
					</div>
				</div>
			) : (
				<div
					className="m-3 text-neutral-400"
					onClick={() => setInputMode(true)}
				>
					Add new comment...
				</div>
			)}
		</div>
	)
}
