<script lang="ts">
	import type { Option } from '../types/Option';
	import type { User } from '@prisma/client';
	import Selector from '../components/selector.svelte';
	import UserForm from '../components/userForm.svelte';

	interface order {
		name: Option;
		kg: number;
	}

	$: user = {} as User;

	$: orders = [{ name: '-', kg: 0 }] as order[];

	function addOrder() {
		orders = [...orders, { name: '-', kg: 0 }];
	}
</script>

<div class="w-full">
	<div class="text-center">
		<h1 class="text-center text-4xl pt-2">Forudbestil dine ribs og solbær</h1>
		<p>
			Udfyld formen for at blive kontaktet, med information om hvornår vi høster, samt
			afhentningstidspunkt
		</p>
	</div>
	<UserForm
		bind:fname={user.fname}
		bind:lname={user.lname}
		bind:email={user.email}
		bind:phone={user.phone}
	/>
	<div class="p-4 flex justify-center items-center flex-col">
		{#each orders as order}
			{#key order.name}
				<Selector bind:kg={order.kg} bind:name={order.name} />
			{/key}
		{/each}
		{#if orders.length < 2}
			<div on:click={addOrder} class="flex justify-center items-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6 text-green-400 mr-2"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
				<button class="text-green-400 font-bold my-4">Tilføj bestilling</button>
			</div>
		{/if}
	</div>
	<button
		class="mx-auto shadow-lg border rounded-md w-full text-lg py-2 mt-10 bg-green-500 text-white font-bold"
		on:click={() => {
			console.log(orders, user);
		}}>Bestil</button
	>
</div>
