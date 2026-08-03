<script lang="ts">
	import './layout.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import SakuraPetals from '$lib/components/SakuraPetals.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>SAKURA - Kubus Sensorik & Aromaterapi Kopi Anak ASD</title>
	<meta name="description" content="Inovasi media terapi berbasis limbah sabut kelapa dengan stimulasi multisensori, aromaterapi kopi, dan pembelajaran emosi dalam satu kubus multifungsi." />
	<meta name="keywords" content="SAKURA, Kubus Sensorik, Terapi Autis, ASD, Sabut Kelapa, Aromaterapi Kopi, Polije, Jember, ABK, SLB" />
	<meta property="og:title" content="SAKURA - Kubus Sensorik & Aromaterapi Anak ASD" />
	<meta property="og:description" content="Media terapi stimulasi sensorik alami untuk anak autis dan kebutuhan khusus." />
</svelte:head>

<div
	data-sveltekit-preload-data="hover"
	class="min-h-screen bg-gradient-to-b from-[#FFF5F6] via-[#FFF9F0] to-[#FFF5F6] text-slate-800 relative flex flex-col font-sans selection:bg-pink-300 selection:text-pink-900"
>
	<!-- Background Floating Sakura Petals -->
	<SakuraPetals />

	<!-- Header Navbar -->
	<Navbar />

	<!-- Main Page Slot -->
	<main class="flex-1 relative z-10 w-full">
		{@render children()}
	</main>

	<!-- Footer -->
	<Footer />
</div>
