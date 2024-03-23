import { ReactNode } from 'react'

export interface FlatButtonProps {
	children?: ReactNode
	color?: string
	hover?: string
	active?: string
}

export const FlatButton = ({
	children,
	color,
	hover,
	active,
}: FlatButtonProps) => {
	return (
		<button
			className={`rounded-full border-0 px-5 py-3 font-bold ${
				color ?? 'bg-neutral-200 '
			} hover:${hover ?? 'bg-neutral-300 '} active:${
				active ?? 'bg-neutral-400 '
			}`}
		>
			{children}
		</button>
	)
}
