<script context="module">
	import { Story } from '@storybook/addon-svelte-csf';

	import TypedJSDocComponent from './TypedJSDocComponent.svelte';

	/**
	 * How to type `meta` for stories file using **JSDoc**.
	 * @type {import("@storybook/svelte").Meta<TypedJSDocComponent>}
	 */
	export const meta = {
		title: 'Typed/JSDoc/Svelte CSF',
		component: TypedJSDocComponent,
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
/>
