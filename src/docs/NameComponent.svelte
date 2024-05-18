<script>
	/** @type {'regular' | 'svelte'} */
	export let format;
	/** @type {boolean} */
	export let auto = false;
	/** @type {string} */
	export let name;
</script>

<p>
	The story <code>name</code> is {auto ? 'automatically' : 'explictly'} set to:
</p>

<blockquote>"<strong>{name}</strong>"</blockquote>

<p>
	{#if format === 'regular'}
		in <code>export const StoryObj{auto ? '' : '.name'}</code>
	{:else}
		in <code>{`<Story name="${name}" />`}</code>.
	{/if}
</p>

<p>Take a look at the source of stories file for an example.</p>
