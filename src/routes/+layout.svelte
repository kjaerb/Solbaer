<script>
	import '../app.css';
	import Header from '../components/layout/header.svelte';
	import Footer from '../components/layout/footer.svelte';
</script>

<div class="mx-auto max-w-screen px-8 sm:max-w-xl md:max-w-xl lg:max-w-4xl h-screen">
	<Header />

	<slot />

	<Footer />
</div>
