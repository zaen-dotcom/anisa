import confetti from 'canvas-confetti';

// Web Audio API synthesizer for child-friendly pops and chimes
export function playPopSound(freq = 440, type: OscillatorType = 'sine') {
	if (typeof window === 'undefined') return;

	try {
		const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
		if (!AudioCtx) return;

		const ctx = new AudioCtx();
		const osc = ctx.createOscillator();
		const gain = ctx.createGain();

		osc.type = type;
		osc.frequency.setValueAtTime(freq, ctx.currentTime);
		osc.frequency.exponentialRampToValueAtTime(freq * 1.5, ctx.currentTime + 0.1);

		gain.gain.setValueAtTime(0.3, ctx.currentTime);
		gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);

		osc.connect(gain);
		gain.connect(ctx.destination);

		osc.start();
		osc.stop(ctx.currentTime + 0.15);
	} catch {
		// Ignore audio autoplay restrictions
	}
}

export function triggerConfetti(x = 0.5, y = 0.5) {
	if (typeof window === 'undefined') return;

	confetti({
		particleCount: 50,
		spread: 70,
		origin: { x, y },
		colors: ['#FF69B4', '#FFE66D', '#4ECDC4', '#A29BFE', '#FF8C02']
	});
}
