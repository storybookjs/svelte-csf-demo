import type { Meta, StoryObj } from '@storybook/svelte';

import TypedTypeScriptComponent from './TypedTypeScriptComponent.svelte';

/**
 * How to type `meta` for stories file using **TypeScript**.
 */
const meta = {
	title: 'Typed/TypeScript/Regular CSF',
	component: TypedTypeScriptComponent,
	tags: ['autodocs'],
} satisfies Meta<TypedTypeScriptComponent>;

export default meta;

type Story = StoryObj<TypedTypeScriptComponent>;

export const Playground: Story = {
	args: {
		sampleRequiredBoolean: true,
		sampleRequiredString: 'I agree',
		sampleRequiredNumber: 10,
		sampleRequiredArray: ['I', 'like', 'Svelte', 'and', 'Storybook'],
		sampleRequiredEnum: 'storybook',
		sampleRequiredObject: { tool: 'storybook', rating: 10 },
	},
};
