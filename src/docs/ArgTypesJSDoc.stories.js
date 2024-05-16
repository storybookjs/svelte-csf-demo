import ArgTypesJSDocComponent from './ArgTypesJSDocComponent.svelte';

/**
 * How to type `meta` for stories file using **JSDoc**.
 * @type {import("@storybook/svelte").Meta<ArgTypesJSDocComponent>}
 */
const meta = {
	title: 'ArgTypes/JSDoc/Regular CSF',
	component: ArgTypesJSDocComponent,
	tags: ['autodocs'],
};

export default meta;

/**
 * @typedef Story
 * @type {import("@storybook/svelte").StoryObj<ArgTypesJSDocComponent>}
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
