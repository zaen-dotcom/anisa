<script lang="ts">
	import Cube3D from '$lib/components/Cube3D.svelte';
	import SideDetailModal from '$lib/components/SideDetailModal.svelte';
	import { CUBE_SIDES, type SensorySide } from '$lib/data/sakura';
	import { playPopSound, triggerConfetti } from '$lib/utils/sound';
	import { Sparkles, ShieldCheck, Heart, Eye, CheckCircle2, Leaf, Coffee, Volume2, ArrowRight } from 'lucide-svelte';

	let activeSideId = $state(1);
	let selectedModalSide = $state<SensorySide | null>(null);

	let currentSide = $derived(CUBE_SIDES.find((s) => s.id === activeSideId) || CUBE_SIDES[0]);

	function selectSide(id: number) {
		playPopSound(500);
		activeSideId = id;
	}

	function openModal(side: SensorySide, e: MouseEvent) {
		playPopSound(600);
		const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
		triggerConfetti((rect.left + rect.width / 2) / window.innerWidth, (rect.top + rect.height / 2) / window.innerHeight);
		selectedModalSide = side;
	}
</script>

<svelte:head>
	<title>Produk & Fitur 6 Sisi - SAKURA Kubus Sensorik</title>
	<meta name="description" content="Detail lengkap 6 sisi interaktif SAKURA: Sensori Tekstur, Pengenalan Emosi, Biji Kopi & Aromaterapi, Motorik Halus, Manik-manik, dan Geometri Warna." />
</svelte:head>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
	<!-- Page Header -->
	<div class="text-center max-w-3xl mx-auto space-y-4">
		<span class="bg-pink-100 text-pink-700 text-xs font-black px-4 py-1.5 rounded-full border border-pink-200 uppercase tracking-wider">
			Multisensori Multifungsi
		</span>
		<h1 class="font-heading font-black text-4xl sm:text-5xl text-slate-900">
			Detail 6 Sisi <span class="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">Kubus SAKURA</span>
		</h1>
		<p class="text-slate-600 text-base font-medium leading-relaxed">
			Setiap sisi kubus SAKURA dirancang secara terukur untuk memberikan stimulasi spesifik: perabaan, penciuman aromaterapi kopi, pengenalan emosi, motorik halus, dan kognitif.
		</p>
	</div>

	<!-- Interactive Side Explorer Section -->
	<div class="bg-white rounded-3xl p-6 sm:p-10 border-2 border-pink-100 shadow-xl space-y-8">
		<div class="flex items-center justify-between border-b border-slate-100 pb-4">
			<div class="flex items-center gap-2">
				<Sparkles class="w-5 h-5 text-pink-500" />
				<h2 class="font-heading font-extrabold text-xl text-slate-800">Eksplorasi Sisi Interaktif</h2>
			</div>
			<span class="text-xs font-bold text-slate-400">Pilih Sisi 1 - 6</span>
		</div>

		<!-- Tab Selector Buttons -->
		<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
			{#each CUBE_SIDES as side}
				<button
					onclick={() => selectSide(side.id)}
					class="p-3.5 rounded-2xl font-heading font-bold text-xs sm:text-sm transition-all duration-200 flex flex-col items-center gap-1 cursor-pointer border-2 {side.id === activeSideId
						? 'bg-gradient-to-r ' + side.color + ' text-white border-transparent shadow-md scale-105'
						: 'bg-slate-50 text-slate-700 border-slate-100 hover:bg-pink-50 hover:border-pink-200'}"
				>
					<span class="text-[10px] opacity-80 uppercase">Sisi #{side.id}</span>
					<span class="text-center leading-tight">{side.name}</span>
				</button>
			{/each}
		</div>

		<!-- Active Side Showcase Card -->
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-gradient-to-br from-pink-50/50 to-amber-50/50 p-6 sm:p-8 rounded-3xl border border-pink-100">
			<div class="lg:col-span-7 space-y-6">
				<div class="flex items-center gap-2">
					<span class="bg-gradient-to-r {currentSide.color} text-white font-extrabold text-xs px-3.5 py-1 rounded-full shadow-xs">
						Sisi #{currentSide.id} Active
					</span>
					<span class="text-xs font-semibold text-slate-500">SAKURA Sensory Side</span>
				</div>

				<h2 class="font-heading font-black text-2xl sm:text-3xl text-slate-900">
					{currentSide.name}
				</h2>
				<p class="text-pink-600 font-bold text-sm">
					{currentSide.subtitle}
				</p>

				<p class="text-slate-700 text-sm sm:text-base leading-relaxed">
					{currentSide.description}
				</p>

				<!-- Tactile Elements -->
				<div class="space-y-2">
					<h4 class="text-xs font-bold uppercase tracking-wider text-slate-500">Elemen Taktil & Material:</h4>
					<div class="flex flex-wrap gap-2">
						{#each currentSide.tactileElements as item}
							<span class="bg-white text-slate-800 px-3 py-1.5 rounded-xl text-xs font-bold border border-slate-200 shadow-2xs flex items-center gap-1.5">
								<CheckCircle2 class="w-3.5 h-3.5 text-emerald-500" /> {item}
							</span>
						{/each}
					</div>
				</div>

				<!-- Therapeutic Benefits -->
				<div class="space-y-2">
					<h4 class="text-xs font-bold uppercase tracking-wider text-slate-500">Manfaat Terapi:</h4>
					<ul class="space-y-1.5">
						{#each currentSide.therapeuticBenefits as benefit}
							<li class="text-xs sm:text-sm text-slate-700 font-medium flex items-start gap-2">
								<ShieldCheck class="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
								<span>{benefit}</span>
							</li>
						{/each}
					</ul>
				</div>

				<div class="pt-2">
					<button
						onclick={(e) => openModal(currentSide, e)}
						class="bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-2xl shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center gap-2 cursor-pointer"
					>
						<Eye class="w-4 h-4" /> Buka Modal Pop-up Interaktif Sisi #{currentSide.id}
					</button>
				</div>
			</div>

			<!-- Right Illustration Banner -->
			<div class="lg:col-span-5 bg-white p-6 rounded-3xl border border-pink-200 text-center space-y-4 shadow-md">
				<div class="w-24 h-24 mx-auto rounded-3xl bg-gradient-to-tr {currentSide.color} text-white flex items-center justify-center font-heading font-black text-3xl shadow-lg">
					#{currentSide.id}
				</div>
				<h3 class="font-heading font-extrabold text-xl text-slate-800">
					{currentSide.name}
				</h3>
				<p class="text-xs text-slate-500 font-medium">
					{currentSide.materialDetails}
				</p>
				<div class="pt-2">
					<span class="inline-flex items-center gap-1 bg-pink-50 text-pink-700 text-xs font-bold px-3 py-1 rounded-full">
						<Volume2 class="w-3.5 h-3.5" /> Responsif & Non-Toxic
					</span>
				</div>
			</div>
		</div>
	</div>

	<!-- Interactive 3D Cube Canvas Preview -->
	<div class="bg-gradient-to-r from-pink-100/70 via-amber-50/70 to-purple-100/70 p-8 rounded-3xl border-2 border-pink-200 shadow-xl space-y-6">
		<div class="text-center max-w-2xl mx-auto space-y-2">
			<span class="bg-white text-pink-600 text-xs font-extrabold px-3 py-1 rounded-full shadow-2xs">
				Visualisasi 3D
			</span>
			<h2 class="font-heading font-black text-2xl sm:text-3xl text-slate-900">
				Pratinjau Kubus 3D Interaktif
			</h2>
			<p class="text-slate-600 text-xs sm:text-sm font-medium">
				Putar kubus 3D di bawah ini untuk mengamati penataan 6 sisi SAKURA secara realistis!
			</p>
		</div>

		<Cube3D />
	</div>

	<!-- Material & Safety Commitment -->
	<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
		<div class="bg-emerald-50 p-6 rounded-3xl border border-emerald-200 space-y-3">
			<div class="w-10 h-10 bg-emerald-500 text-white rounded-2xl flex items-center justify-center font-bold">
				<Leaf class="w-5 h-5" />
			</div>
			<h3 class="font-heading font-extrabold text-lg text-emerald-900">Sabut Kelapa Steril</h3>
			<p class="text-slate-600 text-xs leading-relaxed font-medium">
				Diproses khusus secara higienis sehingga aman bagi kulit sensitif anak tanpa menimbulkan resiko alergi.
			</p>
		</div>

		<div class="bg-amber-50 p-6 rounded-3xl border border-amber-200 space-y-3">
			<div class="w-10 h-10 bg-amber-600 text-white rounded-2xl flex items-center justify-center font-bold">
				<Coffee class="w-5 h-5" />
			</div>
			<h3 class="font-heading font-extrabold text-lg text-amber-900">Kopi Asli Jember</h3>
			<p class="text-slate-600 text-xs leading-relaxed font-medium">
				Aromaterapi biji kopi sangrai pilihan memberikan efek alami menenangkan dan fokus terapi.
			</p>
		</div>

		<div class="bg-pink-50 p-6 rounded-3xl border border-pink-200 space-y-3">
			<div class="w-10 h-10 bg-pink-500 text-white rounded-2xl flex items-center justify-center font-bold">
				<ShieldCheck class="w-5 h-5" />
			</div>
			<h3 class="font-heading font-extrabold text-lg text-pink-900">Aman & Bebas Sudut Tajam</h3>
			<p class="text-slate-600 text-xs leading-relaxed font-medium">
				Sudut kubus empuk dengan jahitan ganda yang kokoh, lulus uji daya tahan aktivitas anak ASD.
			</p>
		</div>
	</div>
</div>

<!-- Modal Component -->
<SideDetailModal side={selectedModalSide} onClose={() => (selectedModalSide = null)} />
