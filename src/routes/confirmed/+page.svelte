<script>
	import Layout from '../../layouts/+default.svelte';
</script>

<Layout>
	<div class="my-10 flex justify-center items-center flex-col">
		<svg class="checkmark w-1/4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
			<circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
			<path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
		</svg>

		<h1 class="order-confirmed text-center dark:text-white">
			Din bestilling er modtaget. Vi kontakter dig med mere information senere.
		</h1>
	</div>
</Layout>

<style>
	.checkmark__circle {
		stroke-dasharray: 166;
		stroke-dashoffset: 166;
		stroke-width: 2;
		stroke-miterlimit: 10;
		stroke: #7ac142;
		fill: none;
		animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
	}

	.checkmark {
		border-radius: 50%;
		display: block;
		stroke-width: 2;
		stroke: #fff;
		stroke-miterlimit: 10;
		margin: 10% auto;
		box-shadow: inset 0px 0px 0px #7ac142;
		animation: fill 0.4s ease-in-out 0.4s forwards, scale 0.3s ease-in-out 0.9s both;
	}

	.checkmark__check {
		transform-origin: 50% 50%;
		stroke-dasharray: 48;
		stroke-dashoffset: 48;
		animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
	}

	.order-confirmed {
		opacity: 0;
		animation-delay: 1.2s;
		animation-name: flyin;
		animation-duration: 1s;
		animation-fill-mode: forwards;
	}

	@keyframes flyin {
		0% {
			transform: translateY(100%);
			opacity: 0;
		}
		100% {
			transform: translate(0%);
			opacity: 1;
		}
	}

	@keyframes stroke {
		100% {
			stroke-dashoffset: 0;
		}
	}
	@keyframes scale {
		0%,
		100% {
			transform: none;
		}
		50% {
			transform: scale3d(1.1, 1.1, 1);
		}
	}
	@keyframes fill {
		100% {
			box-shadow: inset 0px 0px 0px 66px #7ac142;
		}
	}
</style>
