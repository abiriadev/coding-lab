import { Button } from '@mui/material'
import { ReactNode } from 'react'

export interface RoundButtonProps {
	icon?: ReactNode
	onClick?: () => void
	children?: ReactNode
}

export const RoundButton = ({
	icon,
	onClick,
	children,
}: RoundButtonProps) => (
	<Button
		color="inherit"
		startIcon={icon}
		onClick={onClick}
		className="rounded-full bg-neutral-100 px-4"
	>
		{children}
	</Button>
)
