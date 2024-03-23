import { Button } from '@mui/material'
import { ReactNode } from 'react'

export interface RoundButtonProps {
	children?: ReactNode
	icon?: ReactNode
}

export const RoundButton = ({
	icon,
	children,
}: RoundButtonProps) => (
	<Button
		color="inherit"
		startIcon={icon}
		className="rounded-full bg-neutral-100 px-4"
	>
		{children}
	</Button>
)
