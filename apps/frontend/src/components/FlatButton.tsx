import { ReactNode } from 'react'

export interface FlatButtonProps {
	children?: ReactNode
}

export const FlatButton = ({
	children,
}: FlatButtonProps) => {
	return <button>{children}</button>
}
