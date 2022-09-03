<script>
	import '../app.css';
	import Header from '../components/header.svelte';
	import Footer from '../components/footer.svelte';
</script>

<div class="mx-auto max-w-xs sm:max-w-xl md:max-w-xl lg:max-w-4xl h-screen">
	<Header />

	<slot />

	<Footer />
</div>
