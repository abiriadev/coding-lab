import { ReactNode } from 'react'

export interface FlatButtonProps {
	children?: ReactNode
}

export const FlatButton = ({
	children,
}: FlatButtonProps) => {
	return (
		<button className="rounded-full border-0 bg-neutral-200 hover:bg-neutral-300 active:bg-neutral-400 px-5 py-3 font-bold">
			{children}
		</button>
	)
}
