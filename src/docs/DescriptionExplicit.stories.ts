import type { Meta, StoryObj } from '@storybook/svelte';

import DescriptionComponent from './DescriptionComponent.svelte';

/**
 * This description was set above the `const meta` in the regular CSF file.
 */
const meta = {
	title: 'Description/From Comment/Regular CSF',
	component: DescriptionComponent,
	tags: ['autodocs', '!dev'],
	argTypes: {
		has: { table: { disable: true } },
	},
	parameters: {
		actions: { disable: true },
		controls: { disable: true },
	},
} satisfies Meta<DescriptionComponent>;

export default meta;

type Story = StoryObj<DescriptionComponent>;

/**
 * This is a description for the story `Comment`.
 * It was set as **JSDoc comment** above `export const Comment`.
 */
export const Comment: Story = {};

export const NotDescribed: Story = { args: { hide: true } };
