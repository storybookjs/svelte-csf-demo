<script lang="ts">
	/**
	 * Description for `sampleBoolean` component prop.
	 * NOTE: The type is automatically infered.
	 */
	export let sampleDefaultBoolean = false;
	/**
	 * Description for `sampleOptionalBoolean` component prop.
	 */
	export let sampleOptionalBoolean: boolean | undefined;
	/**
	 * Description for `sampleRequiredBoolean` component prop.
	 */
	export let sampleRequiredBoolean: boolean;

	/**
	 * Description for `sampleDefaultString` component prop.
	 * NOTE: The type is automatically infered.
	 */
	export let sampleDefaultString = 'Storybook 🤝 Svelte';
	/**
	 * Description for `sampleOptionalString` component prop.
	 * @type {string | undefined}
	 */
	export let sampleOptionalString: string | undefined;
	/**
	 * Description for `sampleRequiredString` component prop.
	 * @type {string}
	 */
	export let sampleRequiredString: string;

	/**
	 * Description for `sampleDefaultNumber` component prop.
	 * NOTE: The type is automatically infered.
	 */
	export let sampleDefaultNumber = 9000;
	/**
	 * Description for `sampleOptionalNumber` component prop.
	 */
	export let sampleOptionalNumber: number | undefined;
	/**
	 * Description for `sampleRequiredNumber` component prop.
	 */
	export let sampleRequiredNumber: number;

	/**
	 * Description for `sampleDefaultArray` component prop.
	 * NOTE: The type is automatically infered.
	 */
	export let sampleDefaultArray = ['Storybook', 'loves', 'Svelte'];
	/**
	 * Description for `sampleOptionalArray` component prop.
	 */
	export let sampleOptionalArray: string[] | undefined;
	/**
	 * Description for `sampleRequiredArray` component prop.
	 */
	export let sampleRequiredArray: string[];

	type Tool = 'svelte' | 'storybook';
	/**
	 * Description for `sampleDefaultEnum` component prop.
	 */
	export let sampleDefaultEnum: Tool = 'svelte';
	/**
	 * Description for `sampleOptionalEnum` component prop.
	 */
	export let sampleOptionalEnum: Tool | undefined;
	/**
	 * Description for `sampleRequiredEnum` component prop.
	 */
	export let sampleRequiredEnum: Tool;

	/**
	 * Description for `sampleDefaultObject` component prop.
	 * NOTE: The type is automatically infered.
	 */
	export let sampleDefaultObject = {
		tool: 'svelte',
		rating: 9000,
	};
	/**
	 * Description for `sampleOptionalObject` component prop.
	 */
	export let sampleOptionalObject: typeof sampleDefaultObject | undefined;
	/**
	 * Description for `sampleRequiredObject` component prop.
	 */
	export let sampleRequiredObject: typeof sampleDefaultObject;

	$: props = {
		sampleDefaultBoolean,
		sampleOptionalBoolean,
		sampleRequiredBoolean,

		sampleDefaultString,
		sampleOptionalString,
		sampleRequiredString,

		sampleDefaultNumber,
		sampleOptionalNumber,
		sampleRequiredNumber,

		sampleDefaultArray,
		sampleOptionalArray,
		sampleRequiredArray,

		sampleDefaultEnum,
		sampleOptionalEnum,
		sampleRequiredEnum,

		sampleDefaultObject,
		sampleOptionalObject,
		sampleRequiredObject,
	};
</script>

<p>
	This Svelte component demonstrates how to type components props to fill
	<code>ArgTypes</code> table with <strong>JSDoc</strong>.
</p>

<code>
	{#each Object.entries(props) as [name, value]}
		<strong>{name}</strong>: {JSON.stringify(value)}<br />
	{/each}
</code>
