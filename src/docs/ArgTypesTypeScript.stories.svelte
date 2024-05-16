<script context="module" lang="ts">
	import { Story } from '@storybook/addon-svelte-csf';
	import type { Meta } from '@storybook/svelte';

	import ArgTypesTypeScriptComponent from './ArgTypesTypeScriptComponent.svelte';

	/**
	 * How to type `meta` for stories file using **TypeScript**.
	 */
	export const meta = {
		title: 'ArgTypes/TypeScript/Svelte CSF',
		component: ArgTypesTypeScriptComponent,
		tags: ['autodocs'],
	} satisfies Meta<ArgTypesTypeScriptComponent>;
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
	<ArgTypesTypeScriptComponent {...args} />
</Story>
