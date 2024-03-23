import type { Meta, StoryObj } from '@storybook/react'
import { RoundButton } from './RoundButton'
import { ShareOutlined } from '@mui/icons-material'

const meta = {
	title: 'Example/RoundButton',
	component: RoundButton,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof RoundButton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {
		icon: <ShareOutlined />,
		children: 'Share',
	},
}
