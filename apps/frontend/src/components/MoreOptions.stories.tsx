import type { Meta, StoryObj } from '@storybook/react'
import { MoreOptions } from './MoreOptions'
import {
	DeleteOutlined,
	EditOutlined,
} from '@mui/icons-material'

const meta = {
	title: 'Example/MoreOptions',
	component: MoreOptions,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof MoreOptions>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {
		options: [
			{
				icon: <EditOutlined />,
				label: 'Edit',
			},
			{
				icon: <DeleteOutlined />,
				label: 'Delete',
			},
		],
	},
}
