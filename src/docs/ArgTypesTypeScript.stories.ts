import type { Meta, StoryObj } from '@storybook/svelte';

import ArgTypesTypeScriptComponent from './ArgTypesTypeScriptComponent.svelte';

/**
 * How to type `meta` for stories file using **TypeScript**.
 */
const meta = {
	title: 'ArgTypes/TypeScript/Regular CSF',
	component: ArgTypesTypeScriptComponent,
	tags: ['autodocs'],
} satisfies Meta<ArgTypesTypeScriptComponent>;

export default meta;

type Story = StoryObj<ArgTypesTypeScriptComponent>;

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
