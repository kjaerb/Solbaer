<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { getAuth, onAuthStateChanged } from 'firebase/auth';
	import { collection, getDocs } from 'firebase/firestore';
	import Layout from '../../../layouts/+admin.svelte';
	import { goto } from '$app/navigation';
	import type { User } from 'src/types/User';
	import { db } from '$lib/firebase';
	import type { Option } from '../../../types/Option';
	import Spinner from '../../../components/Spinner.svelte';
	import Modal from '../../../components/Modal/Modal.svelte';
	import { collectionData } from 'rxfire/firestore';
	import { startWith } from 'rxjs/operators';

	const auth = getAuth();

	let hasLoaded = false;
	let modalVisible = false;

	const colRef = collection(db, 'orders');
	$: orders = [] as User[];
	$: solbaer = 0 as number;
	$: ribs = 0 as number;

	function getKg(name: Option) {
		return orders
			.flatMap((o) => o.orders)
			.filter((o) => o.name === name)
			.flatMap((o) => o.kg)
			.reduce((acc, o) => acc + o);
	}

	onMount(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				console.log('Welcome ' + user.email);
			} else {
				goto('/admin');
			}
		});
		getDocs(colRef).then((snapshot) => {
			snapshot.forEach((s) => {
				orders = [...orders, s.data().user];
			});

			solbaer = getKg('Solbær');
			ribs = getKg('Ribs');
			hasLoaded = true;
		});
	});

	function toDateTime(secs: number) {
		var t = new Date(1970, 0, 1); // Epoch
		t.setSeconds(secs);
		t.setHours(t.getHours() + 2);
		return t.toLocaleString();
	}
</script>

<Layout>
	{#if !hasLoaded}
		<Spinner />
	{:else}
		<div transition:fade={{ duration: 100 }} class="overflow-x-auto relative my-4">
			<div class="py-4 flex">
				<p>Antal ordre: <span class="font-bold">{orders.length}</span></p>
				<div class="flex pl-4">
					<p>Kg solbær: {solbaer}</p>
					<p class="pl-4">Kg Ribs: {ribs}</p>
				</div>
			</div>

			<table class="w-full text-sm text-left text-gray-500">
				<thead class="text-xs text-gray-700 uppercase bg-gray-50">
					<tr>
						<th scope="col" class="py-3 px-6">Navn</th>
						<th scope="col" class="py-3 px-6">Email</th>
						<th scope="col" class="py-3 px-6">Tlf</th>
						<th scope="col" class="py-3 px-6">Bestilling</th>
						<th scope="col" class="py-3 px-6">Dato</th>
					</tr>
				</thead>
				<tbody>
					{#each orders as order, index}
						{#key index}
							<tr class="bg-white border-b">
								<td class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
									<span>
										{order.fname}
									</span>
									<span>
										{order.lname}
									</span>
								</td>
								<td
									class="py-4 px-6 font-sm text-gray-900 cursor-pointer"
									on:click={() => (modalVisible = true)}
								>
									{order.email}
								</td>
								<td class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
									{order.phone}
								</td>
								<td class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
									<ul>
										{#each order.orders as elem}
											<li>
												{elem.name}: {elem.kg}Kg
											</li>
										{/each}
									</ul>
								</td>
								<td class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
									{toDateTime(order.createdAt.seconds)}
								</td>
							</tr>
						{/key}
					{/each}
				</tbody>
			</table>
		</div>
	{/if}
	<Modal visible={modalVisible} closeModal={() => (modalVisible = false)} />
</Layout>
