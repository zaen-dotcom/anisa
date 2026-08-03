<script lang="ts">
	import { TESTIMONIAL } from '$lib/data/sakura';
	import { playPopSound } from '$lib/utils/sound';
	import { Quote, Award, Star, Smile, TrendingUp, Users } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Cerita Sukses & Validasi SLB Negeri Jember - SAKURA</title>
	<meta name="description" content="Hasil uji coba lapang & respon positif guru SD Autis SLB Negeri Jember terhadap inovasi media terapi kubus SAKURA." />
</svelte:head>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
	<!-- Header Banner -->
	<div class="text-center max-w-3xl mx-auto space-y-4">
		<span class="bg-amber-100 text-amber-800 text-xs font-black px-4 py-1.5 rounded-full border border-amber-200 uppercase tracking-wider">
			Validasi Field Test SLB
		</span>
		<h1 class="font-heading font-black text-4xl sm:text-5xl text-slate-900">
			Cerita Sukses & <span class="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">Validasi Lapangan</span>
		</h1>
		<p class="text-slate-600 text-base font-medium leading-relaxed">
			SAKURA telah melalui uji coba langsung pada anak autis di SLB Negeri Jember dan menerima respon serta dukungan hangat dari pendidik terapi berkebutuhan khusus.
		</p>
	</div>

	<!-- Teacher Endorsement Highlight Card -->
	<div class="bg-gradient-to-br from-pink-500 via-rose-500 to-amber-500 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden space-y-6">
		<div class="absolute -right-10 -bottom-10 opacity-15">
			<Quote class="w-64 h-64" />
		</div>

		<div class="flex items-center gap-2">
			<span class="bg-white/20 backdrop-blur-md text-white font-extrabold text-xs px-3.5 py-1 rounded-full uppercase tracking-wide">
				Testimoni Guru Spesialis Autis
			</span>
			<div class="flex gap-1 text-amber-200">
				{#each Array(5) as _}
					<Star class="w-4 h-4 fill-amber-200 text-amber-200" />
				{/each}
			</div>
		</div>

		<blockquote class="text-lg sm:text-2xl font-heading font-medium leading-relaxed text-white/95">
			"{TESTIMONIAL.teacherQuote}"
		</blockquote>

		<div class="pt-4 border-t border-white/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
			<div class="flex items-center gap-3">
				<div class="w-12 h-12 rounded-full bg-white text-pink-600 font-heading font-black text-xl flex items-center justify-center shadow-md">
					IR
				</div>
				<div>
					<h3 class="font-heading font-extrabold text-lg text-white">
						{TESTIMONIAL.teacherName}
					</h3>
					<p class="text-amber-100 text-xs font-bold">
						{TESTIMONIAL.teacherRole}
					</p>
				</div>
			</div>

			<span class="bg-black/20 backdrop-blur-md px-4 py-2 rounded-2xl text-xs font-bold text-white flex items-center gap-1.5 self-start sm:self-auto">
				<Award class="w-4 h-4 text-amber-300" /> Hasil Observasi SLB Negeri Jember
			</span>
		</div>
	</div>

	<!-- Key Observations Grid -->
	<div class="space-y-8">
		<div class="text-center max-w-2xl mx-auto space-y-2">
			<span class="bg-pink-100 text-pink-700 text-xs font-black px-4 py-1 rounded-full uppercase tracking-wider">
				Hasil Observasi Anak ASD
			</span>
			<h2 class="font-heading font-extrabold text-3xl text-slate-900">
				Dampak Positif Saat Terapi
			</h2>
			<p class="text-slate-600 text-sm font-medium">
				4 perubahan perilaku utama yang teramati selama anak-anak berkebutuhan khusus berinteraksi dengan SAKURA:
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			{#each TESTIMONIAL.observations as obs, idx}
				<button
					type="button"
					onclick={() => playPopSound(450)}
					class="w-full text-left bg-white rounded-3xl p-6 border-2 border-pink-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex items-start gap-4 cursor-pointer font-normal"
				>
					<div class="w-12 h-12 rounded-2xl bg-gradient-to-tr from-pink-500 to-rose-400 text-white font-heading font-black text-lg flex items-center justify-center shrink-0 shadow-md">
						#{idx + 1}
					</div>

					<div class="space-y-1">
						<h3 class="font-heading font-extrabold text-base text-slate-800">
							Poin Observasi #{idx + 1}
						</h3>
						<p class="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
							{obs}
						</p>
					</div>
				</button>
			{/each}
		</div>
	</div>

	<!-- Field Test Impact Stats -->
	<div class="bg-white rounded-3xl p-8 sm:p-10 border-2 border-slate-100 shadow-xl grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
		<div class="space-y-2">
			<div class="w-12 h-12 mx-auto rounded-2xl bg-pink-100 text-pink-600 flex items-center justify-center font-bold">
				<Smile class="w-6 h-6" />
			</div>
			<div class="font-heading font-black text-3xl text-slate-900">100%</div>
			<p class="text-slate-600 text-xs font-bold">Respon Antusias Anak ASD</p>
		</div>

		<div class="space-y-2">
			<div class="w-12 h-12 mx-auto rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
				<TrendingUp class="w-6 h-6" />
			</div>
			<div class="font-heading font-black text-3xl text-slate-900">2x Lipat</div>
			<p class="text-slate-600 text-xs font-bold">Peningkatan Durasi Fokus Terapi</p>
		</div>

		<div class="space-y-2">
			<div class="w-12 h-12 mx-auto rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
				<Users class="w-6 h-6" />
			</div>
			<div class="font-heading font-black text-3xl text-slate-900">Dukungan SLB</div>
			<p class="text-slate-600 text-xs font-bold">Rekomendasi Guru & Terapis SD Autis</p>
		</div>
	</div>
</div>
