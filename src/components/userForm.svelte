<script lang="ts">
	export let fname: string;
	export let lname: string;
	export let email: string;
	export let phone: number;
</script>

<div class="mt-0 md:mt-10">
	<div class="md:grid md:grid-cols-2 md:gap-6">
		<div class="mt-5 md:col-span-2 md:mt-0">
			<div class="overflow-hidden shadow-md rounded-lg border sm:rounded-md">
				<div class="bg-white px-4 py-5 sm:p-6">
					<div class="grid grid-cols-6 gap-6">
						<div class="col-span-6 sm:col-span-3">
							<label for="first-name" class="block text-sm font-medium text-gray-700"
								>For navn</label
							>
							<input
								bind:value={fname}
								type="text"
								name="first-name"
								id="first-name"
								autocomplete="given-name"
								class="p-1 mt-1 block w-full rounded-md border-gray-300 border shadow-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
							/>
						</div>

						<div class="col-span-6 sm:col-span-3">
							<label for="last-name" class="block text-sm font-medium text-gray-700"
								>Efter navn</label
							>
							<input
								bind:value={lname}
								type="text"
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
								name="email-address"
								id="email-address"
								autocomplete="email"
								class="p-1 mt-1 block w-full rounded-md border-gray-300 border shadow-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
							/>
						</div>
						<div class="col-span-6 sm:col-span-3">
							<label for="email-address" class="block text-sm font-medium text-gray-700"
								>Tlf nr</label
							>
							<input
								bind:value={phone}
								type="number"
								name="email-address"
								id="email-address"
								autocomplete="phone"
								class="p-1 mt-1 block w-full rounded-md border-gray-300 border shadow-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
