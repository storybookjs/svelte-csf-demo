import type { Meta, StoryObj } from '@storybook/svelte';

import TypedComponent from './TypedComponent.svelte';

/**
 * How to type `meta` for stories file using **TypeScript**.
 */
const meta = {
	title: 'Typed/TypeScript/Regular CSF',
	component: TypedComponent,
	argTypes: {
		csf: { table: { disable: true } },
		system: { table: { disable: true } },
	},
	tags: ['autodocs', '!dev'],
} satisfies Meta<TypedComponent>;

export default meta;

type Story = StoryObj<TypedComponent>;

export const Default: Story = {
	args: { csf: 'regular', system: 'typescript' },
};
