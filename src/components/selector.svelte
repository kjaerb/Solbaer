<script lang="ts">
	import type { Option } from '../types/Option';

	export let kg: number | undefined;
	export let name: Option;
	let options: Option[] = ['-', 'Solbær', 'Ribs'];

	if (kg == 0) {
		kg = undefined;
	}
</script>

<div class="grid grid-cols-2 gap-6 pb-6 px-2">
	<select
		class="p-2 border shadow-md rounded-md w-full col-span-1 sm:col-span-1 dark:bg-gray-500 dark:text-white"
		bind:value={name}
	>
		{#each options as option}
			<option class="dark:text-white" value={option}>{option}</option>
		{/each}
	</select>
	<div class="flex justify-center items-center w-full">
		<input
			disabled={name === '-'}
			bind:value={kg}
			class="col-span-6 sm:col-span-3 p-2 block w-full rounded-md dark:bg-gray-500 dark:text-white border-gray-300 border shadow-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-right"
			type="number"
		/>
		<p class="ml-1 dark:text-white">Kg</p>
	</div>
</div>
