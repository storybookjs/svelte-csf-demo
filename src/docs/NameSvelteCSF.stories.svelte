<script context="module">
	import { Story } from '@storybook/addon-svelte-csf';

	import NameComponent from './NameComponent.svelte';

	/**
	 * How to set a story `name` using **Svelte** CSF format.
	 * @type {import("@storybook/svelte").Meta<NameComponent>}
	 */
	export const meta = {
		title: 'Name/Svelte CSF',
		component: NameComponent,
		argTypes: {
			auto: { table: { disable: true } },
			format: { table: { disable: true } },
			name: { table: { disable: true } },
		},
		parameters: {
			actions: { disable: true },
			controls: { disable: true },
			interactions: { disable: true },
		},
		tags: ['autodocs', '!dev'],
	};
</script>

<Story name="My Svelte Story" let:context>
	<NameComponent name={context.name} format="svelte" />
</Story>
