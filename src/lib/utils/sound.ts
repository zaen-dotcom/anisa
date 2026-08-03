import confetti from 'canvas-confetti';

let sharedAudioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
	if (typeof window === 'undefined') return null;

	if (!sharedAudioCtx) {
		const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
		if (AudioCtx) {
			sharedAudioCtx = new AudioCtx();
		}
	}

	if (sharedAudioCtx && sharedAudioCtx.state === 'suspended') {
		sharedAudioCtx.resume().catch(() => {});
	}

	return sharedAudioCtx;
}

// Reusable singleton Web Audio API synthesizer
export function playPopSound(freq = 440, type: OscillatorType = 'sine') {
	const ctx = getAudioContext();
	if (!ctx) return;

	try {
		const osc = ctx.createOscillator();
		const gain = ctx.createGain();

		osc.type = type;
		osc.frequency.setValueAtTime(freq, ctx.currentTime);
		osc.frequency.exponentialRampToValueAtTime(freq * 1.5, ctx.currentTime + 0.1);

		gain.gain.setValueAtTime(0.2, ctx.currentTime);
		gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);

		osc.connect(gain);
		gain.connect(ctx.destination);

		osc.start();
		osc.stop(ctx.currentTime + 0.12);
	} catch {
		// Ignore audio autoplay policies
	}
}

export function triggerConfetti(x = 0.5, y = 0.5) {
	if (typeof window === 'undefined') return;

	confetti({
		particleCount: 40,
		spread: 60,
		origin: { x, y },
		colors: ['#FF69B4', '#FFE66D', '#4ECDC4', '#A29BFE', '#FF8C02']
	});
}
