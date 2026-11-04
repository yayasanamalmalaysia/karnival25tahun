const asset = (name) => {
  const isStandalonePage = [
    '/baju-jubli-perak/',
    '/pre-order-baju-fun-run/',
  ].some((path) => window.location.pathname.includes(path))
  return `${isStandalonePage ? '../' : './'}assets/${name}`
}

export const BCL_SCRIPT_URL = 'https://bcl.my/js/bc-encrypted-payment-embed.js'

export const EVENT = {
  title: 'Karnival Labohan Dagang @25 tahun Yayasan Amal Malaysia',
  shortTitle: 'Karnival Labohan Dagang',
  dateLabel: '14 November 2026',
  dateTime: '2026-11-14T00:00:00+08:00',
  registrationCloseLabel: '13 November 2026, 11:59 malam',
  locationShort: 'HQ Yayasan Amal Malaysia • Kg. Labohan Dagang',
  location: 'HQ Yayasan Amal Malaysia, Kg. Labohan Dagang, Selangor',
  mapUrl: 'https://maps.app.goo.gl/T72UUvqh65MFJPvp8',
  rsvpUrl: 'https://hadir.amalmalaysia.org.my/',
  tagline: '25 Tahun Membina Legasi, Memimpin Transformasi',
}

export const ASSETS = {
  logo: asset('yam-logo-official.jpg'),
  anniversaryLogo: asset('yam-25-logo-official.png'),
  hero: asset('hero-community-syariah-final.png'),
  heroFeaturedDesktop: asset('hero-karnival-inland-background-v1.png'),
  heroFeaturedMobile: asset('hero-karnival-inland-mobile-background-v1.png'),
  funRunLong: asset('funrun-long-catalogue.jpeg'),
  funRunShort: asset('funrun-short-catalogue.jpeg'),
  funRunMuslimah: asset('funrun-muslimah-catalogue.jpeg'),
  funRunKidsShort: asset('funrun-kids-short-latest.jpeg'),
  funRunKidsMuslimah: asset('funrun-kids-muslimah-latest.jpg'),
  sizeChartTshirtPolo: asset('size-chart-tshirt-polo-latest.jpeg'),
  sizeChartLongSleeve: asset('size-chart-long-sleeve-latest.jpeg'),
  sizeChartMuslimah: asset('size-chart-muslimah-latest.jpeg'),
  funRunRoute: asset('funrun-route-3km-5km-20260922.png'),
  activityRegistrationPoster: asset('aktiviti-program-percuma-2026.png'),
  jubileePolo: asset('jubilee-polo-short-catalogue.jpeg'),
  jubileeLong: asset('jubilee-polo-long-sleeve-latest.jpeg'),
  jubileeLongRoundneck: asset('jubilee-adult-long-sleeve-latest.jpeg'),
  jubileeMuslimah: asset('jubilee-muslimah-acut-catalogue.jpeg'),
  jubileeKidsPolo: asset('jubilee-kids-polo-latest.jpg'),
  jubileeKidsMuslimah: asset('jubilee-kids-muslimah-latest.png'),
  festivalKids: asset('festival-kids-running-syariah-final.png'),
  festivalLandscape: asset('festival-landscape-syariah-final.png'),
  dhuhaSpeaker: asset('datuk-dr-zulkifli-mohamad-albakri-cutout.png'),
  zraGuest: asset('zainal-rashid-ahmad-zra-cutout.png'),
  syedAzwanSpeaker: asset('syed-azwan-syed-ali-cutout.png'),
  nadirGuest: asset('muhammad-nadir-al-nuri-bin-kamaruzaman-cutout.png'),
}

export const REGISTRATIONS = {
  activities: {
    id: 'activities',
    title: 'Aktiviti Program Percuma',
    shortTitle: 'Aktiviti Percuma',
    price: 'Percuma',
    highlight: 'Pendaftaran aktiviti karnival tanpa yuran',
    embedUrl: 'https://yayasanamalmalaysia.bcl.my/embed/event/aktivitikarnival',
  },
  funrun: {
    id: 'funrun',
    title: 'Amal Fun Run 2026',
    shortTitle: 'Fun Run',
    price: 'RM5',
    highlight: 'Pendaftaran larian serendah RM5',
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
  funrunShirt: {
    id: 'funrunShirt',
    title: 'Pre-order Baju Fun Run Sahaja',
    shortTitle: 'Baju Fun Run Sahaja',
    price: null,
    highlight: 'Tempahan baju sahaja • Tanpa pendaftaran larian',
    embedUrl: 'https://yayasanamalmalaysia.bcl.my/embed/form/pre-bajufunrun',
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
    question: 'Adakah pendaftaran Amal Fun Run masih dibuka?',
    answer:
      'Ya. Pendaftaran dibuka semula sehingga 11:59 malam, 13 November 2026 untuk pakej RM5 dan RM15 sahaja. Pilih pakej RM5 untuk larian + bib nombor, atau RM15 untuk larian + medal + bib nombor. Kedua-duanya menggunakan baju bebas.',
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
