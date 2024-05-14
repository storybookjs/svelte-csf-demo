<script>
	/** {@type 'regular' | 'svelte'} */
	export let csf;
	/** {@type 'jsdoc' | 'typescript'} */
	export let system;
</script>

<!-- prettier-ignore -->
<p>
	This Svelte component demonstrates how to type stories file
	in <strong>{csf}</strong> format with
	<strong>
		{#if system === 'jsdoc'}
			JSDoc
		{:else}
			TypeScript
		{/if}
	</strong>.
</p>

<p>
	Take a look at the source code of
	<code>
		{#if csf === 'regular'}
			TypedTypeScript.stories.js
		{:else}
			TypedTypeScript.stories.svelte
		{/if}
	</code>
</p>
