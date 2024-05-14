import TypedJSDocComponent from './TypedJSDocComponent.svelte';

/**
 * How to type `meta` for stories file using **JSDoc**.
 * @type {import("@storybook/svelte").Meta<TypedJSDocComponent>}
 */
const meta = {
	title: 'Typed/JSDoc/Regular CSF',
	component: TypedJSDocComponent,
	tags: ['autodocs'],
};

export default meta;

/**
 * @typedef Story
 * @type {import("@storybook/svelte").StoryObj<TypedJSDocComponent>}
 */

/** @type {Story} */
export const Playground = {
	args: {
		sampleRequiredBoolean: true,
		sampleRequiredString: 'I agree',
		sampleRequiredNumber: 10,
		sampleRequiredArray: ['I', 'like', 'Svelte', 'and', 'Storybook'],
		sampleRequiredEnum: 'storybook',
		sampleRequiredObject: { tool: 'storybook', rating: 10 },
	},
};
