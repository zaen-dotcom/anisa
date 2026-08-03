<script lang="ts">
	import { SITE_CONTACT, TEAM_MEMBERS } from '$lib/data/sakura';
	import { playPopSound } from '$lib/utils/sound';
	import { Flower, Phone, Mail, MapPin, Clock, Heart, ExternalLink, Camera } from 'lucide-svelte';

	function handleLinkClick() {
		playPopSound(400);
	}
</script>

<footer class="bg-gradient-to-b from-slate-900 via-slate-900 to-pink-950 text-slate-200 mt-20 relative overflow-hidden border-t-4 border-pink-300">
	<div class="max-w-7xl mx-auto px-6 sm:px-8 pt-16 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
		<!-- Brand & Info -->
		<div class="space-y-4">
			<div class="flex items-center gap-3">
				<div class="w-10 h-10 rounded-2xl bg-gradient-to-tr from-pink-500 to-rose-400 text-white flex items-center justify-center shadow-lg shadow-pink-500/30">
					<Flower class="w-6 h-6" />
				</div>
				<span class="font-heading font-black text-2xl text-white tracking-wide">
					SAKURA
				</span>
			</div>
			<p class="text-xs text-slate-300 leading-relaxed">
				Sensori Aromaterapi dari Kubus Serat Alami. Inovasi media terapi multisensori berbasis limbah sabut kelapa & aromaterapi kopi untuk anak ASD dan ABK.
			</p>
			<div class="pt-2">
				<span class="text-[11px] font-bold text-pink-300 uppercase tracking-wider block mb-2">Tim Pengembang Polije:</span>
				<div class="flex flex-wrap gap-1.5">
					{#each TEAM_MEMBERS as member}
						<span class="bg-white/10 text-white text-[11px] font-medium px-2.5 py-1 rounded-lg border border-white/10">
							{member.name}
						</span>
					{/each}
				</div>
			</div>
		</div>

		<!-- Navigasi Cepat -->
		<div class="space-y-3">
			<h4 class="font-heading font-bold text-base text-white border-b border-white/10 pb-2">
				Navigasi Halaman
			</h4>
			<ul class="space-y-2 text-xs font-semibold">
				<li>
					<a href="/" onclick={handleLinkClick} class="hover:text-pink-300 transition-colors flex items-center gap-1.5">
						<span>›</span> Beranda Utama
					</a>
				</li>
				<li>
					<a href="/tentang-kami" onclick={handleLinkClick} class="hover:text-pink-300 transition-colors flex items-center gap-1.5">
						<span>›</span> Tentang Kami & Polije
					</a>
				</li>
				<li>
					<a href="/produk" onclick={handleLinkClick} class="hover:text-pink-300 transition-colors flex items-center gap-1.5">
						<span>›</span> Detail 6 Sisi Sensorik
					</a>
				</li>
				<li>
					<a href="/cerita-sukses" onclick={handleLinkClick} class="hover:text-pink-300 transition-colors flex items-center gap-1.5">
						<span>›</span> Cerita Sukses & Validasi SLB
					</a>
				</li>
				<li>
					<a href="/kontak" onclick={handleLinkClick} class="hover:text-pink-300 transition-colors flex items-center gap-1.5">
						<span>›</span> Hubungi Kami & Order
					</a>
				</li>
			</ul>
		</div>

		<!-- Jam Operasional -->
		<div class="space-y-3">
			<h4 class="font-heading font-bold text-base text-white border-b border-white/10 pb-2 flex items-center gap-2">
				<Clock class="w-4 h-4 text-pink-400" /> Jam Operasional
			</h4>
			<ul class="space-y-2 text-xs">
				{#each SITE_CONTACT.hours as item}
					<li class="flex justify-between items-center bg-white/5 p-2 rounded-xl border border-white/5">
						<span class="text-slate-300 font-medium">{item.day}</span>
						<span class="text-pink-300 font-bold">{item.time}</span>
					</li>
				{/each}
			</ul>
		</div>

		<!-- Kontak Resmi -->
		<div class="space-y-3">
			<h4 class="font-heading font-bold text-base text-white border-b border-white/10 pb-2">
				Kontak & Lokasi
			</h4>
			<div class="space-y-2 text-xs">
				<a
					href={SITE_CONTACT.waLink}
					target="_blank"
					rel="noopener noreferrer"
					onclick={handleLinkClick}
					class="flex items-center gap-2.5 p-2.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/20 transition-all"
				>
					<Phone class="w-4 h-4 shrink-0" />
					<span class="font-bold">{SITE_CONTACT.whatsapp}</span>
					<ExternalLink class="w-3.5 h-3.5 ml-auto" />
				</a>

				<a
					href={SITE_CONTACT.igLink}
					target="_blank"
					rel="noopener noreferrer"
					onclick={handleLinkClick}
					class="flex items-center gap-2.5 p-2.5 rounded-xl bg-pink-500/10 hover:bg-pink-500/20 text-pink-300 border border-pink-500/20 transition-all"
				>
					<Camera class="w-4 h-4 shrink-0" />
					<span class="font-bold">{SITE_CONTACT.instagram}</span>
					<ExternalLink class="w-3.5 h-3.5 ml-auto" />
				</a>

				<div class="flex items-start gap-2.5 p-2.5 rounded-xl bg-white/5 text-slate-300 border border-white/5">
					<Mail class="w-4 h-4 shrink-0 mt-0.5 text-pink-400" />
					<span class="break-all font-medium">{SITE_CONTACT.email}</span>
				</div>

				<a
					href={SITE_CONTACT.mapsUrl}
					target="_blank"
					rel="noopener noreferrer"
					onclick={handleLinkClick}
					class="flex items-start gap-2.5 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 border border-white/5 transition-all"
				>
					<MapPin class="w-4 h-4 shrink-0 mt-0.5 text-amber-400" />
					<span class="text-[11px] font-medium leading-snug">{SITE_CONTACT.address}</span>
				</a>
			</div>
		</div>
	</div>

	<!-- Copyright Footer Bottom -->
	<div class="border-t border-white/10 py-6 text-center text-xs text-slate-400 px-4">
		<div class="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
			<p>© 2026 SAKURA - Politeknik Negeri Jember (Polije). Hak Cipta Dilindungi.</p>
			<p class="flex items-center gap-1 text-slate-300 font-semibold">
				Dibuat dengan <Heart class="w-3.5 h-3.5 text-rose-500 fill-rose-500 animate-bounce" /> untuk Senyuman Anak ASD Indonesia
			</p>
		</div>
	</div>
</footer>
