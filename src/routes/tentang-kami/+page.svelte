<script lang="ts">
	import { TEAM_MEMBERS, VISI_MISI } from '$lib/data/sakura';
	import { playPopSound } from '$lib/utils/sound';
	import { Sparkles, Target, Compass, Users, Heart, Leaf, Coffee, Award, GraduationCap, CheckCircle } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Tentang Kami - SAKURA (Politeknik Negeri Jember)</title>
	<meta name="description" content="Latar belakang pengembang SAKURA oleh mahasiswi Politeknik Negeri Jember (Polije), visi & misi inovasi media terapi sabut kelapa." />
</svelte:head>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
	<!-- Page Header Banner -->
	<div class="text-center max-w-3xl mx-auto space-y-4">
		<div class="inline-flex items-center gap-2 bg-pink-100 text-pink-700 text-xs font-black px-4 py-1.5 rounded-full border border-pink-200 uppercase tracking-wider">
			<GraduationCap class="w-4 h-4 text-pink-500" /> Politeknik Negeri Jember (Polije)
		</div>

		<h1 class="font-heading font-black text-4xl sm:text-5xl text-slate-900">
			Mengenal Lebih Dekat <span class="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">SAKURA</span>
		</h1>

		<p class="text-slate-600 text-base sm:text-lg font-medium leading-relaxed">
			Inovasi karya anak bangsa dari mahasiswi Politeknik Negeri Jember yang mengombinasikan pemanfaatan limbah lingkungan dengan media terapi edukatif anak autis.
		</p>
	</div>

	<!-- Latar Belakang & Cerita Inovasi -->
	<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-8 sm:p-12 rounded-3xl border-2 border-pink-100 shadow-xl">
		<div class="lg:col-span-7 space-y-5">
			<div class="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 text-xs font-extrabold px-3 py-1 rounded-full">
				<Leaf class="w-3.5 h-3.5" /> Latar Belakang Inovasi
			</div>

			<h2 class="font-heading font-extrabold text-2xl sm:text-3xl text-slate-800">
				Dari Limbah Sabut Kelapa Jember Menjadi Media Terapi Berdampak Sosial
			</h2>

			<p class="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
				Kabupaten Jember merupakan salah satu daerah penghasil kelapa yang melimpah, namun limbah sabut kelapa sering kali belum dimanfaatkan secara optimal dan menumpuk di lingkungan. Di sisi lain, media terapi stimulasi multisensori bagi anak dengan Autism Spectrum Disorder (ASD) dan anak berkebutuhan khusus (ABK) masih relatif mahal dan terbatas.
			</p>

			<p class="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
				Melihat potensi tersebut, tim peneliti dari <strong>Politeknik Negeri Jember (Polije)</strong> mengembangkan <strong>SAKURA (Sensori Aromaterapi dari Kubus Serat Alami)</strong>. Produk ini mengubah serat sabut kelapa yang diolah secara higienis menjadi kubus sensori empuk, aman, dan dilengkapi aromaterapi biji kopi asli Jember untuk membantu stimulasi emosi serta motorik anak.
			</p>

			<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
				<div class="bg-pink-50 p-4 rounded-2xl border border-pink-100 flex items-start gap-3">
					<div class="p-2 bg-pink-500 text-white rounded-xl">
						<Coffee class="w-5 h-5" />
					</div>
					<div>
						<h4 class="font-bold text-xs text-pink-800 uppercase">Aromaterapi Kopi</h4>
						<p class="text-slate-600 text-xs mt-0.5">Biji kopi asli Jember memberikan efek menenangkan pada anak ASD.</p>
					</div>
				</div>

				<div class="bg-emerald-50 p-4 rounded-2xl border border-emerald-100 flex items-start gap-3">
					<div class="p-2 bg-emerald-500 text-white rounded-xl">
						<Leaf class="w-5 h-5" />
					</div>
					<div>
						<h4 class="font-bold text-xs text-emerald-800 uppercase">Serat Sabut Kelapa</h4>
						<p class="text-slate-600 text-xs mt-0.5">Olahan serat alami yang steril & ramah lingkungan.</p>
					</div>
				</div>
			</div>
		</div>

		<div class="lg:col-span-5 bg-gradient-to-br from-pink-500 to-rose-400 p-8 rounded-3xl text-white space-y-6 shadow-lg">
			<div class="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md">
				<Award class="w-7 h-7 text-white" />
			</div>
			<h3 class="font-heading font-extrabold text-2xl text-white">
				Komitmen Sosial & Lingkungan
			</h3>
			<p class="text-white/90 text-sm font-medium leading-relaxed">
				SAKURA lahir bukan sekadar sebagai produk edukasi, melainkan sebagai solusi holistik yang mengintegrasikan pengolahan limbah organik, pemberdayaan masyarakat, dan dukungan nyata bagi tumbuh kembang anak berkebutuhan khusus.
			</p>
			<div class="pt-4 border-t border-white/20 flex items-center justify-between text-xs font-bold">
				<span>Dikembangkan di Jember, Jawa Timur</span>
				<Sparkles class="w-4 h-4 text-amber-200" />
			</div>
		</div>
	</div>

	<!-- Visi & Misi Section -->
	<div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
		<!-- Visi -->
		<div class="lg:col-span-5 bg-gradient-to-br from-amber-400 via-amber-500 to-orange-500 p-8 sm:p-10 rounded-3xl text-white shadow-xl flex flex-col justify-between">
			<div class="space-y-4">
				<div class="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md">
					<Target class="w-7 h-7 text-white" />
				</div>
				<span class="text-xs font-black uppercase tracking-wider bg-black/20 px-3 py-1 rounded-full inline-block">
					Visi Utama
				</span>
				<h2 class="font-heading font-black text-2xl sm:text-3xl">Visi SAKURA</h2>
				<p class="text-amber-50 text-sm sm:text-base font-medium leading-relaxed bg-black/10 p-5 rounded-2xl border border-white/10">
					"{VISI_MISI.visi}"
				</p>
			</div>
			<div class="pt-6 border-t border-white/20 mt-6 flex items-center gap-2 text-xs font-bold text-amber-100">
				<CheckCircle class="w-4 h-4 text-white" />
				<span>Menuju Terapi Sensorik Inklusif & Berkelanjutan</span>
			</div>
		</div>

		<!-- Misi -->
		<div class="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border-2 border-slate-100 shadow-xl space-y-6">
			<div class="flex items-center gap-3">
				<div class="p-3 bg-pink-100 text-pink-600 rounded-2xl">
					<Compass class="w-6 h-6" />
				</div>
				<div>
					<span class="text-xs font-bold text-pink-600 uppercase tracking-wider">Langkah Strategis</span>
					<h2 class="font-heading font-extrabold text-2xl text-slate-800">5 Misi SAKURA</h2>
				</div>
			</div>

			<div class="space-y-3">
				{#each VISI_MISI.misi as item, idx}
					<div class="flex items-start gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100 hover:bg-pink-50/50 hover:border-pink-200 transition-colors">
						<span class="w-7 h-7 rounded-xl bg-pink-500 text-white font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5">
							{idx + 1}
						</span>
						<p class="text-slate-700 text-xs sm:text-sm font-medium leading-snug">
							{item}
						</p>
					</div>
				{/each}
			</div>
		</div>
	</div>

	<!-- Tim Pengembang Section -->
	<div class="space-y-8">
		<div class="text-center max-w-2xl mx-auto space-y-2">
			<span class="bg-purple-100 text-purple-700 text-xs font-black px-4 py-1 rounded-full uppercase tracking-wider">
				Inovator Muda
			</span>
			<h2 class="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900">
				Tim Pengembang SAKURA
			</h2>
			<p class="text-slate-600 text-sm font-medium">
				Mahasiswi Politeknik Negeri Jember yang berdedikasi menciptakan inovasi media terapi bagi anak berkebutuhan khusus.
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
			{#each TEAM_MEMBERS as member}
				<button
					type="button"
					onclick={() => playPopSound(500)}
					class="w-full text-center bg-white rounded-3xl p-6 border-2 border-pink-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 space-y-4 cursor-pointer font-normal"
				>
					<div class="w-20 h-20 mx-auto rounded-full bg-gradient-to-tr from-pink-400 to-rose-500 text-white font-heading font-black text-2xl flex items-center justify-center shadow-md shadow-pink-400/30">
						{member.name.split(' ')[0][0]}{member.name.split(' ')[1] ? member.name.split(' ')[1][0] : ''}
					</div>

					<div>
						<span class="bg-pink-100 text-pink-700 text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wide">
							{member.badge}
						</span>
						<h3 class="font-heading font-extrabold text-xl text-slate-800 mt-2">
							{member.name}
						</h3>
						<p class="text-pink-600 text-xs font-bold mt-0.5">
							{member.role}
						</p>
						<p class="text-slate-400 text-xs font-medium mt-1">
							{member.institution}
						</p>
					</div>

					<div class="pt-3 border-t border-slate-100 flex items-center justify-center gap-1 text-[11px] font-semibold text-slate-500">
						<Heart class="w-3.5 h-3.5 text-rose-500" /> Tim Peneliti Polije
					</div>
				</button>
			{/each}
		</div>
	</div>
</div>
