<script lang="ts">
	import type { SensorySide } from '$lib/data/sakura';
	import { playPopSound, triggerConfetti } from '$lib/utils/sound';
	import { Sparkles, X, CheckCircle, ShieldCheck, Heart, Volume2, MessageSquareHeart } from 'lucide-svelte';

	let { side = null, onClose }: { side: SensorySide | null; onClose: () => void } = $props();

	function handleClose() {
		playPopSound(350);
		onClose();
	}

	function handleConfetti(e: MouseEvent) {
		const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
		const x = (rect.left + rect.width / 2) / window.innerWidth;
		const y = (rect.top + rect.height / 2) / window.innerHeight;
		triggerConfetti(x, y);
		playPopSound(580);
	}
</script>

{#if side}
	<!-- Backdrop -->
	<div
		class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6 transition-all duration-300"
		role="dialog"
		aria-modal="true"
	>
		<!-- Modal Box -->
		<div
			class="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border-4 border-pink-200 relative animate-in fade-in zoom-in duration-200"
		>
			<!-- Header Banner -->
			<div class="bg-gradient-to-r {side.color} p-6 sm:p-8 rounded-t-2xl text-white relative overflow-hidden">
				<div class="absolute -right-6 -bottom-6 opacity-20 text-white">
					<Sparkles class="w-40 h-40" />
				</div>

				<button
					onclick={handleClose}
					class="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-md transition-all active:scale-95"
					aria-label="Tutup Detail"
				>
					<X class="w-6 h-6" />
				</button>

				<span class="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
					<Sparkles class="w-3.5 h-3.5" /> Sisi #{side.id} Kubus SAKURA
				</span>

				<h3 class="text-2xl sm:text-3xl font-extrabold font-heading text-white drop-shadow-sm">
					{side.name}
				</h3>
				<p class="text-white/95 text-sm sm:text-base font-medium mt-1">
					{side.subtitle}
				</p>
			</div>

			<!-- Body Content -->
			<div class="p-6 sm:p-8 space-y-6">
				<!-- Description -->
				<div class="bg-pink-50/70 p-4 rounded-2xl border border-pink-100">
					<h4 class="text-xs font-bold text-pink-700 uppercase tracking-wider mb-1 flex items-center gap-1">
						<MessageSquareHeart class="w-4 h-4" /> Deskripsi Sensorik
					</h4>
					<p class="text-slate-700 text-sm leading-relaxed">
						{side.description}
					</p>
				</div>

				<!-- Tactile Elements -->
				<div>
					<h4 class="text-sm font-bold text-slate-800 font-heading mb-3 flex items-center gap-2">
						<Sparkles class="w-4 h-4 text-pink-500" /> Elemen Taktil & Material Sisi:
					</h4>
					<ul class="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
						{#each side.tactileElements as item}
							<li class="bg-amber-50 text-amber-900 border border-amber-200/80 px-3 py-2 rounded-xl text-xs font-medium flex items-center gap-2 shadow-xs">
								<CheckCircle class="w-4 h-4 text-amber-600 shrink-0" />
								<span>{item}</span>
							</li>
						{/each}
					</ul>
				</div>

				<!-- Therapeutic Benefits -->
				<div>
					<h4 class="text-sm font-bold text-slate-800 font-heading mb-3 flex items-center gap-2">
						<Heart class="w-4 h-4 text-rose-500" /> Manfaat Terapi Bagi Anak ASD & ABK:
					</h4>
					<div class="space-y-2">
						{#each side.therapeuticBenefits as benefit}
							<div class="flex items-start gap-2.5 bg-slate-50 p-3 rounded-xl border border-slate-100">
								<ShieldCheck class="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
								<span class="text-slate-700 text-xs sm:text-sm font-medium">{benefit}</span>
							</div>
						{/each}
					</div>
				</div>

				<!-- Material Details -->
				<div class="bg-emerald-50 p-4 rounded-2xl border border-emerald-100 flex items-center gap-3">
					<div class="bg-emerald-500 text-white p-2.5 rounded-xl shrink-0">
						<ShieldCheck class="w-5 h-5" />
					</div>
					<div>
						<span class="text-xs font-bold text-emerald-800 uppercase block">Kualitas & Keamanan</span>
						<p class="text-emerald-900 text-xs mt-0.5">{side.materialDetails}</p>
					</div>
				</div>

				<!-- Actions -->
				<div class="pt-2 flex flex-col sm:flex-row gap-3 items-center justify-between">
					<button
						onclick={handleConfetti}
						class="w-full sm:w-auto bg-gradient-to-r from-pink-500 to-rose-500 text-white px-5 py-2.5 rounded-2xl font-bold text-sm shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
					>
						<Volume2 class="w-4 h-4" /> Cobain Efek Sensorik! 🎉
					</button>

					<button
						onclick={handleClose}
						class="w-full sm:w-auto bg-slate-100 hover:bg-slate-200 text-slate-700 px-6 py-2.5 rounded-2xl font-bold text-sm transition-all active:scale-95 cursor-pointer text-center"
					>
						Tutup
					</button>
				</div>
			</div>
		</div>
	</div>
{/if}
