import type { Meta, StoryObj } from '@storybook/react'
import { DropDownSelect } from './DropDownSelect'

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
	args: {},
}
