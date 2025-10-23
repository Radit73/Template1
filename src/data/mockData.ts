import type { SectionKey, IconName, MenuItem } from '../types'

export interface NotificationItem {
  id: string
  title: string
  time: string
  category: 'update' | 'insight' | 'alert'
}

export interface DashboardStat {
  id: string
  label: string
  value: string
  delta: string
  trend: 'up' | 'down'
  note: string
}

export interface DashboardUpdate {
  id: string
  title: string
  detail: string
  time: string
  icon: IconName
}

export interface FaqItem {
  id: string
  question: string
  answer: string
}

export interface FeedPost {
  id: string
  author: string
  handle: string
  tags: string[]
  likes: number
  comments: number
  uploaded: string
  caption: string
  imageSeed: string
}

export interface FeedCollection {
  id: string
  title: string
  description: string
  count: number
  palette: string
}

export interface ProfileStat {
  id: string
  label: string
  value: string
  delta: string
}

export interface ProfileActivity {
  id: string
  title: string
  detail: string
  time: string
  type: 'upload' | 'comment' | 'follow'
}

export interface ChartPoint {
  label: string
  posts: number
  likes: number
}

export interface TemplateGridOption {
  id: string
  title: string
  description: string
  columns: number
}

export interface TemplateColor {
  id: string
  name: string
  value: string
  usage: string
}

export interface TemplateButton {
  id: string
  label: string
  tone: 'primary' | 'neutral' | 'outline' | 'danger'
  description: string
}

export interface TemplateCard {
  id: string
  title: string
  description: string
  layout: 'panel' | 'media' | 'stat'
}

export interface TemplateChart {
  id: string
  title: string
  variant: 'line' | 'bar' | 'donut'
  description: string
  primary: string
  secondary: string
}

export const menuItems: MenuItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    caption: 'Ikhtisar komunitas & insight cepat',
    icon: 'grid',
  },
  {
    id: 'beranda',
    label: 'Beranda',
    caption: 'Pantau unggahan terbaru dan tagar',
    icon: 'home',
  },
  {
    id: 'profile',
    label: 'Profil Kreator',
    caption: 'Kelola akun, aktivitas, dan statistik',
    icon: 'user',
  },
  {
    id: 'template',
    label: 'Template',
    caption: 'Design system untuk tiap komponen',
    icon: 'layers',
  },
]

export const notifications: NotificationItem[] = [
  {
    id: 'notif-1',
    title: '5 foto baru menunggu kurasi',
    time: '3 menit lalu',
    category: 'alert',
  },
  {
    id: 'notif-2',
    title: 'Engagement naik 14% minggu ini',
    time: '28 menit lalu',
    category: 'insight',
  },
  {
    id: 'notif-3',
    title: 'Sesi mentoring “Night Street” mulai besok',
    time: '1 jam lalu',
    category: 'update',
  },
]

export const trendingTags = ['#GoldenHour', '#PortraitLab', '#CityStories', '#AnalogNusantara', '#NightRide', '#SunsetMood']

export const sidebarShortcuts: { label: string; icon: IconName; description: string }[] = [
  {
    label: 'Unggah Foto',
    icon: 'upload',
    description: 'Tambah foto baru ke komunitas',
  },
  {
    label: 'Jadwal Rilis',
    icon: 'calendar',
    description: 'Lihat agenda unggahan mingguan',
  },
  {
    label: 'Tagar Favorit',
    icon: 'tag',
    description: 'Kelola daftar tagar utama',
  },
]

export const storageSummary = {
  percentage: 68,
  used: '340 GB',
  total: '500 GB',
  updated: '15 menit lalu',
}

export const sectionDescriptions: Record<SectionKey, string> = {
  dashboard: 'Halo admin! Ini rangkuman progress komunitas foto kamu hari ini.',
  beranda: 'Pantau unggahan terbaru, interaksi, dan tagar yang lagi ramai.',
  profile: 'Kelola identitas kreator, aktivitas terbaru, dan insight performa personal.',
  template: 'Design system FotoBlog: warna, grid, tombol, dan elemen lainnya.',
}

export const dashboardStats: DashboardStat[] = [
  {
    id: 'uploads',
    label: 'Unggahan Hari Ini',
    value: '86',
    delta: '+8%',
    trend: 'up',
    note: '08.00 – 18.00 WIB',
  },
  {
    id: 'likes',
    label: 'Total Suka',
    value: '42,8K',
    delta: '+5%',
    trend: 'up',
    note: 'Puncak jam 19.00',
  },
  {
    id: 'comments',
    label: 'Komentar Aktif',
    value: '5,9K',
    delta: '-3%',
    trend: 'down',
    note: 'Butuh moderator standby',
  },
  {
    id: 'stories',
    label: 'Story View',
    value: '18,2K',
    delta: '+11%',
    trend: 'up',
    note: 'Sering diakses via mobile',
  },
]

export const dashboardUpdates: DashboardUpdate[] = [
  {
    id: 'update-1',
    title: 'Album “City After Rain” selesai dikurasi',
    detail: '12 foto terpilih, jadwal tayang 20.00 WIB',
    time: '5 menit lalu',
    icon: 'image',
  },
  {
    id: 'update-2',
    title: 'Workshop analog Bandung penuh',
    detail: '30 peserta confirm, live stream disiapkan',
    time: '22 menit lalu',
    icon: 'calendar',
  },
  {
    id: 'update-3',
    title: 'Moderator butuh bantuan',
    detail: '4 laporan spam menunggu review',
    time: '41 menit lalu',
    icon: 'shield',
  },
]

export const dashboardFaq: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Bagaimana cara menjadwalkan unggahan otomatis?',
    answer: 'Buka menu Beranda → klik tombol “Jadwalkan” pada unggahan, pilih tanggal dan jam tayang, lalu simpan. Sistem akan mengirim pengingat 30 menit sebelum tayang.',
  },
  {
    id: 'faq-2',
    question: 'Apa bedanya tagar publik dan tagar komunitas?',
    answer: 'Tagar publik muncul di halaman eksplorasi, sedangkan tagar komunitas hanya terlihat oleh anggota tertentu. Kamu bisa mengatur ini saat membuat tagar baru di menu Template.',
  },
  {
    id: 'faq-3',
    question: 'Di mana melihat insight performa kreator?',
    answer: 'Buka halaman Profil Kreator. Di bagian bawah terdapat grafik aktivitas dan ringkasan performa per kreator.',
  },
]

export const feedPosts: FeedPost[] = [
  {
    id: 'post-1',
    author: 'Nadia Permata',
    handle: '@nadiapixel',
    tags: ['#GoldenHour', '#StreetPortrait'],
    likes: 1420,
    comments: 128,
    uploaded: '14 menit lalu',
    caption: 'Eksperimen tone pastel di Braga saat hujan reda. Cahaya lampu jalan memantul cantik di trotoar basah.',
    imageSeed: 'sunset-1',
  },
  {
    id: 'post-2',
    author: 'Rafi Wirawan',
    handle: '@rafi.light',
    tags: ['#NightRide', '#CityStories'],
    likes: 980,
    comments: 63,
    uploaded: '32 menit lalu',
    caption: 'Night ride di Jakarta, fokus ke refleksi neon di kaca toko. Diambil dengan lensa 50mm.',
    imageSeed: 'city-ride',
  },
  {
    id: 'post-3',
    author: 'Sinta Maharani',
    handle: '@sintalens',
    tags: ['#AnalogNusantara', '#PortraitLab'],
    likes: 1280,
    comments: 74,
    uploaded: '1 jam lalu',
    caption: 'Portrait analog menggunakan film Portra 400. Grain-nya pas banget untuk mood hujan sore.',
    imageSeed: 'portrait-analog',
  },
  {
    id: 'post-4',
    author: 'Harun Saputra',
    handle: '@harun.shutter',
    tags: ['#SunsetMood', '#GoldenHour'],
    likes: 1640,
    comments: 132,
    uploaded: '2 jam lalu',
    caption: 'Sunset di Bukit Moko. 3 exposure berbeda digabung untuk dapatkan dynamic range terbaik.',
    imageSeed: 'sunset-hill',
  },
]

export const feedCollections: FeedCollection[] = [
  {
    id: 'col-1',
    title: 'City After Rain',
    description: 'Kumpulan foto kota besar setelah hujan turun.',
    count: 18,
    palette: 'linear-gradient(135deg, #6366f1, #818cf8)',
  },
  {
    id: 'col-2',
    title: 'Analog Weekend',
    description: 'Eksperimen film analog komunitas Bandung.',
    count: 12,
    palette: 'linear-gradient(135deg, #fb923c, #f97316)',
  },
  {
    id: 'col-3',
    title: 'Portrait Lab',
    description: 'Portrait dengan pencahayaan dramatis indoor.',
    count: 26,
    palette: 'linear-gradient(135deg, #0ea5e9, #22d3ee)',
  },
]

export const profileStats: ProfileStat[] = [
  {
    id: 'stat-1',
    label: 'Total Postingan',
    value: '312',
    delta: '+12 bulan ini',
  },
  {
    id: 'stat-2',
    label: 'Kreator Aktif',
    value: '48',
    delta: '+6 kreator baru',
  },
  {
    id: 'stat-3',
    label: 'Like Rata-rata',
    value: '1.2K',
    delta: '+9% dibanding minggu lalu',
  },
]

export const profileActivities: ProfileActivity[] = [
  {
    id: 'act-1',
    title: 'Upload “City After Rain”',
    detail: 'Seri 5 foto diunggah ke Beranda utama',
    time: '17 menit lalu',
    type: 'upload',
  },
  {
    id: 'act-2',
    title: 'Komentar di “Analog Weekend”',
    detail: 'Memberikan feedback positif pada 3 foto',
    time: '35 menit lalu',
    type: 'comment',
  },
  {
    id: 'act-3',
    title: 'Follow kreator baru',
    detail: 'Mengikuti akun @jalanjepret',
    time: '1 jam lalu',
    type: 'follow',
  },
]

export const profileChart: ChartPoint[] = [
  { label: 'Sen', posts: 6, likes: 820 },
  { label: 'Sel', posts: 7, likes: 910 },
  { label: 'Rab', posts: 5, likes: 760 },
  { label: 'Kam', posts: 9, likes: 1180 },
  { label: 'Jum', posts: 8, likes: 1020 },
  { label: 'Sab', posts: 10, likes: 1420 },
  { label: 'Min', posts: 4, likes: 640 },
]

export const templateGridOptions: TemplateGridOption[] = [
  {
    id: 'grid-1',
    title: '1 Frame Grid',
    description: 'Fokus tunggal, ideal untuk hero dan highlight konten.',
    columns: 1,
  },
  {
    id: 'grid-2',
    title: '2 Frame Grid',
    description: 'Bagikan konten utama dan panel samping seperti statistik.',
    columns: 2,
  },
  {
    id: 'grid-3',
    title: '3 Frame Grid',
    description: 'Galeri seimbang untuk feed foto dan kartu komunitas.',
    columns: 3,
  },
]

export const templateColors: TemplateColor[] = [
  { id: 'color-brand', name: 'Brand Indigo', value: '#4f46e5', usage: 'CTA & highlight utama' },
  { id: 'color-soft', name: 'Soft Sky', value: '#dbeafe', usage: 'Latar section terang' },
  { id: 'color-dark', name: 'Slate Ink', value: '#1e293b', usage: 'Teks utama & sidebar' },
  { id: 'color-accent', name: 'Sunset Glow', value: '#fb923c', usage: 'Badge & status penting' },
  { id: 'color-muted', name: 'Muted Mist', value: '#f4f4f5', usage: 'Border & kartu netral' },
]

export const templateButtons: TemplateButton[] = [
  {
    id: 'btn-primary',
    label: 'Primary Action',
    tone: 'primary',
    description: 'Untuk aksi utama seperti unggah foto atau simpan perubahan.',
  },
  {
    id: 'btn-neutral',
    label: 'Neutral Button',
    tone: 'neutral',
    description: 'Dipakai untuk aksi sekunder di dalam kartu atau modal.',
  },
  {
    id: 'btn-outline',
    label: 'Outline Button',
    tone: 'outline',
    description: 'Cocok untuk filter, toggle, dan aksi di sidebar.',
  },
  {
    id: 'btn-danger',
    label: 'Danger Button',
    tone: 'danger',
    description: 'Gunakan saat melakukan tindakan sensitif seperti hapus foto.',
  },
]

export const templateCards: TemplateCard[] = [
  {
    id: 'card-panel',
    title: 'Panel Informasi',
    description: 'Dipakai untuk FAQ, highlight event, atau pengumuman penting.',
    layout: 'panel',
  },
  {
    id: 'card-media',
    title: 'Media Card',
    description: 'Kartunya feed berisi foto, caption, dan statistik interaksi.',
    layout: 'media',
  },
  {
    id: 'card-stat',
    title: 'Statistik Mini',
    description: 'Ringkasan angka untuk dasbor dan profil kreator.',
    layout: 'stat',
  },
]

export const templateCharts: TemplateChart[] = [
  {
    id: 'chart-line',
    title: 'Line Insight',
    variant: 'line',
    description: 'Aktivitas unggahan harian dengan tren interaksi.',
    primary: '#6366f1',
    secondary: '#22d3ee',
  },
  {
    id: 'chart-bar',
    title: 'Bar Distribution',
    variant: 'bar',
    description: 'Performa tagar favorit pada minggu berjalan.',
    primary: '#4f46e5',
    secondary: '#fb923c',
  },
  {
    id: 'chart-donut',
    title: 'Donut Audience',
    variant: 'donut',
    description: 'Komposisi audiens berdasarkan lokasi dan perangkat.',
    primary: '#0ea5e9',
    secondary: '#fef3c7',
  },
]
