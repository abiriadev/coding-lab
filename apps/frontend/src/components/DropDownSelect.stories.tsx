import type { Meta, StoryObj } from '@storybook/react'
import { DropDownSelect } from './DropDownSelect'
import {
	History,
	LeaderboardOutlined,
	LocalFireDepartmentOutlined,
} from '@mui/icons-material'

const meta = {
	title: 'Example/DropDownSelect',
	component: DropDownSelect,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof DropDownSelect>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {
		options: [
			{
				icon: <LeaderboardOutlined />,
				label: 'Top',
				value: 'top',
			},
			{
				icon: <History />,
				label: 'Old',
				value: 'old',
			},
			{
				icon: <LocalFireDepartmentOutlined />,
				label: 'New',
				value: 'new',
			},
		],
	},
}
