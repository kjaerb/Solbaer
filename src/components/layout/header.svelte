<script>
	import { goto } from '$app/navigation';
	import { userStore } from '../../stores/user';
	import { signOut, getAuth } from 'firebase/auth';

	const auth = getAuth();

	function logout() {
		signOut(auth)
			.then(() => {
				console.log('signing out');
				userStore.set(undefined);
				goto('/admin');
			})
			.catch((error) => {
				console.error(error);
			});
	}
</script>

<div class="py-4 flex justify-center items-center border-b flex-col">
	<img on:click={() => goto('/')} class="cursor-pointer" src={'/logo.png'} alt="" />

	{#if $userStore}
		<div class="border-t w-full mt-4 pt-4 flex justify-between">
			<a href="/admin/orders">Velkommen {$userStore.email}</a>
			<button on:click={logout}>Log ud</button>
		</div>
	{/if}
</div>
