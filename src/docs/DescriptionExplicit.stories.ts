import type { Meta, StoryObj } from "@storybook/svelte";

import DescriptionComponent from "./DescriptionComponent.svelte";

/**
 * This description was set above the `const meta` in the regular CSF file.
 */
const meta = {
	title: "Description/From Comment/Regular CSF",
	component: DescriptionComponent,
	tags: ["autodocs", "!dev"],
	argTypes: {
		useMeta: { table: { disable: true } },
		useStory: { table: { disable: true } },
	},
	parameters: {
		actions: { disable: true },
		controls: { disable: true },
	},
} satisfies Meta<DescriptionComponent>;

export default meta;

type Story = StoryObj<DescriptionComponent>;

/** This is a description for the story `JSDoc`, it was set above `export const`. */
export const JSDoc: Story = { args: { useStory: true } };

export const NotDescribed: Story = {};
