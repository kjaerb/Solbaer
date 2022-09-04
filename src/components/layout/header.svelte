<script>
	import { goto } from '$app/navigation';
</script>

<div
	on:click={() => goto('/')}
	class="py-4 flex justify-center items-center border-b cursor-pointer"
>
	<img class="mx-auto" src={'/logo.png'} alt="" />
</div>
