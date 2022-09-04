<script lang="ts">
	import type { Option } from '../types/Option';

	export let kg: number | undefined;
	export let name: Option;
	let options: Option[] = ['-', 'Solbær', 'Ribs'];

	if (kg == 0) {
		kg = undefined;
	}
</script>

<div class="grid grid-cols-2 gap-6 pb-6">
	<select class="p-2 border shadow-md rounded-md w-full col-span-1 sm:col-span-1" bind:value={name}>
		{#each options as option}
			<option value={option}>{option}</option>
		{/each}
	</select>
	<div class="flex justify-center items-center w-full">
		<input
			disabled={name === '-'}
			bind:value={kg}
			class="col-span-6 sm:col-span-3 p-2 block w-full rounded-md border-gray-300 border shadow-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-right"
			type="number"
			placeholder=""
		/>
		<p class="ml-1">Kg</p>
	</div>
</div>
