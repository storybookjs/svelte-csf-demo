import type { Meta, StoryObj } from "@storybook/svelte";

import DescriptionComponent from "./DescriptionComponent.svelte";

/**
 * This description was set above the `const meta` in the regular CSF file.
 */
const meta = {
	title: "Description Set Explicitly/Regular CSF",
	component: DescriptionComponent,
	tags: ["autodocs"],
	argTypes: {
		useMeta: { table: { disable: true } },
		useStory: { table: { disable: true } },
	},
	parameters: {
		actions: { disable: true },
		controls: { disable: true },
		docs: {
			description: {
				component:
					"This description was explicitly set in the `meta.parameters`. It will override the comment above the `export const meta`.",
			},
		},
	},
} satisfies Meta<DescriptionComponent>;

export default meta;

type Story = StoryObj<DescriptionComponent>;

export const FromMeta: Story = { args: { useMeta: true }, tags: ["!dev"] };

/** This is a description for the story `JSDoc`, it was set above `export const JDDoc`. */
export const JSDoc: Story = {
	args: { useStory: true },
	parameters: {
		docs: {
			description: {
				story:
					"This explicitly set description overrides the JSDoc comment above the `export const JSDoc`.",
			},
		},
	},
	tags: ["!dev"],
};

export const NotDescribed: Story = { tags: ["!dev"] };
