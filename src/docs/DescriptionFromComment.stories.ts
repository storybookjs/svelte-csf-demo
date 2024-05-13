import type { Meta, StoryObj } from '@storybook/svelte';

import DescriptionComponent from './DescriptionComponent.svelte';

/**
 * This description was set above the `const meta` in the regular CSF file.
 */
const meta = {
	title: 'Description/From Parameters/Regular CSF',
	component: DescriptionComponent,
	tags: ['autodocs', '!dev'],
	argTypes: {
		useMeta: { table: { disable: true } },
		useStory: { table: { disable: true } },
	},
	parameters: {
		actions: { disable: true },
		controls: { disable: true },
		docs: {
			description: {
				component:
					'This description was explicitly set in the `meta.parameters`. It will override the comment above the `export const meta`.',
			},
		},
	},
} satisfies Meta<DescriptionComponent>;

export default meta;

type Story = StoryObj<DescriptionComponent>;

/** This is a description for the story `Parameters`, it was set above `export const Parameters`. */
export const Parameters: Story = {
	args: { useStory: true },
	parameters: {
		docs: {
			description: {
				story:
					'This explicitly set description overrides the JSDoc comment above the `export const Parameters`.',
			},
		},
	},
};

export const NotDescribed: Story = {};