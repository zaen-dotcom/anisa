<script lang="ts">
	import { SITE_CONTACT } from '$lib/data/sakura';
	import { playPopSound, triggerConfetti } from '$lib/utils/sound';
	import { MessageCircle, Phone, Mail, Camera, MapPin, Clock, Send, Sparkles, Copy, Check } from 'lucide-svelte';

	let name = $state('');
	let role = $state('Orang Tua');
	let message = $state('');
	let isCopied = $state(false);

	function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		playPopSound(650);
		triggerConfetti();

		const text = `Halo Tim SAKURA Kubus, nama saya ${name || 'Sahabat SAKURA'} (${role}). %0A${message || 'Saya berminat untuk memesan produk SAKURA Kubus Sensorik.'}`;
		const waUrl = `https://wa.me/6285735712558?text=${text}`;
		window.open(waUrl, '_blank');
	}

	function copyNumber() {
		playPopSound(500);
		navigator.clipboard.writeText(SITE_CONTACT.whatsapp);
		isCopied = true;
		setTimeout(() => (isCopied = false), 2500);
	}
</script>

<svelte:head>
	<title>Hubungi Kami & Pemesanan - SAKURA Kubus Sensorik</title>
	<meta name="description" content="Kontak resmi pemesanan SAKURA Kubus Sensorik via WhatsApp 085735712558, Instagram @sakura.kubus, lokasi Jl. Mastrip Jember." />
</svelte:head>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
	<!-- Page Header -->
	<div class="text-center max-w-3xl mx-auto space-y-4">
		<span class="bg-pink-100 text-pink-700 text-xs font-black px-4 py-1.5 rounded-full border border-pink-200 uppercase tracking-wider">
			Layanan Pelanggan & Pemesanan
		</span>
		<h1 class="font-heading font-black text-4xl sm:text-5xl text-slate-900 leading-tight">
			Sentuhan Keindahan Sakura untuk Anda: <span class="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">Miliki Produk Berkualitas Kami</span> dan Rasakan Manfaatnya
		</h1>
		<p class="text-slate-600 text-base font-medium leading-relaxed">
			Kami siap membantu Anda mendapatkan produk terapi SAKURA. Silakan hubungi kami via WhatsApp, Instagram, atau form di bawah ini.
		</p>
	</div>

	<!-- Contact Cards Grid -->
	<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
		<!-- WhatsApp Card -->
		<div class="bg-white rounded-3xl p-6 border-2 border-emerald-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 space-y-4">
			<div class="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center font-bold shadow-md shadow-emerald-500/20">
				<MessageCircle class="w-6 h-6" />
			</div>
			<div>
				<span class="text-xs font-extrabold text-emerald-600 uppercase tracking-wider">WhatsApp Resmi</span>
				<h3 class="font-heading font-extrabold text-xl text-slate-800 mt-1">
					{SITE_CONTACT.whatsapp}
				</h3>
				<p class="text-slate-500 text-xs mt-1">Respon cepat untuk pemesanan & konsultasi produk SAKURA.</p>
			</div>

			<div class="pt-2 flex items-center gap-2">
				<a
					href={SITE_CONTACT.waLink}
					target="_blank"
					rel="noopener noreferrer"
					onclick={() => playPopSound(550)}
					class="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs py-2.5 px-4 rounded-xl text-center shadow-xs transition-all active:scale-95 cursor-pointer"
				>
					Chat WhatsApp
				</a>
				<button
					onclick={copyNumber}
					class="p-2.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 rounded-xl transition-all active:scale-95 cursor-pointer"
					title="Salin Nomor WA"
				>
					{#if isCopied}
						<Check class="w-4 h-4 text-emerald-600" />
					{:else}
						<Copy class="w-4 h-4" />
					{/if}
				</button>
			</div>
		</div>

		<!-- Instagram Card -->
		<div class="bg-white rounded-3xl p-6 border-2 border-pink-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 space-y-4">
			<div class="w-12 h-12 rounded-2xl bg-gradient-to-tr from-pink-500 to-rose-400 text-white flex items-center justify-center font-bold shadow-md shadow-pink-500/20">
				<Camera class="w-6 h-6" />
			</div>
			<div>
				<span class="text-xs font-extrabold text-pink-600 uppercase tracking-wider">Instagram Resmi</span>
				<h3 class="font-heading font-extrabold text-xl text-slate-800 mt-1">
					{SITE_CONTACT.instagram}
				</h3>
				<p class="text-slate-500 text-xs mt-1">Ikuti pembaruan kegiatan, dokumentasi, & testimoni.</p>
			</div>

			<div class="pt-2">
				<a
					href={SITE_CONTACT.igLink}
					target="_blank"
					rel="noopener noreferrer"
					onclick={() => playPopSound(550)}
					class="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold text-xs py-2.5 px-4 rounded-xl text-center block shadow-xs transition-all active:scale-95 cursor-pointer"
				>
					Kunjungi Instagram
				</a>
			</div>
		</div>

		<!-- Email Card -->
		<div class="bg-white rounded-3xl p-6 border-2 border-purple-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 space-y-4">
			<div class="w-12 h-12 rounded-2xl bg-purple-500 text-white flex items-center justify-center font-bold shadow-md shadow-purple-500/20">
				<Mail class="w-6 h-6" />
			</div>
			<div>
				<span class="text-xs font-extrabold text-purple-600 uppercase tracking-wider">Email Layanan</span>
				<h3 class="font-heading font-extrabold text-lg text-slate-800 mt-1 break-all">
					{SITE_CONTACT.email}
				</h3>
				<p class="text-slate-500 text-xs mt-1">Untuk kerjasama institusi, SLB, atau penawaran resmi.</p>
			</div>

			<div class="pt-2">
				<a
					href="mailto:{SITE_CONTACT.email}"
					onclick={() => playPopSound(550)}
					class="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold text-xs py-2.5 px-4 rounded-xl text-center block shadow-xs transition-all active:scale-95 cursor-pointer"
				>
					Kirim Email
				</a>
			</div>
		</div>
	</div>

	<!-- Form & Operational Hours Grid -->
	<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
		<!-- Form Pemesanan -->
		<div class="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border-2 border-pink-100 shadow-xl space-y-6">
			<div class="flex items-center gap-2">
				<Sparkles class="w-5 h-5 text-pink-500" />
				<h2 class="font-heading font-extrabold text-2xl text-slate-800">Formulir Pesan & Pertanyaan</h2>
			</div>

			<form onsubmit={handleSubmit} class="space-y-4">
				<div>
					<label for="name" class="block text-xs font-bold text-slate-700 uppercase mb-1">Nama Lengkap</label>
					<input
						type="text"
						id="name"
						bind:value={name}
						placeholder="Contoh: Ibu Rina"
						required
						class="w-full bg-pink-50/50 border border-pink-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400 font-medium"
					/>
				</div>

				<div>
					<label for="role" class="block text-xs font-bold text-slate-700 uppercase mb-1">Peran / Kategori</label>
					<select
						id="role"
						bind:value={role}
						class="w-full bg-pink-50/50 border border-pink-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400 font-medium"
					>
						<option value="Orang Tua">Orang Tua Anak ASD / ABK</option>
						<option value="Guru SLB">Guru SLB / Terapis Special Needs</option>
						<option value="Institusi / Sekolah">Institusi Sekolah / Klinik Terapi</option>
						<option value="Lainnya">Lainnya</option>
					</select>
				</div>

				<div>
					<label for="message" class="block text-xs font-bold text-slate-700 uppercase mb-1">Pesan / Pertanyaan Pemesanan</label>
					<textarea
						id="message"
						bind:value={message}
						rows="4"
						placeholder="Tuliskan pertanyaan atau kebutuhan jumlah unit SAKURA yang ingin dipesan..."
						required
						class="w-full bg-pink-50/50 border border-pink-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400 font-medium"
					></textarea>
				</div>

				<button
					type="submit"
					class="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-black text-sm py-4 rounded-2xl shadow-lg shadow-pink-500/25 transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
				>
					<Send class="w-4 h-4" />
					<span>Kirim via WhatsApp Sekarang</span>
				</button>
			</form>
		</div>

		<!-- Jam Operasional & Lokasi -->
		<div class="lg:col-span-5 space-y-6">
			<!-- Operating Hours -->
			<div class="bg-gradient-to-br from-amber-500 to-orange-600 text-white rounded-3xl p-8 shadow-xl space-y-4">
				<div class="flex items-center gap-3 border-b border-white/20 pb-3">
					<div class="p-2 bg-white/20 rounded-xl backdrop-blur-xs">
						<Clock class="w-6 h-6 text-white" />
					</div>
					<div>
						<span class="text-xs font-black uppercase text-amber-100 tracking-wider">Jam Operasional</span>
						<h3 class="font-heading font-extrabold text-xl text-white">Waktu Layanan Kami</h3>
					</div>
				</div>

				<ul class="space-y-2.5 text-xs">
					{#each SITE_CONTACT.hours as item}
						<li class="flex justify-between items-center bg-black/15 p-3 rounded-2xl border border-white/10 font-medium">
							<span>{item.day}</span>
							<span class="font-bold text-amber-200">{item.time}</span>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Lokasi Alamat & Map Preview -->
			<div class="bg-white rounded-3xl p-8 border-2 border-slate-100 shadow-xl space-y-4">
				<div class="flex items-center gap-3">
					<div class="p-2.5 bg-pink-100 text-pink-600 rounded-xl">
						<MapPin class="w-5 h-5" />
					</div>
					<div>
						<span class="text-xs font-extrabold text-pink-600 uppercase tracking-wider">Alamat & Lokasi</span>
						<h3 class="font-heading font-extrabold text-lg text-slate-800">Jember, Jawa Timur</h3>
					</div>
				</div>

				<p class="text-slate-600 text-xs leading-relaxed font-medium">
					{SITE_CONTACT.address}
				</p>

				<a
					href={SITE_CONTACT.mapsUrl}
					target="_blank"
					rel="noopener noreferrer"
					onclick={() => playPopSound(450)}
					class="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs py-3 px-4 rounded-2xl text-center block transition-all active:scale-95 cursor-pointer"
				>
					Buka Google Maps →
				</a>
			</div>
		</div>
	</div>
</div>
