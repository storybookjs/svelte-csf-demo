import TitleComponent from '../TitleComponent.svelte';

/**
 * How the `title` is automatically set for stories file using **Regular CSF**.
 * @type {import("@storybook/svelte").Meta<TitleComponent>}
 */
const meta = {
	component: TitleComponent,
	argTypes: {
		auto: { table: { disable: true } },
		title: { table: { disable: true } },
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
 * @type {import("@storybook/svelte").StoryObj<TitleComponent>}
 */

/** @type {Story} */
export const Default = {
	render: (args, storyContext) => ({
		Component: TitleComponent,
		props: {
			auto: true,
			title: storyContext.title,
		},
	}),
};
