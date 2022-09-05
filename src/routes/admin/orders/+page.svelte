<script lang="ts">
	import { onMount } from 'svelte';
	import { getAuth, onAuthStateChanged } from 'firebase/auth';
	import { collection, getDocs } from 'firebase/firestore';
	import Layout from '../../../layouts/+admin.svelte';
	import { goto } from '$app/navigation';
	import type { User } from 'src/types/User';
	import { db } from '$lib/firebase';
	import type { Option } from '../../../types/Option';

	const auth = getAuth();

	const colRef = collection(db, 'orders');
	$: orders = [] as User[];
	$: solbaer = 0 as number;
	$: ribs = 0 as number;

	function getKg(name: Option) {
		let res = 0;

		orders.forEach((order) => {
			order.orders.forEach((elem) => {
				if (elem.name === name) {
					res += elem.kg;
				}
			});
		});

		return res;
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
	<div class="overflow-x-auto relative my-4">
		<div class="py-4 flex justify-between">
			<p>Antal ordre: {orders.length}</p>
			<div class="flex">
				<p>Kg solbær: {solbaer}</p>
				<p class="pl-2">Kg Ribs: {ribs}</p>
			</div>
		</div>

		<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
			<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
						<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
							<td class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
								<span>
									{order.fname}
								</span>
								<span>
									{order.lname}
								</span>
							</td>
							<td class="py-4 px-6 font-sm text-gray-900  dark:text-white">
								{order.email}
							</td>
							<td class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
								{order.phone}
							</td>
							<td class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
								<ul>
									{#each order.orders as elem}
										<li>
											{elem.name}: {elem.kg}Kg
										</li>
									{/each}
								</ul>
							</td>
							<td class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
								{toDateTime(order.createdAt.seconds)}
							</td>
						</tr>
					{/key}
				{/each}
			</tbody>
		</table>
	</div>
</Layout>
