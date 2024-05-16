<script>
	export let hide = false;
</script>

{#if hide}
	<p>This story doesn't have any description.</p>
{:else}
	<p>
		Take a look <strong>above story block</strong> to see the description.
	</p>
{/if}
