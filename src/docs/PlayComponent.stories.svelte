<script context="module">
	import PlayComponent from './PlayComponent.svelte';

	export const meta = {
		title: 'Play/Svelte CSF',
		component: PlayComponent,
		parameters: {
			actions: { disable: true },
			controls: { disable: true },
		},
	};
</script>

<script>
	import { expect, userEvent, within } from '@storybook/test';
	import { tick } from 'svelte';

	import { Story } from '@storybook/addon-svelte-csf';

	let i = 0;
</script>

<Story
	name="Default"
	play={async (storyContext) => {
		const { canvasElement } = storyContext;
		const canvas = within(canvasElement);
		const count = await canvas.findByTestId('count');

		await userEvent.click(await canvas.findByText('Increment'));
		expect(count.textContent).toEqual('1');

		await userEvent.click(await canvas.findByText('Decrement'));
		expect(count.textContent).toEqual('0');
	}}
>
	<PlayComponent />
</Story>

<Story
	name="Custom scope"
	play={async (storyContext) => {
		const { canvasElement } = storyContext;
		const canvas = within(canvasElement);
		const element = canvas.getByTestId('count');

		expect(element.textContent).toEqual('0');

		i++;
		await tick();
		expect(element.textContent).toEqual('1');

		i--;
		await tick();
		expect(element.textContent).toEqual('0');
	}}
>
	<p data-testid="count">{i}</p>
</Story>
