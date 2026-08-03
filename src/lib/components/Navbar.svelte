<script lang="ts">
	import { page } from '$app/stores';
	import { SITE_CONTACT } from '$lib/data/sakura';
	import { playPopSound } from '$lib/utils/sound';
	import { Flower, Menu, X, MessageCircle, Sparkles } from 'lucide-svelte';

	let isMobileOpen = $state(false);

	const navLinks = [
		{ href: '/', label: 'Beranda' },
		{ href: '/tentang-kami', label: 'Tentang Kami' },
		{ href: '/produk', label: 'Produk & Fitur' },
		{ href: '/cerita-sukses', label: 'Cerita Sukses' },
		{ href: '/kontak', label: 'Hubungi Kami' }
	];

	function toggleMobileMenu() {
		playPopSound(450);
		isMobileOpen = !isMobileOpen;
	}

	function handleNavClick() {
		playPopSound(400);
		isMobileOpen = false;
	}
</script>

<header class="sticky top-0 z-40 w-full px-4 sm:px-8 py-3">
	<nav class="max-w-6xl mx-auto bg-white/80 backdrop-blur-xl border border-pink-100/80 rounded-3xl shadow-lg shadow-pink-500/5 px-4 sm:px-6 py-3 flex items-center justify-between transition-all">
		<!-- Brand Logo -->
		<a
			href="/"
			onclick={handleNavClick}
			class="flex items-center gap-2.5 group cursor-pointer"
		>
			<div class="w-10 h-10 rounded-2xl bg-gradient-to-tr from-pink-500 to-rose-400 text-white flex items-center justify-center shadow-md shadow-pink-400/30 group-hover:scale-105 transition-all duration-300">
				<Flower class="w-6 h-6 animate-pulse" />
			</div>
			<div class="flex flex-col">
				<div class="flex items-center gap-1.5">
					<span class="font-heading font-black text-xl tracking-tight bg-gradient-to-r from-pink-600 to-rose-500 bg-clip-text text-transparent">
						SAKURA
					</span>
					<span class="bg-pink-100 text-pink-700 text-[10px] font-extrabold px-2 py-0.5 rounded-full border border-pink-200 uppercase tracking-wide">
						Kubus Sensori
					</span>
				</div>
				<span class="text-[10px] font-semibold text-amber-800/80 -mt-0.5">
					Media Terapi Autis & ABK
				</span>
			</div>
		</a>

		<!-- Desktop Nav Items -->
		<div class="hidden lg:flex items-center gap-1 bg-pink-50/50 p-1.5 rounded-2xl border border-pink-100/60">
			{#each navLinks as link}
				{@const isActive = $page.url.pathname === link.href}
				<a
					href={link.href}
					onclick={handleNavClick}
					class="px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer {isActive
						? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-md shadow-pink-500/20 scale-105'
						: 'text-slate-600 hover:text-pink-600 hover:bg-white/80'}"
				>
					{link.label}
				</a>
			{/each}
		</div>

		<!-- CTA Button -->
		<div class="hidden sm:flex items-center gap-3">
			<a
				href={SITE_CONTACT.waLink}
				target="_blank"
				rel="noopener noreferrer"
				onclick={() => playPopSound(600)}
				class="bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:from-emerald-600 hover:to-teal-600 px-5 py-2.5 rounded-2xl font-bold text-xs shadow-md shadow-emerald-500/20 hover:shadow-lg hover:shadow-emerald-500/30 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
			>
				<MessageCircle class="w-4 h-4" />
				<span>Pesan Sekarang</span>
			</a>
		</div>

		<!-- Mobile Menu Button -->
		<button
			onclick={toggleMobileMenu}
			class="lg:hidden p-2 rounded-2xl bg-pink-50 text-pink-600 hover:bg-pink-100 transition-all active:scale-95 cursor-pointer"
			aria-label="Toggle Navigation Menu"
		>
			{#if isMobileOpen}
				<X class="w-6 h-6" />
			{:else}
				<Menu class="w-6 h-6" />
			{/if}
		</button>
	</nav>

	<!-- Mobile Drawer Overlay -->
	{#if isMobileOpen}
		<div
			class="lg:hidden fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-50 flex justify-end"
			onclick={toggleMobileMenu}
			onkeydown={(e) => e.key === 'Escape' && toggleMobileMenu()}
			role="button"
			tabindex="0"
			aria-label="Close navigation menu"
		>
			<div
				class="bg-white/95 backdrop-blur-xl w-4/5 max-w-sm h-full p-6 flex flex-col justify-between shadow-2xl border-l border-pink-100 animate-in slide-in-from-right duration-250"
			>
				<div class="space-y-6">
					<div class="flex items-center justify-between border-b border-slate-100 pb-4">
						<div class="flex items-center gap-2">
							<Flower class="w-6 h-6 text-pink-500" />
							<span class="font-heading font-extrabold text-lg text-pink-600">Navigasi SAKURA</span>
						</div>
						<button
							onclick={toggleMobileMenu}
							class="p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200"
							aria-label="Close drawer"
						>
							<X class="w-5 h-5" />
						</button>
					</div>

					<div class="flex flex-col gap-2">
						{#each navLinks as link}
							{@const isActive = $page.url.pathname === link.href}
							<a
								href={link.href}
								onclick={handleNavClick}
								class="px-4 py-3 rounded-2xl text-sm font-bold transition-all flex items-center justify-between {isActive
									? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-md'
									: 'text-slate-700 hover:bg-pink-50 hover:text-pink-600'}"
							>
								<span>{link.label}</span>
								{#if isActive}
									<Sparkles class="w-4 h-4 text-white" />
								{/if}
							</a>
						{/each}
					</div>
				</div>

				<div class="pt-6 border-t border-slate-100 space-y-3">
					<a
						href={SITE_CONTACT.waLink}
						target="_blank"
						rel="noopener noreferrer"
						onclick={handleNavClick}
						class="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-3 rounded-2xl font-bold text-sm shadow-md flex items-center justify-center gap-2 text-center"
					>
						<MessageCircle class="w-5 h-5" />
						<span>Pesan via WhatsApp</span>
					</a>
					<p class="text-[11px] text-center text-slate-400 font-medium">
						SAKURA - Politeknik Negeri Jember
					</p>
				</div>
			</div>
		</div>
	{/if}
</header>
