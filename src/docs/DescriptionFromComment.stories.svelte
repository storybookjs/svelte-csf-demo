<script lang="ts" context="module">
	import { Story, Template } from '@storybook/addon-svelte-csf';
	import type { Meta } from '@storybook/svelte';

	import DescriptionComponent from './DescriptionComponent.svelte';

	/**
	 * This description was set above the `export const meta` inside the module tag `<script context="module">`.
	 */
	export const meta = {
		title: 'Description From Comment/Svelte CSF',
		component: DescriptionComponent,
		tags: ['autodocs'],
		argTypes: {
			useMeta: { table: { disable: true } },
			useStory: { table: { disable: true } },
		},
		parameters: {
			controls: { disable: true },
		},
	} satisfies Meta<DescriptionComponent>;
</script>

<Template let:args>
	<DescriptionComponent {...args} />
</Template>

<Story name="From export meta" args={{ useMeta: true }} tags={['!dev']} />

<!-- This is a description for the story `HTML comment`, it was set as **HTML comment above the story**. -->
<Story name="HTML comment" args={{ useStory: true }} tags={['!dev']} />

<Story name="Not described" tags={['!dev']} />
