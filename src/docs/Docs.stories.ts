import DocsComponent from "./DocsComponent.svelte";
import type { Meta, StoryObj} from '@storybook/svelte';

/**
 * This is a description for the `meta` of regular CSF.
 */
const meta = {
  title: 'Docs/Regular CSF',
  component: DocsComponent,
  tags: ['autodocs'],
} satisfies Meta<DocsComponent>;

export default meta;

type Story = StoryObj<DocsComponent>;

/**
 * This is a description for the _primary_ story, `NoArgs`.
 */
export const NoArgs: Story = {};

export const TrueArgs: Story = {
  args: {
    someBoolProp: true,
  },
};

export const FalseArgs: Story = {
  args: {
    someBoolProp: false,
  },
};
