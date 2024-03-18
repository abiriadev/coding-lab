import type { Meta, StoryObj } from '@storybook/react'
import { RelativeTimestamp } from './RelativeTimestamp'
import { subHours } from 'date-fns'

const meta = {
	title: 'Example/RelativeTimestamp',
	component: RelativeTimestamp,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof RelativeTimestamp>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {
		time: subHours(new Date(), 1),
	},
}
