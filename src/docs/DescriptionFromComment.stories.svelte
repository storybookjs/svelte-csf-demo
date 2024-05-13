<script lang="ts" context="module">
	import { Story, Template } from '@storybook/addon-svelte-csf';
	import type { Meta } from '@storybook/svelte';

	import DescriptionComponent from './DescriptionComponent.svelte';

	/**
	 * This description was set above the `export const meta` inside the module tag `<script context="module">`.
	 */
	export const meta = {
		title: 'Description/From Comment/Svelte CSF',
		component: DescriptionComponent,
		tags: ['autodocs', '!dev'],
		argTypes: {
			hide: { table: { disable: true } },
		},
		parameters: {
			actions: { disable: true },
			controls: { disable: true },
		},
	} satisfies Meta<DescriptionComponent>;
</script>

<Template let:args>
	<DescriptionComponent {...args} />
</Template>

<!--
This is a description for the story `Comment`.
It was set as **HTML comment** above the `<Story>` component**.
-->
<Story name="Comment" />

<Story name="Not described" args={{ hide: true }} />
