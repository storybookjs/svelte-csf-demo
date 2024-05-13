<script lang="ts" context="module">
	import { Story, Template } from '@storybook/addon-svelte-csf';
	import type { Meta } from '@storybook/svelte';

	import DescriptionComponent from './DescriptionComponent.svelte';

	/**
	 * This description was set above the `export const meta` inside the module tag `<script context="module">`.
	 */
	export const meta = {
		title: 'Description Set Explicitly/Svelte CSF',
		component: DescriptionComponent,
		tags: ['autodocs'],
		argTypes: {
			useMeta: { table: { disable: true } },
			useStory: { table: { disable: true } },
		},
		parameters: {
			controls: { disable: true },
			docs: {
				description: {
					component:
						'This description was explicitly set in the `meta.parameters`. It will override the comment above the `export const meta`.',
				},
			},
		},
	} satisfies Meta<DescriptionComponent>;
</script>

<Template let:args>
	<DescriptionComponent {...args} />
</Template>

<Story name="From export meta" args={{ useMeta: true }} tags={['!dev']} />

<!-- This is a description for the story `HTML comment`, it was set as **HTML comment above the story**. -->
<Story
	name="Override HTML comment"
	args={{ useStory: true }}
	parameters={{
		docs: {
			description: {
				story:
					'This explicitly set description overrides the HTML comment above the story.',
			},
		},
	}}
	tags={['!dev']}
/>

<Story name="Not described" tags={['!dev']} />
