<script lang="ts" context="module">
	import type { Meta } from '@storybook/svelte';
	import { Story } from '@storybook/addon-svelte-csf';

	import TypedComponent from './TypedComponent.svelte';

	/**
	 * How to type `meta` for stories file using **TypeScript**.
	 */
	export const meta = {
		title: 'Typed/TypeScript/Svelte CSF',
		component: TypedComponent,
		argTypes: {
			csf: { table: { disable: true } },
			system: { table: { disable: true } },
		},
		tags: ['autodocs', '!dev'],
	} satisfies Meta<TypedComponent>;
</script>

<Story name="Default">
	<TypedComponent csf="svelte" system="typescript" />
</Story>
