import type { Meta, StoryObj } from '@storybook/react'
import { Post } from './Post.1'

const meta = {
	title: 'Example/Post',
	component: Post,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Post>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {
		title: 'Lorem ipsum',
		content: `Lorem ipsum dolor sit amet,
officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet.

Nisi anim cupidatat excepteur officia.

Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident.

Nostrud officia pariatur ut officia.

Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate.

Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod.

Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim.

Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.`,
		comments: [
			'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
			'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
		],
	},
}
