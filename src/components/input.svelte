<script lang="ts">
	export let name: string;
	export let input: string;
	export let placeholder: string;
	export let type: 'text' | 'number' | 'email' | 'password';
	export let autocomplete: string;

	function handleInput(e: any) {
		input = e.target.value;
	}
</script>

<div class="my-2">
	<label for="price" class="block text-sm font-medium text-gray-700">{name}</label>
	<div class="relative mt-1 rounded-md shadow-md border">
		<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
			<!-- <span class="text-gray-500 sm:text-sm">$</span> -->
		</div>
		<input
			on:change={handleInput}
			{type}
			{autocomplete}
			class="block w-full py-2 rounded-md border-gray-300 px-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
			{placeholder}
		/>
	</div>
</div>
