<script lang="ts">
	import { onMount } from 'svelte';
	import { CUBE_SIDES, type SensorySide } from '$lib/data/sakura';
	import { playPopSound, triggerConfetti } from '$lib/utils/sound';
	import SideDetailModal from './SideDetailModal.svelte';
	import {
		RotateCcw,
		Play,
		Pause,
		Sparkles,
		Smile,
		Coffee,
		Scissors,
		Activity,
		Shapes,
		Hand,
		Eye,
		Maximize2
	} from 'lucide-svelte';

	let rotX = -20;
	let rotY = 35;
	let isAutoSpinning = $state(true);
	let isDragging = false;
	let startX = 0;
	let startY = 0;
	let selectedSide = $state<SensorySide | null>(null);

	let cubeRef = $state<HTMLDivElement | null>(null);
	let shadowRef = $state<HTMLDivElement | null>(null);

	function updateTransform() {
		if (cubeRef) {
			cubeRef.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
		}
		if (shadowRef) {
			const scale = 0.9 + Math.sin((rotY * Math.PI) / 180) * 0.15;
			shadowRef.style.transform = `scale(${scale})`;
		}
	}

	onMount(() => {
		updateTransform();
		let animId: number;
		const loop = () => {
			if (isAutoSpinning && !isDragging) {
				rotY = (rotY + 0.5) % 360;
				updateTransform();
			}
			animId = requestAnimationFrame(loop);
		};
		animId = requestAnimationFrame(loop);
		return () => cancelAnimationFrame(animId);
	});

	function handlePointerDown(e: PointerEvent) {
		isDragging = true;
		startX = e.clientX;
		startY = e.clientY;
		(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
	}

	function handlePointerMove(e: PointerEvent) {
		if (!isDragging) return;
		const deltaX = e.clientX - startX;
		const deltaY = e.clientY - startY;

		rotY += deltaX * 0.5;
		rotX -= deltaY * 0.5;

		rotX = Math.max(-75, Math.min(75, rotX));

		startX = e.clientX;
		startY = e.clientY;
		updateTransform();
	}

	function handlePointerUp(e: PointerEvent) {
		isDragging = false;
		try {
			(e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
		} catch {
			// ignore
		}
	}

	function rotateToSide(sideId: number) {
		playPopSound(500);
		isAutoSpinning = false;
		switch (sideId) {
			case 1: // Front
				rotX = 0; rotY = 0; break;
			case 2: // Back
				rotX = 0; rotY = 180; break;
			case 3: // Top
				rotX = -90; rotY = 0; break;
			case 4: // Bottom
				rotX = 90; rotY = 0; break;
			case 5: // Left
				rotX = 0; rotY = 90; break;
			case 6: // Right
				rotX = 0; rotY = -90; break;
		}
		updateTransform();
	}

	function resetView() {
		playPopSound(400);
		rotX = -20;
		rotY = 35;
		isAutoSpinning = true;
		updateTransform();
	}

	function toggleAutoSpin() {
		playPopSound(isAutoSpinning ? 300 : 600);
		isAutoSpinning = !isAutoSpinning;
	}

	function openSideDetail(side: SensorySide, e: MouseEvent) {
		e.stopPropagation();
		playPopSound(650);
		const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
		triggerConfetti((rect.left + rect.width / 2) / window.innerWidth, (rect.top + rect.height / 2) / window.innerHeight);
		selectedSide = side;
	}
</script>

<div class="flex flex-col items-center w-full max-w-4xl mx-auto py-2">
	<!-- Drag Instruction Banner -->
	<div class="flex items-center justify-center gap-2 bg-pink-100/90 text-pink-700 text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full mb-4 shadow-xs border border-pink-200 animate-pulse">
		<Hand class="w-4 h-4 text-pink-500" />
		<span>Geser / Drag Kubus dengan Jari atau Mouse untuk Memutar 3D!</span>
	</div>

	<!-- 3D Viewport Wrapper -->
	<div class="relative py-6 sm:py-8 flex items-center justify-center">
		<!-- Dynamic 3D Ground Shadow -->
		<div
			bind:this={shadowRef}
			class="absolute bottom-1 w-52 h-10 bg-pink-950/20 rounded-full blur-xl transition-transform duration-75 pointer-events-none"
		></div>

		<!-- Viewport with fixed 260px size for 100% exact 3D geometry -->
		<div
			class="relative w-[260px] h-[260px] perspective-1000 cursor-grab active:cursor-grabbing select-none touch-none"
			onpointerdown={handlePointerDown}
			onpointermove={handlePointerMove}
			onpointerup={handlePointerUp}
			role="region"
			aria-label="3D Interactive Cube Viewport"
		>
			<!-- 3D Cube Container (260px x 260px -> half width = 130px) -->
			<div
				bind:this={cubeRef}
				class="w-full h-full relative preserve-3d transition-transform duration-75 ease-out will-change-transform"
			>
				<!-- Inner solid core to prevent corner gaps -->
				<div class="absolute inset-2 bg-slate-800 rounded-2xl opacity-90 preserve-3d" style="transform: translateZ(0px);"></div>

				<!-- Sisi 1: Depan (Sensori Tekstur) -->
				<div
					class="absolute inset-0 rounded-2xl p-4 border-2 border-white/80 shadow-xl flex flex-col justify-between text-white bg-gradient-to-br from-pink-400 via-rose-400 to-pink-500 backface-hidden"
					style="transform: rotateY(0deg) translateZ(130px); -webkit-backface-visibility: hidden;"
				>
					<div class="flex justify-between items-start">
						<span class="bg-white/30 backdrop-blur-md text-white text-[11px] font-black px-2.5 py-0.5 rounded-full border border-white/30">Sisi #1</span>
						<Sparkles class="w-5 h-5 text-yellow-200" />
					</div>
					<div class="text-center my-auto">
						<div class="w-11 h-11 bg-white/20 rounded-xl mx-auto flex items-center justify-center mb-1.5 backdrop-blur-sm border border-white/30">
							<Sparkles class="w-6 h-6 text-white" />
						</div>
						<h3 class="font-heading font-extrabold text-lg drop-shadow-md">{CUBE_SIDES[0].name}</h3>
						<p class="text-[10px] text-pink-100 font-medium line-clamp-2 mt-0.5 px-1">{CUBE_SIDES[0].shortDesc}</p>
					</div>
					<button
						onclick={(e) => openSideDetail(CUBE_SIDES[0], e)}
						class="w-full bg-white text-pink-600 hover:bg-pink-50 font-bold text-[11px] py-1.5 px-2 rounded-xl shadow-md transition-all active:scale-95 flex items-center justify-center gap-1 cursor-pointer"
					>
						<Eye class="w-3.5 h-3.5" /> Buka Detail Sisi #1
					</button>
				</div>

				<!-- Sisi 2: Belakang (Pengenalan Emosi) -->
				<div
					class="absolute inset-0 rounded-2xl p-4 border-2 border-white/80 shadow-xl flex flex-col justify-between text-slate-800 bg-gradient-to-br from-amber-300 via-yellow-400 to-amber-400 backface-hidden"
					style="transform: rotateY(180deg) translateZ(130px); -webkit-backface-visibility: hidden;"
				>
					<div class="flex justify-between items-start">
						<span class="bg-slate-900/20 backdrop-blur-md text-slate-800 text-[11px] font-black px-2.5 py-0.5 rounded-full border border-slate-900/10">Sisi #2</span>
						<Smile class="w-5 h-5 text-slate-800" />
					</div>
					<div class="text-center my-auto">
						<div class="w-11 h-11 bg-slate-900/10 rounded-xl mx-auto flex items-center justify-center mb-1.5 backdrop-blur-sm">
							<Smile class="w-6 h-6 text-slate-800" />
						</div>
						<h3 class="font-heading font-extrabold text-lg drop-shadow-xs">{CUBE_SIDES[1].name}</h3>
						<p class="text-[10px] text-slate-700 font-medium line-clamp-2 mt-0.5 px-1">{CUBE_SIDES[1].shortDesc}</p>
					</div>
					<button
						onclick={(e) => openSideDetail(CUBE_SIDES[1], e)}
						class="w-full bg-slate-900 text-amber-300 hover:bg-slate-800 font-bold text-[11px] py-1.5 px-2 rounded-xl shadow-md transition-all active:scale-95 flex items-center justify-center gap-1 cursor-pointer"
					>
						<Eye class="w-3.5 h-3.5" /> Buka Detail Sisi #2
					</button>
				</div>

				<!-- Sisi 3: Atas (Sensori Alam & Kopi) -->
				<div
					class="absolute inset-0 rounded-2xl p-4 border-2 border-white/80 shadow-xl flex flex-col justify-between text-amber-100 bg-gradient-to-br from-amber-700 via-amber-800 to-orange-900 backface-hidden"
					style="transform: rotateX(90deg) translateZ(130px); -webkit-backface-visibility: hidden;"
				>
					<div class="flex justify-between items-start">
						<span class="bg-white/20 backdrop-blur-md text-amber-100 text-[11px] font-black px-2.5 py-0.5 rounded-full border border-white/20">Sisi #3</span>
						<Coffee class="w-5 h-5 text-amber-200" />
					</div>
					<div class="text-center my-auto">
						<div class="w-11 h-11 bg-white/10 rounded-xl mx-auto flex items-center justify-center mb-1.5 backdrop-blur-sm">
							<Coffee class="w-6 h-6 text-amber-200" />
						</div>
						<h3 class="font-heading font-extrabold text-lg drop-shadow-sm">{CUBE_SIDES[2].name}</h3>
						<p class="text-[10px] text-amber-200 font-medium line-clamp-2 mt-0.5 px-1">{CUBE_SIDES[2].shortDesc}</p>
					</div>
					<button
						onclick={(e) => openSideDetail(CUBE_SIDES[2], e)}
						class="w-full bg-amber-200 text-amber-900 hover:bg-amber-100 font-bold text-[11px] py-1.5 px-2 rounded-xl shadow-md transition-all active:scale-95 flex items-center justify-center gap-1 cursor-pointer"
					>
						<Eye class="w-3.5 h-3.5" /> Buka Detail Sisi #3
					</button>
				</div>

				<!-- Sisi 4: Bawah (Motorik Halus) -->
				<div
					class="absolute inset-0 rounded-2xl p-4 border-2 border-white/80 shadow-xl flex flex-col justify-between text-white bg-gradient-to-br from-teal-400 via-emerald-500 to-teal-600 backface-hidden"
					style="transform: rotateX(-90deg) translateZ(130px); -webkit-backface-visibility: hidden;"
				>
					<div class="flex justify-between items-start">
						<span class="bg-white/30 backdrop-blur-md text-white text-[11px] font-black px-2.5 py-0.5 rounded-full border border-white/40">Sisi #4</span>
						<Scissors class="w-5 h-5 text-emerald-100" />
					</div>
					<div class="text-center my-auto">
						<div class="w-11 h-11 bg-white/20 rounded-xl mx-auto flex items-center justify-center mb-1.5 backdrop-blur-sm">
							<Scissors class="w-6 h-6 text-white" />
						</div>
						<h3 class="font-heading font-extrabold text-lg drop-shadow-sm">{CUBE_SIDES[3].name}</h3>
						<p class="text-[10px] text-teal-100 font-medium line-clamp-2 mt-0.5 px-1">{CUBE_SIDES[3].shortDesc}</p>
					</div>
					<button
						onclick={(e) => openSideDetail(CUBE_SIDES[3], e)}
						class="w-full bg-white text-teal-700 hover:bg-teal-50 font-bold text-[11px] py-1.5 px-2 rounded-xl shadow-md transition-all active:scale-95 flex items-center justify-center gap-1 cursor-pointer"
					>
						<Eye class="w-3.5 h-3.5" /> Buka Detail Sisi #4
					</button>
				</div>

				<!-- Sisi 5: Kiri (Aktivitas Interaktif) -->
				<div
					class="absolute inset-0 rounded-2xl p-4 border-2 border-white/80 shadow-xl flex flex-col justify-between text-white bg-gradient-to-br from-purple-400 via-indigo-500 to-purple-600 backface-hidden"
					style="transform: rotateY(-90deg) translateZ(130px); -webkit-backface-visibility: hidden;"
				>
					<div class="flex justify-between items-start">
						<span class="bg-white/30 backdrop-blur-md text-white text-[11px] font-black px-2.5 py-0.5 rounded-full border border-white/40">Sisi #5</span>
						<Activity class="w-5 h-5 text-purple-200" />
					</div>
					<div class="text-center my-auto">
						<div class="w-11 h-11 bg-white/20 rounded-xl mx-auto flex items-center justify-center mb-1.5 backdrop-blur-sm">
							<Activity class="w-6 h-6 text-white" />
						</div>
						<h3 class="font-heading font-extrabold text-lg drop-shadow-sm">{CUBE_SIDES[4].name}</h3>
						<p class="text-[10px] text-purple-100 font-medium line-clamp-2 mt-0.5 px-1">{CUBE_SIDES[4].shortDesc}</p>
					</div>
					<button
						onclick={(e) => openSideDetail(CUBE_SIDES[4], e)}
						class="w-full bg-white text-purple-700 hover:bg-purple-50 font-bold text-[11px] py-1.5 px-2 rounded-xl shadow-md transition-all active:scale-95 flex items-center justify-center gap-1 cursor-pointer"
					>
						<Eye class="w-3.5 h-3.5" /> Buka Detail Sisi #5
					</button>
				</div>

				<!-- Sisi 6: Kanan (Warna & Bentuk) -->
				<div
					class="absolute inset-0 rounded-2xl p-4 border-2 border-white/80 shadow-xl flex flex-col justify-between text-white bg-gradient-to-br from-orange-400 via-amber-500 to-orange-500 backface-hidden"
					style="transform: rotateY(90deg) translateZ(130px); -webkit-backface-visibility: hidden;"
				>
					<div class="flex justify-between items-start">
						<span class="bg-white/30 backdrop-blur-md text-white text-[11px] font-black px-2.5 py-0.5 rounded-full border border-white/40">Sisi #6</span>
						<Shapes class="w-5 h-5 text-amber-100" />
					</div>
					<div class="text-center my-auto">
						<div class="w-11 h-11 bg-white/20 rounded-xl mx-auto flex items-center justify-center mb-1.5 backdrop-blur-sm">
							<Shapes class="w-6 h-6 text-white" />
						</div>
						<h3 class="font-heading font-extrabold text-lg drop-shadow-sm">{CUBE_SIDES[5].name}</h3>
						<p class="text-[10px] text-amber-100 font-medium line-clamp-2 mt-0.5 px-1">{CUBE_SIDES[5].shortDesc}</p>
					</div>
					<button
						onclick={(e) => openSideDetail(CUBE_SIDES[5], e)}
						class="w-full bg-white text-orange-700 hover:bg-orange-50 font-bold text-[11px] py-1.5 px-2 rounded-xl shadow-md transition-all active:scale-95 flex items-center justify-center gap-1 cursor-pointer"
					>
						<Eye class="w-3.5 h-3.5" /> Buka Detail Sisi #6
					</button>
				</div>
			</div>
		</div>
	</div>

	<!-- Interactive Controls Toolbar -->
	<div class="w-full bg-white/80 backdrop-blur-md rounded-3xl p-4 shadow-xl border border-pink-100 mt-2 space-y-4">
		<div class="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-3">
			<div class="flex items-center gap-2 text-slate-700 font-heading font-bold text-sm">
				<Maximize2 class="w-4 h-4 text-pink-500" /> Kontrol Rotasi Kubus 3D
			</div>

			<div class="flex items-center gap-2">
				<button
					onclick={toggleAutoSpin}
					class="px-3 py-1.5 rounded-xl font-bold text-xs transition-all active:scale-95 flex items-center gap-1.5 cursor-pointer {isAutoSpinning ? 'bg-pink-100 text-pink-700 hover:bg-pink-200' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}"
				>
					{#if isAutoSpinning}
						<Pause class="w-3.5 h-3.5" /> Putar Otomatis: ON
					{:else}
						<Play class="w-3.5 h-3.5" /> Putar Otomatis: OFF
					{/if}
				</button>

				<button
					onclick={resetView}
					class="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold text-xs transition-all active:scale-95 flex items-center gap-1 cursor-pointer"
				>
					<RotateCcw class="w-3.5 h-3.5" /> Reset View
				</button>
			</div>
		</div>

		<!-- Quick Side Selector Buttons -->
		<div>
			<span class="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">Pilih Sisi Kubus:</span>
			<div class="grid grid-cols-3 sm:grid-cols-6 gap-2">
				{#each CUBE_SIDES as side}
					<button
						onclick={() => rotateToSide(side.id)}
						class="flex flex-col items-center justify-center p-2 rounded-2xl bg-gradient-to-r {side.color} text-white font-bold text-xs shadow-xs hover:shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
					>
						<span class="text-[10px] opacity-80 uppercase">Sisi #{side.id}</span>
						<span class="text-xs truncate w-full text-center">{side.name}</span>
					</button>
				{/each}
			</div>
		</div>
	</div>
</div>

<!-- Modal Component -->
<SideDetailModal side={selectedSide} onClose={() => (selectedSide = null)} />
