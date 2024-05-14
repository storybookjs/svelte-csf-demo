<script lang="ts" context="module">
	import type { Meta } from '@storybook/svelte';
	import { Story } from '@storybook/addon-svelte-csf';

	import TypedJSDocComponent from './TypedJSDocComponent.svelte';

	/**
	 * How to type `meta` for stories file using **TypeScript**.
	 */
	export const meta = {
		title: 'Typed/TypeScript/Svelte CSF',
		component: TypedJSDocComponent,
		tags: ['autodocs'],
	} satisfies Meta<TypedJSDocComponent>;
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
