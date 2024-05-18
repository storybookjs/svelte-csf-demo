<script context="module">
	import { Story } from '@storybook/addon-svelte-csf';

	import TitleComponent from '../TitleComponent.svelte';

	/**
	 * How `title` is automatically set for stories file using **Svelte CSF**.
	 * @type {import("@storybook/svelte").Meta<TitleComponent>}
	 */
	export const meta = {
		component: TitleComponent,
		argTypes: {
			auto: { table: { disable: true } },
			title: { table: { disable: true } },
		},
		tags: ['autodocs', '!dev'],
	};
</script>

<Story name="Default" let:context>
	<TitleComponent title={context.title} auto />
</Story>
