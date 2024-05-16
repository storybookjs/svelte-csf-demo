<script context="module">
	import { Story } from '@storybook/addon-svelte-csf';

	import TypedComponent from './TypedComponent.svelte';

	/**
	 * How to type `meta` for stories file using **JSDoc**.
	 * @type {import("@storybook/svelte").Meta<TypedComponent>}
	 */
	export const meta = {
		title: 'Typed/JSDoc/Svelte CSF',
		component: TypedComponent,
		argTypes: {
			csf: { table: { disable: true } },
			system: { table: { disable: true } },
		},
		tags: ['autodocs', '!dev'],
	};
</script>

<Story name="Default">
	<TypedComponent csf="svelte" system="jsdoc" />
</Story>
