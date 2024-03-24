import { TextareaAutosize } from '@mui/material'
import { FlatButton } from './FlatButton'
import { Link } from 'react-router-dom'
import { useRef } from 'react'

export interface PostInputSubmitData {
	title: string
	content: string
}

export interface PostInputProps {
	onSubmit?: (_: PostInputSubmitData) => void
}

export const PostInput = ({ onSubmit }: PostInputProps) => {
	const title = useRef<HTMLInputElement>(null)
	const content = useRef<HTMLTextAreaElement>(null)

	return (
		<div className="flex flex-col gap-3">
			<input
				ref={title}
				className="border-2 border-solid border-neutral-400 focus-within:border-neutral-800 rounded-xl p-3 text-lg"
				required
			></input>
			<TextareaAutosize
				ref={content}
				className="min-h-40 border-2 border-solid border-neutral-400 focus-within:border-neutral-800 rounded-xl p-3 text-lg"
				required
			/>
			<div className="flex justify-end gap-2">
				<Link to="/">
					<FlatButton>Cancel</FlatButton>
				</Link>
				<FlatButton
					className="text-white bg-neutral-800 hover:bg-neutral-800 active:bg-neutral-700"
					onClick={() =>
						onSubmit?.({
							title:
								title.current?.value ?? '',
							content:
								content.current?.value ??
								'',
						})
					}
				>
					Submit
				</FlatButton>
			</div>
		</div>
	)
}
