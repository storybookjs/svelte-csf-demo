<script>
	/** @type {boolean} */
	export let auto = false;
	/** @type {string} */
	export let title;
</script>

<p>
	Title is <strong>{auto ? 'automatically' : 'explicitly'}</strong> set to:
</p>

<blockquote>"<strong>{title}</strong>"</blockquote>

<p>
	in <code>export const meta</code>.
</p>

<p>Take a look at the source of stories file for an example.</p>
