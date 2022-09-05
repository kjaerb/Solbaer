<script>
	import app from '$lib/firebase';
	import { getAuth, onAuthStateChanged } from 'firebase/auth';
	import '../app.css';
	import Header from '../components/layout/header.svelte';
	import Footer from '../components/layout/footer.svelte';
	import { userStore } from '../stores/user';
	import { onMount } from 'svelte';

	const auth = getAuth();

	onMount(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				userStore.set(user);
			}
		});
	});
</script>

<div class="mx-auto max-w-screen px-8 sm:max-w-xl md:max-w-xl lg:max-w-4xl h-screen ">
	<Header />

	<slot />

	<Footer />
</div>
