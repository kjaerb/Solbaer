<script lang="ts">
	import Input from '../components/input.svelte';

	export let fname: string | undefined;
	export let lname: string | undefined;
	export let email: string | undefined;
	export let phone: number | undefined;
</script>

<div class="bg-white px-4 py-5 sm:p-6 border-b ">
	<div class="grid grid-cols-6 gap-6">
		<Input
			_class="col-span-6 sm:col-span-3"
			name="Fornavn"
			bind:input={fname}
			type="text"
			autocomplete="given-name"
			placeholder=""
		/>
		<Input
			_class="col-span-6 sm:col-span-3"
			name="Efternavn"
			bind:input={lname}
			type="text"
			autocomplete="family-name"
			placeholder=""
		/>

		<Input
			_class="col-span-6 sm:col-span-3"
			name="Email"
			bind:input={email}
			type="email"
			autocomplete="email"
			placeholder=""
		/>
		<Input
			_class="col-span-6 sm:col-span-3"
			name="Telefon nr"
			bind:input={phone}
			type="number"
			autocomplete="phone"
			placeholder=""
		/>
	</div>
</div>
