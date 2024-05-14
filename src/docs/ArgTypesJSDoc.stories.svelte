<script context="module">
	import { Story } from '@storybook/addon-svelte-csf';

	import ArgTypesJSDocComponent from './ArgTypesJSDocComponent.svelte';

	/**
	 * How to type `meta` for stories file using **JSDoc**.
	 * @type {import("@storybook/svelte").Meta<ArgTypesJSDocComponent>}
	 */
	export const meta = {
		title: 'ArgTypes/JSDoc/Svelte CSF',
		component: ArgTypesJSDocComponent,
		tags: ['autodocs'],
	};
</script>

<Story
	name="Playground"
	args={{
		sampleRequiredBoolean: true,
		sampleRequiredString: 'I agree',
		sampleRequiredNumber: 10,
		sampleRequiredArray: ['I', 'like', 'Svelte', 'and', 'Storybook'],
		sampleRequiredEnum: 'storybook',
		sampleRequiredObject: { tool: 'storybook', rating: 10 },
	}}
	let:args
>
	<ArgTypesJSDocComponent {...args} />
</Story>
