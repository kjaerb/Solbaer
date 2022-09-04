<script lang="ts">
	export let fname: string | undefined;
	export let lname: string | undefined;
	export let email: string | undefined;
	export let phone: number | undefined;
</script>

<div class="bg-white px-4 py-5 sm:p-6 border-b">
	<div class="grid grid-cols-6 gap-6">
		<div class="col-span-6 sm:col-span-3">
			<label for="first-name" class="block text-sm font-medium text-gray-700">For navn</label>
			<input
				bind:value={fname}
				type="text"
				required
				name="first-name"
				id="first-name"
				autocomplete="given-name"
				class="p-1 mt-1 block w-full rounded-md border-gray-300 border shadow-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
			/>
		</div>

		<div class="col-span-6 sm:col-span-3">
			<label for="last-name" class="block text-sm font-medium text-gray-700">Efter navn</label>
			<input
				bind:value={lname}
				type="text"
				required
				name="last-name"
				id="last-name"
				autocomplete="family-name"
				class="p-1 mt-1 block w-full rounded-md border-gray-300 border shadow-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
			/>
		</div>

		<div class="col-span-6 sm:col-span-3">
			<label for="email-address" class="block text-sm font-medium text-gray-700"
				>Email addresse</label
			>
			<input
				bind:value={email}
				type="text"
				required
				name="email-address"
				id="email-address"
				autocomplete="email"
				class="p-1 mt-1 block w-full rounded-md border-gray-300 border shadow-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
			/>
		</div>
		<div class="col-span-6 sm:col-span-3">
			<label for="email-address" class="block text-sm font-medium text-gray-700">Tlf nr</label>
			<input
				bind:value={phone}
				type="number"
				required
				name="email-address"
				id="email-address"
				autocomplete="phone"
				class="p-1 mt-1 block w-full rounded-md border-gray-300 border shadow-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
			/>
		</div>
	</div>
</div>
