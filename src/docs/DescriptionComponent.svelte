<script>
	export let useMeta = false;
	export let useStory = false;
</script>

{#if useMeta}
	<p>
		Take a look at the top in <code>Docs</code> to see description.
	</p>
{/if}

{#if useStory}
	<p>
		Take a look above the story in the <code>Docs</code> to see description.
	</p>
{/if}

{#if !useStory && !useMeta}
	<p>This story doesn't have any description.</p>
{/if}
