const asset = (name) => {
  const isJubileeStore = window.location.pathname.includes('/baju-jubli-perak/')
  return `${isJubileeStore ? '../' : './'}assets/${name}`
}

export const BCL_SCRIPT_URL = 'https://bcl.my/js/bc-encrypted-payment-embed.js'

export const EVENT = {
  title: 'Karnival Labohan Dagang @25 tahun Yayasan Amal Malaysia',
  shortTitle: 'Karnival Labohan Dagang',
  dateLabel: '14 November 2026',
  dateTime: '2026-11-14T00:00:00+08:00',
  registrationCloseLabel: '20 Oktober 2026',
  locationShort: 'HQ Yayasan Amal Malaysia • Kg. Labohan Dagang',
  location: 'HQ Yayasan Amal Malaysia, Kg. Labohan Dagang, Selangor',
  mapUrl: 'https://maps.app.goo.gl/T72UUvqh65MFJPvp8',
  tagline: '25 Tahun Membina Legasi, Memimpin Transformasi',
}

export const ASSETS = {
  logo: asset('yam-logo-official.jpg'),
  anniversaryLogo: asset('yam-25-logo-official.png'),
  hero: asset('hero-community-syariah-final.png'),
  funRunLong: asset('funrun-long-catalogue.jpeg'),
  funRunShort: asset('funrun-short-catalogue.jpeg'),
  funRunMuslimah: asset('funrun-muslimah-catalogue.jpeg'),
  funRunKidsShort: asset('funrun-kids-short-latest.jpeg'),
  funRunKidsMuslimah: asset('funrun-kids-muslimah-latest.jpg'),
  sizeChartTshirtPolo: asset('size-chart-tshirt-polo-latest.jpeg'),
  sizeChartLongSleeve: asset('size-chart-long-sleeve-latest.jpeg'),
  sizeChartMuslimah: asset('size-chart-muslimah-latest.jpeg'),
  funRunRoute: asset('funrun-route-3km-5km-20260922.png'),
  jubileePolo: asset('jubilee-polo-short-catalogue.jpeg'),
  jubileeLong: asset('jubilee-polo-long-sleeve-latest.jpeg'),
  jubileeLongRoundneck: asset('jubilee-adult-long-sleeve-latest.jpeg'),
  jubileeMuslimah: asset('jubilee-muslimah-acut-catalogue.jpeg'),
  jubileeKidsPolo: asset('jubilee-kids-polo-latest.jpg'),
  jubileeKidsMuslimah: asset('jubilee-kids-muslimah-latest.png'),
  festivalKids: asset('festival-kids-running-syariah-final.png'),
  festivalLandscape: asset('festival-landscape-syariah-final.png'),
}

export const REGISTRATIONS = {
  funrun: {
    id: 'funrun',
    title: 'Amal Fun Run 2026',
    shortTitle: 'Fun Run',
    price: 'RM15',
    highlight: 'Pendaftaran larian serendah RM15',
    embedUrl: 'https://yayasanamalmalaysia.bcl.my/embed/event/amalfunrun',
  },
  shirt: {
    id: 'shirt',
    title: 'Baju Rasmi Jubli Perak 25 Tahun',
    shortTitle: 'Baju Jubli Perak',
    price: null,
    highlight: 'Keluaran khas • Tempahan berasingan',
    embedUrl: 'https://yayasanamalmalaysia.bcl.my/embed/form/bajujubliperak',
  },
}

export const CARNIVAL_ACTIVITIES = [
  ['run', 'Amal Fun Run', 'Pendaftaran dibuka'],
  ['child', 'Aktiviti Kanak-kanak'],
  ['family', 'Aktiviti Keluarga'],
  ['booth', 'Booth Jualan'],
  ['exhibition', 'Pameran'],
  ['antiqueCar', 'Pameran Kereta Antik'],
  ['stage', 'Program Pentas'],
  ['community', 'Aktiviti Komuniti'],
  ['food', 'Makanan & Vendor'],
]

export const FAQS = [
  {
    question: 'Apakah pilihan pakej Amal Fun Run?',
    answer:
      'Pakej Larian Sahaja RM15 tidak termasuk baju. Pakej Larian + Baju Dewasa RM50 dan Larian + Baju Kanak-kanak RM45 termasuk baju rasmi. Semua pakej merangkumi penyertaan larian, nombor bib, medal finisher dan minuman ringan.',
  },
  {
    question: 'Di manakah saya boleh tempah Baju Jubli Perak?',
    answer:
      'Baju Jubli Perak mempunyai halaman tempahan khas dan tidak termasuk dalam paparan pendaftaran Fun Run.',
    link: {
      href: 'https://amalmalaysia.org.my/karnival25tahun/baju-jubli-perak/',
      label: 'Tempah Baju Jubli Perak',
    },
  },
  {
    question: 'Bolehkah saya menyertai lebih daripada satu aktiviti?',
    answer: 'Ya. Pendaftaran setiap aktiviti dibuat secara berasingan.',
  },
]
