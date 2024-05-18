import type { Meta, StoryObj } from '@storybook/svelte';
import { expect, userEvent, within } from '@storybook/test';

import PlayComponent from './PlayComponent.svelte';

const meta = {
	title: 'Play/Regular CSF',
	component: PlayComponent,
	parameters: {
		actions: { disable: true },
		controls: { disable: true },
	},
} satisfies Meta<PlayComponent>;

export default meta;

type Story = StoryObj<PlayComponent>;

export const Default: Story = {
	play: async (storyContext) => {
		const { canvasElement } = storyContext;
		const canvas = within(canvasElement);
		const count = await canvas.findByTestId('count');

		await userEvent.click(await canvas.findByText('Increment'));
		expect(count.textContent).toEqual('1');

		await userEvent.click(await canvas.findByText('Decrement'));
		expect(count.textContent).toEqual('0');
	},
};
