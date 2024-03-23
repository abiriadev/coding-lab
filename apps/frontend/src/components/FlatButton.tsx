import { ReactNode } from 'react'

export interface FlatButtonProps {
	children?: ReactNode
	color?: string
	bg?: string
	hover?: string
	active?: string
	onClick?: () => void
}

export const FlatButton = ({
	children,
	color,
	bg,
	hover,
	active,
	onClick,
}: FlatButtonProps) => {
	return (
		<button
			className={`rounded-full border-0 px-5 py-3 font-bold ${color ?? 'text-neutral-900'} ${
				bg ?? 'bg-neutral-200 '
			} hover:${hover ?? 'bg-neutral-300 '} active:${
				active ?? 'bg-neutral-400 '
			}`}
			onClick={onClick}
		>
			{children}
		</button>
	)
}
