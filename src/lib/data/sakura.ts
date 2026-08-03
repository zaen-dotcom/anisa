export interface SensorySide {
	id: number;
	name: string;
	subtitle: string;
	icon: string;
	color: string;
	accentColor: string;
	shortDesc: string;
	description: string;
	tactileElements: string[];
	therapeuticBenefits: string[];
	materialDetails: string;
}

export interface CoreValue {
	title: string;
	desc: string;
	icon: string;
	color: string;
	borderColor: string;
}

export interface TeamMember {
	name: string;
	role: string;
	institution: string;
	badge: string;
}

export const CUBE_SIDES: SensorySide[] = [
	{
		id: 1,
		name: 'Sensori Tekstur',
		subtitle: 'Stimulasi Taktil Serat Alami & Benang',
		icon: 'Sparkles',
		color: 'from-pink-400 to-rose-400',
		accentColor: '#FF69B4',
		shortDesc: 'Berbagai tekstur untal, rajut, dan serat kelapa alami untuk merangsang indra peraba.',
		description: 'Sisi 1 mengombinasikan jalinan rajutan serat sabut kelapa khas Jember dengan untalan benang rajut lembut. Kombinasi tekstur kasar-halus alami ini dirancang khusus untuk memicu respon syaraf taktil anak.',
		tactileElements: [
			'Untalan Benang Rajut Soft Cotton',
			'Rajutan Serat Sabut Kelapa Steril',
			'Tekstur Anyaman Kontras Bertekstur'
		],
		therapeuticBenefits: [
			'Merangsang sensitivitas perabaan (tactile stimulation)',
			'Membantu desensitisasi respon taktil anak dengan hipersensitif ASD',
			'Mengurangi perilaku kecemasan (sensory soothing)'
		],
		materialDetails: 'Sabut kelapa terolah steril ramah lingkungan & benang katun lembut non-alergenik.'
	},
	{
		id: 2,
		name: 'Pengenalan Emosi',
		subtitle: 'Edukasi Ekspresi Wajah & Kecerdasan Emosional',
		icon: 'Smile',
		color: 'from-amber-300 to-yellow-400',
		accentColor: '#FFE66D',
		shortDesc: 'Emoji & ekspresi wajah interaktif untuk mengenal dan memahami emosi.',
		description: 'Dilengkapi karakter ekspresi emosi interaktif (senang, tenang, sedih, terkejut) yang dapat dilepas-pasang dengan velcro. Membantu anak dengan autisme mengekspresikan suasana hati mereka.',
		tactileElements: [
			'Karakter Emoji Velcro Bongkar-Pasang',
			'Pilihan Ekspresi Wajah Kontras',
			'Material Kain Flanel Empuk'
		],
		therapeuticBenefits: [
			'Meningkatkan kecerdasan emosional (EQ) anak sejak dini',
			'Membantu komunikasi emosi non-verbal pada anak autis',
			'Melatih identifikasi & pemahaman perasaan diri dan orang lain'
		],
		materialDetails: 'Kain flanel empuk dengan perekat velcro lembut yang aman digunakan berulang kali.'
	},
	{
		id: 3,
		name: 'Sensori Alam & Aromaterapi',
		subtitle: 'Stimulasi Olfaktori Kopi & Tekstur Biji',
		icon: 'Coffee',
		color: 'from-amber-700 to-orange-900',
		accentColor: '#6F4E37',
		shortDesc: 'Tekstur biji kopi & jagung dengan aromaterapi kopi menenangkan.',
		description: 'Sisi khusus berbahan biji kopi pilihan khas Jember dan biji jagung alami yang memancarkan aroma kopi relaksasi. Memberikan sensasi stimulasi ganda: perabaan biji-bijian & penciuman aromaterapi.',
		tactileElements: [
			'Biji Kopi Sangrai Asli Jember',
			'Biji Jagung Alami Bertekstur',
			'Kantung Aromaterapi Terintegrasi'
		],
		therapeuticBenefits: [
			'Aromaterapi kopi memberikan efek relaksasi & meredakan emosi tantrum',
			'Melatih persepsi sensorik olfaktori (penciuman)',
			'Memberikan umpan balik perabaan biji-bijian yang unik'
		],
		materialDetails: 'Biji kopi asli Jember terpilih yang dikemas aman dalam kantung jaring berpori halus.'
	},
	{
		id: 4,
		name: 'Motorik Halus',
		subtitle: 'Kemandirian Resleting & Kancing',
		icon: 'Scissors',
		color: 'from-teal-400 to-emerald-500',
		accentColor: '#4ECDC4',
		shortDesc: 'Resleting warna-warni & kancing batok kelapa untuk melatih kemandirian.',
		description: 'Fitur manipulatif berupa resleting besar warna-warni, kancing batok kelapa alami, dan kancing cetek. Dirancang khusus untuk mengasah otot jemari serta keterampilan hidup mandiri anak.',
		tactileElements: [
			'Resleting Bintang Warna Pastell',
			'Kancing Batok Kelapa Alami',
			'Kancing Snap / Cetek Pria-Wanita'
		],
		therapeuticBenefits: [
			'Melatih koordinasi bimanual (penggunaan kedua tangan secara aktif)',
			'Meningkatkan kemandirian anak dalam memakai pakaian & tas',
			'Penguatan otot jari jemari (pincer grasp control)'
		],
		materialDetails: 'Kancing batok kelapa halus tanpa sudut tajam & resleting berbahan nilon berkualitas.'
	},
	{
		id: 5,
		name: 'Aktivitas Interaktif',
		subtitle: 'Koordinasi Mata-Tangan & Tali Manik',
		icon: 'Activity',
		color: 'from-purple-400 to-indigo-500',
		accentColor: '#A29BFE',
		shortDesc: 'Menggeser manik-manik kayu & meronce tali interaktif.',
		description: 'Permainan geser manik-manik kayu dan tali elastis untuk melatih fokus visual, koordinasi mata-tangan, serta stimulasi proprioseptif anak secara menyenangkan.',
		tactileElements: [
			'Manik-Manik Kayu Alami Halus',
			'Tali Elastis Warna Pastel',
			'Papan Alur Meronce Interaktif'
		],
		therapeuticBenefits: [
			'Meningkatkan koordinasi mata dan tangan (hand-eye coordination)',
			'Melatih tingkat fokus, ketelitian, dan kesabaran anak',
			'Stimulasi motorik halus & latihan meronce dasar'
		],
		materialDetails: 'Manik kayu alami dengan pewarna aman untuk anak (water-based non-toxic).'
	},
	{
		id: 6,
		name: 'Warna & Bentuk',
		subtitle: 'Pengenalan Geometri & Kognitif Spasial',
		icon: 'Shapes',
		color: 'from-orange-400 to-amber-500',
		accentColor: '#FF8C02',
		shortDesc: 'Mengenal bentuk geometri dan membedakan warna dasar.',
		description: 'Kepingan geometri (lingkaran, segitiga, persegi, bintang) berbahan kain empuk warna pastel untuk pembelajaran kognitif visual, pemisahan bentuk, dan warna dasar.',
		tactileElements: [
			'Kepingan Geometri Empuk Pastel',
			'Kain Flanel Kualitas Premium',
			'Magnet / Velcro Tempel Mudah'
		],
		therapeuticBenefits: [
			'Pengenalan konsep spasial, bentuk geometri, dan warna dasar',
			'Mengasah kemampuan kognitif & logika pemecahan masalah',
			'Media bermain peran edukatif yang menyenangkan'
		],
		materialDetails: 'Busa empuk dilapisi flanel halus dengan jahitan tepi yang rapi dan aman.'
	}
];

export const CORE_VALUES: CoreValue[] = [
	{
		title: 'Stimulasi Multisensori',
		desc: 'Mengintegrasikan indra peraba, penciuman, penglihatan, dan motorik dalam 1 media kubus terpadu.',
		icon: 'Sparkles',
		color: 'bg-pink-100 text-pink-600',
		borderColor: 'border-pink-300'
	},
	{
		title: 'Bahan Alami Ramah Lingkungan',
		desc: 'Memanfaatkan limbah sabut kelapa daerah Jember dan kancing batok kelapa secara berkelanjutan.',
		icon: 'Leaf',
		color: 'bg-emerald-100 text-emerald-700',
		borderColor: 'border-emerald-300'
	},
	{
		title: 'Terapi & Edukasi Terpadu',
		desc: 'Dirancang khusus sesuai standar kebutuhan terapi stimulasi anak ASD dan berkebutuhan khusus (ABK).',
		icon: 'GraduationCap',
		color: 'bg-amber-100 text-amber-800',
		borderColor: 'border-amber-300'
	},
	{
		title: 'Aman & Ramah Anak (3-9 Tahun)',
		desc: 'Bahan non-toxic, jahitan presisi, tanpa sudut tajam, empuk, dan nyaman digunakan dalam waktu lama.',
		icon: 'ShieldCheck',
		color: 'bg-sky-100 text-sky-700',
		borderColor: 'border-sky-300'
	},
	{
		title: 'Aromaterapi Kopi Relaksasi',
		desc: 'Ekstrak biji kopi asli Jember yang memancarkan aroma terapi lembut untuk efek menenangkan (calming effect).',
		icon: 'Coffee',
		color: 'bg-purple-100 text-purple-700',
		borderColor: 'border-purple-300'
	}
];

export const TEAM_MEMBERS: TeamMember[] = [
	{
		name: 'Siti Anisa',
		role: 'Ketua Tim & Pengembang Produk',
		institution: 'Politeknik Negeri Jember (Polije)',
		badge: 'Ketua Pengembang'
	},
	{
		name: 'Fififan Nur Halimah',
		role: 'Anggota Tim - Riset & Terapi Sensorik',
		institution: 'Politeknik Negeri Jember (Polije)',
		badge: 'Riset Terapi'
	},
	{
		name: 'Najwa Alifa Hamdah',
		role: 'Anggota Tim - Desain & Produksi',
		institution: 'Politeknik Negeri Jember (Polije)',
		badge: 'Desain & Material'
	}
];

export const VISI_MISI = {
	visi: 'Menjadi media terapi sensorik inovatif berbasis bahan alami yang membantu meningkatkan perkembangan sensorik anak berkebutuhan khusus sekaligus mendorong pemanfaatan limbah sabut kelapa secara berkelanjutan.',
	misi: [
		'Mengembangkan media terapi sensorik yang aman, edukatif, dan menyenangkan bagi anak dengan ASD.',
		'Memanfaatkan limbah sabut kelapa sebagai material utama yang ramah lingkungan.',
		'Mengombinasikan aromaterapi kopi untuk memberikan stimulasi relaksasi selama proses terapi.',
		'Mendukung guru, terapis, dan orang tua dalam proses stimulasi multisensori anak.',
		'Menghasilkan inovasi yang memiliki dampak sosial, pendidikan, dan lingkungan secara berkelanjutan.'
	]
};

export const TESTIMONIAL = {
	teacherName: 'Ika Ruliatin, S.Pd.',
	teacherRole: 'Guru SD Autis SLB Negeri Jember',
	teacherQuote: 'Konsep SAKURA sangat luar biasa karena berhasil mengintegrasikan berbagai stimulasi terapi dalam satu media yang ringkas dan menarik. Kami mendorong pengembangan SAKURA tidak hanya untuk anak ASD, namun juga untuk anak tunanetra, tunarungu, serta anak dengan hambatan perkembangan lainnya.',
	observations: [
		'Anak-anak menunjukkan antusiasme yang tinggi sejak pertama kali melihat & menyentuh kubus SAKURA.',
		'Durasi fokus dan konsentrasi anak meningkat signifikan saat berinteraksi dengan 6 sisi kubus.',
		'Aroma kopi alami memberikan dampak positif berupa efek tenang (calming effect) pada anak yang sedang cemas.',
		'Eksplorasi mandiri berjalan efektif dengan pendekatan belajar sambil bermain (learning by playing).'
	]
};

export const SITE_CONTACT = {
	whatsapp: '085735712558',
	waLink: 'https://wa.me/6285735712558',
	instagram: '@sakura.kubus',
	igLink: 'https://instagram.com/sakura.kubus',
	email: 'sakura.kubus@gmail.com',
	address: 'Jl. Mastrip, Sumbersari, Jember, Jawa Timur, Indonesia',
	mapsUrl: 'https://maps.google.com/?q=Jl.+Mastrip,+Sumbersari,+Jember,+Jawa+Timur',
	hours: [
		{ day: 'Senin - Rabu', time: '09.00 – 18.00 WIB' },
		{ day: 'Kamis - Jumat', time: '09.00 – 20.00 WIB' },
		{ day: 'Sabtu', time: '09.00 – 18.00 WIB' },
		{ day: 'Minggu', time: 'Tutup (Hari Libur)' }
	]
};
