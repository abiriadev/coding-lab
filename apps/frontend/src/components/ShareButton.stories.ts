import type { Meta, StoryObj } from '@storybook/react'
import { ShareButton } from './ShareButton'

const meta = {
	title: 'Example/ShareButton',
	component: ShareButton,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	args: {
		count: 123,
	},
} satisfies Meta<typeof ShareButton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {},
}
