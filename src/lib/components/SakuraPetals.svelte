<script lang="ts">
	import { onMount } from 'svelte';

	interface Petal {
		id: number;
		left: number;
		duration: number;
		delay: number;
		size: number;
		rotation: number;
		opacity: number;
	}

	let petals = $state<Petal[]>([]);

	onMount(() => {
		const count = 18;
		const generated: Petal[] = [];
		for (let i = 0; i < count; i++) {
			generated.push({
				id: i,
				left: Math.random() * 100, // %
				duration: 8 + Math.random() * 10, // 8s to 18s
				delay: Math.random() * 8, // 0s to 8s
				size: 14 + Math.random() * 18, // px
				rotation: Math.random() * 360,
				opacity: 0.4 + Math.random() * 0.5
			});
		}
		petals = generated;
	});
</script>

<div class="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
	{#each petals as petal (petal.id)}
		<div
			class="absolute animate-float-sakura"
			style="
				left: {petal.left}%;
				animation-duration: {petal.duration}s;
				animation-delay: {petal.delay}s;
				width: {petal.size}px;
				height: {petal.size}px;
				opacity: {petal.opacity};
				transform: rotate({petal.rotation}deg);
			"
		>
			<svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full text-pink-300 drop-shadow-sm">
				<path
					d="M15 2C15 2 19 8 23 11C27 14 28 19 25 23C22 27 17 28 13 25C9 22 5 18 7 13C9 8 15 2 15 2Z"
					fill="currentColor"
				/>
				<path
					d="M15 15C16.5 13 18 12 20 12.5"
					stroke="#FF69B4"
					stroke-width="1.5"
					stroke-linecap="round"
				/>
			</svg>
		</div>
	{/each}
</div>
