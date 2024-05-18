import NameComponent from './NameComponent.svelte';

/**
 * How to set a story `name` using **Regular** CSF format.
 * @type {import("@storybook/svelte").Meta<NameComponent>}
 */
const meta = {
	component: NameComponent,
	title: 'Name/Regular CSF',
	argTypes: {
		auto: { table: { disable: true } },
		format: { table: { disable: true } },
		name: { table: { disable: true } },
	},
	parameters: {
		actions: { disable: true },
		controls: { disable: true },
		interactions: { disable: true },
	},
	tags: ['autodocs', '!dev'],
};

export default meta;

/**
 * @typedef Story
 * @type {import("@storybook/svelte").StoryObj<NameComponent>}
 */

/** @type {Story} */
export const MyRegularStory = {
	args: {
		auto: true,
		format: 'regular',
	},
	render: (args, storyContext) => ({
		Component: NameComponent,
		props: {
			...args,
			name: storyContext.name,
		},
	}),
};

/** @type {Story} */
export const ExplictlySet = {
	name: 'Explictly Set',
	args: {
		format: 'regular',
	},
	render: (args, storyContext) => ({
		Component: NameComponent,
		props: {
			...args,
			name: storyContext.name,
		},
	}),
};
