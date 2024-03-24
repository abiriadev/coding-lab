import type { Meta, StoryObj } from '@storybook/react'
import { ProfileMenu } from './ProfileMenu'

const meta = {
	title: 'Example/ProfileMenu',
	component: ProfileMenu,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof ProfileMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {},
}
