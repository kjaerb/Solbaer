<script lang="ts">
	import Selector from '../components/selector.svelte';
	import UserForm from '../components/userForm.svelte';
	import { addDoc, collection } from 'firebase/firestore';
	import type { User } from '../types/User';
	import { goto } from '$app/navigation';
	import { db } from '$lib/firebase';

	const colRef = collection(db, 'orders');

	$: error = ' ' as string;

	$: user = {
		fname: undefined,
		lname: undefined,
		email: undefined,
		phone: undefined,
		orders: [{ name: '-', kg: 0 }]
	} as User;

	function addOrder() {
		user.orders = [...user.orders, { name: '-', kg: 0 }];
	}

	function clearUser() {
		user.email = undefined;
		user.fname = undefined;
		user.lname = undefined;
		user.orders = [{ name: '-', kg: 0 }];
		user.phone = undefined;
	}

	function handleAddDoc() {
		error = '';
		for (const item in user) {
			if (user[item] === undefined) {
				error = 'Udfyld venligst alle kontakt informationer';
				return;
			}
		}

		user.orders.forEach((item) => {
			console.log(item);
			if (item.kg === undefined || item.kg === 0) {
				if (item.name === '-') {
					error = `Vælg venligst et produkt`;
				} else {
					error = `Udfyld venligst antal kg for ${item.name}`;
				}
				return;
			} else if (item.kg < 5) {
				error = `Minimum bestilling for ${item.name} er 5kg. Bestil venligst ${
					5 - item.kg
				}kg mere, for at bestille`;
			}
		});

		if (error !== '') {
			return;
		}

		error = '';

		addDoc(colRef, {
			user,
			createdAt: new Date()
		});

		goto('/confirmed');
	}
</script>

<!-- svelte-ignore module-script-reactive-declaration -->
<div class="w-full pb-10">
	<div class="text-center">
		<h1 class="text-center text-4xl pt-2 dark:text-white">Forudbestil dine solbær og ribs</h1>
		<p class="dark:text-white">
			Udfyld formen for at blive kontaktet, med information om hvornår vi høster, samt
			afhentningstidspunkt
		</p>
	</div>
	<div class="mt-0 md:mt-10">
		<div class="md:grid md:grid-cols-2 md:gap-6">
			<div class="mt-5 md:col-span-2 md:mt-0">
				<div class="overflow-hidden shadow-md rounded-lg border dark:border-white sm:rounded-md">
					<UserForm
						bind:fname={user.fname}
						bind:lname={user.lname}
						bind:email={user.email}
						bind:phone={user.phone}
					/>
					<div class="px-4 p-6 dark:bg-slate-700">
						{#each user.orders as _order, index}
							{#key index}
								<Selector bind:kg={user.orders[index].kg} bind:name={user.orders[index].name} />
							{/key}
						{/each}
						{#if user.orders.length < 2}
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
				</div>
			</div>
		</div>
	</div>
	{#if error}
		<p class="text-center text-red-500 font-bold text-lg pt-2">{error}</p>
	{/if}
	<button
		class="mx-auto shadow-lg border rounded-md w-full text-lg py-2 mt-10 bg-green-500 text-white font-bold dark:border-slate-800"
		on:click={handleAddDoc}>Bestil</button
	>
</div>
