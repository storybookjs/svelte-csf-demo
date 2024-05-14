import TypedComponent from './TypedComponent.svelte';

/**
 * How to type `meta` for stories file using **JSDoc**.
 * @type {import("@storybook/svelte").Meta<TypedComponent>}
 */
const meta = {
	title: 'Typed/JSDoc/Regular CSF',
	component: TypedComponent,
	argTypes: {
		csf: { table: { disable: true } },
		system: { table: { disable: true } },
	},
	tags: ['autodocs', '!dev'],
};

export default meta;

/**
 * @typedef Story
 * @type {import("@storybook/svelte").StoryObj<TypedComponent>}
 */

/** @type {Story} */
export const Default = {
	args: { csf: 'regular', system: 'jsdoc' },
};
