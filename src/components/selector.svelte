<script lang="ts">
	import type { Option } from '../types/Option';

	export let kg: number | undefined;
	export let name: Option;
	let options: Option[] = ['-', 'Solbær', 'Ribs'];

	if (kg == 0) {
		kg = undefined;
	}

	let kgOptions = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
</script>

<div class="grid grid-cols-2 gap-6 pb-6 px-2">
	<select class="p-2 border shadow-md rounded-md w-full col-span-1 sm:col-span-1" bind:value={name}>
		{#each options as option}
			<option value={option}>{option}</option>
		{/each}
	</select>
	<div class="flex justify-center items-center w-full">
		<select class="w-full border shadow-md p-2 rounded-md" bind:value={kg}>
			{#if name !== '-'}
				{#each kgOptions as option}
					<option value={option}>{option}</option>
				{/each}
			{:else}
				<option value={undefined}>-</option>
			{/if}
		</select>
		<p class="ml-1">Kg</p>
	</div>
</div>
