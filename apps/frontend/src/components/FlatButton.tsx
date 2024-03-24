import { ReactNode } from 'react'

export interface FlatButtonProps {
	children?: ReactNode
	className?: string
	onClick?: () => void
}

export const FlatButton = ({
	children,
	onClick,
	className,
}: FlatButtonProps) => {
	return (
		<button
			className={`rounded-full border-0 px-5 py-3 font-bold text-neutral-900 bg-neutral-200 hover:bg-neutral-300 active:bg-neutral-400 ${className}`}
			onClick={onClick}
		>
			{children}
		</button>
	)
}
