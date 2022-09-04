<script lang="ts">
	import app from '$lib/firebase';
	import { onMount } from 'svelte';
	import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
	import { goto } from '$app/navigation';

	const auth = getAuth();

	onMount(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				console.log('Welcome ' + user.email);
			} else {
				goto('/admin');
			}
		});
	});

	function logout() {
		signOut(auth)
			.then(() => {
				console.log('signing out');
			})
			.catch((error) => {
				console.error(error);
			});
	}
</script>

<div>
	<h1>Hello orders</h1>
	<button on:click={logout}>Log ud</button>
</div>
