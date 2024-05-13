import type { Meta, StoryObj } from "@storybook/svelte";

import DescriptionComponent from "./DescriptionComponent.svelte";

/**
 * This description was set above the `const meta` in the regular CSF file.
 */
const meta = {
	title: "Description From Comment/Regular CSF",
	component: DescriptionComponent,
	tags: ["autodocs"],
	argTypes: {
		useMeta: { table: { disable: true } },
		useStory: { table: { disable: true } },
	},
	parameters: {
		controls: { disable: true },
	},
} satisfies Meta<DescriptionComponent>;

export default meta;

type Story = StoryObj<DescriptionComponent>;

export const FromMeta: Story = { args: { useMeta: true }, tags: ["!dev"] };

/** This is a description for the story `JS Doc`, it was set above `export const JDDoc`. */
export const JSDoc: Story = { args: { useStory: true }, tags: ["!dev"] };

export const NotDescribed: Story = { tags: ["!dev"] };
