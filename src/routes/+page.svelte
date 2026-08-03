<script lang="ts">
	import Cube3D from '$lib/components/Cube3D.svelte';
	import SideDetailModal from '$lib/components/SideDetailModal.svelte';
	import { CORE_VALUES, CUBE_SIDES, SITE_CONTACT, type SensorySide } from '$lib/data/sakura';
	import { playPopSound, triggerConfetti } from '$lib/utils/sound';
	import {
		Sparkles,
		ShieldCheck,
		Leaf,
		GraduationCap,
		Coffee,
		Heart,
		MessageCircle,
		ArrowRight,
		CheckCircle2,
		Star,
		Smile,
		Volume2
	} from 'lucide-svelte';

	let activeModalSide = $state<SensorySide | null>(null);

	function openModal(side: SensorySide, e: MouseEvent) {
		playPopSound(550);
		const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
		triggerConfetti((rect.left + rect.width / 2) / window.innerWidth, (rect.top + rect.height / 2) / window.innerHeight);
		activeModalSide = side;
	}
</script>

<div class="space-y-20 pb-12">
	<!-- Hero Section -->
	<section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
			<!-- Left Text & CTAs -->
			<div class="lg:col-span-6 space-y-6 text-center lg:text-left">
				<div class="inline-flex items-center gap-2 bg-pink-100/90 text-pink-700 font-extrabold text-xs sm:text-sm px-4 py-1.5 rounded-full border border-pink-200 shadow-xs">
					<Sparkles class="w-4 h-4 text-pink-500 animate-spin" style="animation-duration: 6s;" />
					<span>Inovasi Terapi Sensori Ramah Lingkungan</span>
				</div>

				<h1 class="font-heading font-black text-4xl sm:text-5xl xl:text-6xl text-slate-900 tracking-tight leading-tight">
					SAKURA - <span class="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">Kubus Sensorik</span> untuk Anak Autis
				</h1>

				<p class="text-slate-600 text-base sm:text-lg font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
					Inovasi media terapi berbasis limbah sabut kelapa dengan stimulasi multisensori, aromaterapi kopi, dan pembelajaran emosi dalam satu kubus multifungsi.
				</p>

				<!-- Badges Pill Cloud -->
				<div class="flex flex-wrap gap-2 justify-center lg:justify-start pt-2">
					<span class="inline-flex items-center gap-1.5 bg-pink-50 text-pink-700 px-3 py-1.5 rounded-xl text-xs font-bold border border-pink-200">
						<Sparkles class="w-3.5 h-3.5" /> Stimulasi Multisensori
					</span>
					<span class="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-xl text-xs font-bold border border-emerald-200">
						<Leaf class="w-3.5 h-3.5" /> Bahan Alami Sabut Kelapa
					</span>
					<span class="inline-flex items-center gap-1.5 bg-amber-50 text-amber-800 px-3 py-1.5 rounded-xl text-xs font-bold border border-amber-200">
						<Coffee class="w-3.5 h-3.5" /> Aromaterapi Kopi
					</span>
					<span class="inline-flex items-center gap-1.5 bg-sky-50 text-sky-700 px-3 py-1.5 rounded-xl text-xs font-bold border border-sky-200">
						<ShieldCheck class="w-3.5 h-3.5" /> Usia 3-9 Tahun
					</span>
				</div>

				<!-- Action Buttons -->
				<div class="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
					<a
						href={SITE_CONTACT.waLink}
						target="_blank"
						rel="noopener noreferrer"
						onclick={() => playPopSound(600)}
						class="w-full sm:w-auto bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-4 rounded-2xl font-bold text-sm sm:text-base shadow-lg shadow-pink-500/25 hover:shadow-xl hover:shadow-pink-500/35 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3 cursor-pointer"
					>
						<MessageCircle class="w-5 h-5" />
						<span>Pesan Sekarang via WA</span>
					</a>

					<a
						href="/produk"
						onclick={() => playPopSound(400)}
						class="w-full sm:w-auto bg-white hover:bg-pink-50 text-slate-700 hover:text-pink-600 border border-slate-200 px-6 py-4 rounded-2xl font-bold text-sm sm:text-base shadow-sm transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
					>
						<span>Jelajahi 6 Sisi Kubus</span>
						<ArrowRight class="w-4 h-4" />
					</a>
				</div>
			</div>

			<!-- Right Interactive 3D Cube Canvas -->
			<div class="lg:col-span-6 flex flex-col items-center">
				<div class="w-full relative bg-gradient-to-tr from-pink-100/60 via-amber-50/60 to-purple-100/60 p-6 sm:p-8 rounded-3xl border-2 border-pink-200/80 shadow-xl backdrop-blur-md">
					<Cube3D />
				</div>
			</div>
		</div>
	</section>

	<!-- Mengapa Memilih SAKURA (5 Core Values) -->
	<section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center max-w-3xl mx-auto mb-12 space-y-3">
			<span class="bg-amber-100 text-amber-800 text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider">
				Keunggulan Inovasi
			</span>
			<h2 class="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900">
				Mengapa Memilih SAKURA?
			</h2>
			<p class="text-slate-600 text-sm sm:text-base font-medium">
				Dirancang khusus oleh tim peneliti mahasiswa Politeknik Negeri Jember untuk kebutuhan perkembangan sensorik dan kemandirian anak dengan gangguan spektrum autisme (ASD).
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each CORE_VALUES as val, idx}
				<div class="bg-white rounded-3xl p-6 shadow-lg border-2 {val.borderColor} hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between">
					<div class="space-y-4">
						<div class="w-12 h-12 rounded-2xl {val.color} flex items-center justify-center font-bold shadow-xs">
							{#if val.icon === 'Sparkles'}
								<Sparkles class="w-6 h-6" />
							{:else if val.icon === 'Leaf'}
								<Leaf class="w-6 h-6" />
							{:else if val.icon === 'GraduationCap'}
								<GraduationCap class="w-6 h-6" />
							{:else if val.icon === 'ShieldCheck'}
								<ShieldCheck class="w-6 h-6" />
							{:else}
								<Coffee class="w-6 h-6" />
							{/if}
						</div>
						<h3 class="font-heading font-extrabold text-xl text-slate-800">
							{val.title}
						</h3>
						<p class="text-slate-600 text-sm leading-relaxed font-medium">
							{val.desc}
						</p>
					</div>
					<div class="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between text-xs font-bold text-slate-400">
						<span>Nilai Utama #{idx + 1}</span>
						<CheckCircle2 class="w-4 h-4 text-emerald-500" />
					</div>
				</div>
			{/each}
		</div>
	</section>

	<!-- Preview 6 Sisi Interaktif -->
	<section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-500/5 via-amber-500/5 to-purple-500/5 py-12 rounded-3xl border border-pink-100">
		<div class="text-center max-w-3xl mx-auto mb-10 space-y-3">
			<span class="bg-pink-100 text-pink-700 text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider">
				Fitur Unggulan Kubus
			</span>
			<h2 class="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900">
				6 Sisi Sensorik SAKURA
			</h2>
			<p class="text-slate-600 text-sm sm:text-base font-medium">
				Klik salah satu kartu di bawah ini untuk melihat detail stimulasi taktil, aromaterapi, dan manfaat terapinya!
			</p>
		</div>

		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each CUBE_SIDES as side}
				<button
					onclick={(e) => openModal(side, e)}
					class="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-slate-100 hover:border-pink-300 text-left flex flex-col justify-between group cursor-pointer"
				>
					<div class="space-y-4">
						<div class="flex items-center justify-between">
							<span class="bg-gradient-to-r {side.color} text-white font-extrabold text-xs px-3 py-1 rounded-full shadow-xs">
								Sisi #{side.id}
							</span>
							<span class="text-xs font-bold text-pink-500 group-hover:translate-x-1 transition-transform">
								Detail →
							</span>
						</div>

						<h3 class="font-heading font-extrabold text-xl text-slate-800 group-hover:text-pink-600 transition-colors">
							{side.name}
						</h3>
						<p class="text-slate-600 text-xs sm:text-sm font-medium line-clamp-3">
							{side.description}
						</p>
					</div>

					<div class="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between text-xs font-semibold text-slate-500">
						<span class="flex items-center gap-1">
							<Volume2 class="w-3.5 h-3.5 text-pink-500" /> Coba Suara Pop
						</span>
						<span class="bg-pink-50 text-pink-700 px-2 py-0.5 rounded-lg text-[10px] font-bold">
							Interaktif
						</span>
					</div>
				</button>
			{/each}
		</div>
	</section>

	<!-- Call To Action Banner -->
	<section class="max-w-6xl mx-auto px-4 sm:px-6">
		<div class="bg-gradient-to-r from-pink-600 via-rose-500 to-amber-500 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
			<div class="space-y-4 max-w-2xl text-center md:text-left">
				<span class="bg-white/20 backdrop-blur-md text-white text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider">
					Segera Miliki SAKURA
				</span>
				<h2 class="font-heading font-black text-3xl sm:text-4xl leading-tight">
					Bantu Tumbuh Kembang & Terapi Sensorik Buah Hati Anda
				</h2>
				<p class="text-white/90 text-sm sm:text-base font-medium">
					Pesan media terapi SAKURA sekarang dan rasakan manfaat langsung stimulasi multisensori sabut kelapa & aromaterapi kopi khas Jember.
				</p>
			</div>

			<a
				href={SITE_CONTACT.waLink}
				target="_blank"
				rel="noopener noreferrer"
				onclick={() => playPopSound(700)}
				class="bg-white text-pink-600 hover:bg-pink-50 px-8 py-4 rounded-2xl font-black text-sm sm:text-base shadow-xl transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3 shrink-0 cursor-pointer"
			>
				<MessageCircle class="w-5 h-5 text-emerald-500" />
				<span>Hubungi via WhatsApp</span>
			</a>
		</div>
	</section>
</div>

<!-- Modal Component -->
<SideDetailModal side={activeModalSide} onClose={() => (activeModalSide = null)} />
