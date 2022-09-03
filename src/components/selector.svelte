<script lang="ts">
	import type { Option } from '../types/Option';

	const options: Option[] = ['-', 'Ribs', 'Solbær'];
	export let kg: number | undefined;
	export let name: Option;

	if (kg == 0) {
		kg = undefined;
	}
</script>

<div class="flex justify-center items-center my-2">
	<select class="p-2 border shadow-md rounded-md w-32" bind:value={name}>
		{#each options as option}
			<option value={option}>{option}</option>
		{/each}
	</select>
	<input
		disabled={name === '-'}
		bind:value={kg}
		class="ml-4 mr-1 p-2 border shadow-md rounded-md w-24 text-right"
		type="number"
		placeholder=""
	/>
	<p>Kg</p>
</div>
