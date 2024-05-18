<script>
	$: count = 0;
</script>

<div>
	<h1>Counter</h1>
	<p>
		You clicked
		<code data-testid="count">{count}</code>
		times
	</p>
	<button type="button" on:click={() => count--}>Decrement</button>
	<button type="button" on:click={() => count++}>Increment</button>
</div>
