const asset = (name) => `${import.meta.env.BASE_URL}assets/${name}`

export const BCL_SCRIPT_URL = 'https://bcl.my/js/bc-encrypted-payment-embed.js'

export const EVENT = {
  title: 'Festival Labohan Dagang @25 tahun Yayasan Amal Malaysia',
  shortTitle: 'Festival Labohan Dagang',
  dateLabel: '14 November 2026',
  dateTime: '2026-11-14T00:00:00+08:00',
  shirtFirstBatchCloseLabel: '20 September 2026',
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
  funRunRoute: asset('funrun-route-3d-draft.png'),
  jubileePolo: asset('jubilee-polo-short-catalogue.jpeg'),
  jubileeLong: asset('jubilee-polo-long-catalogue.jpeg'),
  jubileeMuslimah: asset('jubilee-muslimah-acut-catalogue.jpeg'),
  festivalKids: asset('festival-kids-running-syariah-final.png'),
  festivalLandscape: asset('festival-landscape-syariah-final.png'),
}

export const REGISTRATIONS = {
  funrun: {
    id: 'funrun',
    title: 'Amal Fun Run 2026',
    shortTitle: 'Fun Run',
    price: 'RM50',
    highlight: 'Yuran pendaftaran termasuk baju, set sarapan & sijil penyertaan',
    embedUrl: 'https://yayasanamalmalaysia.bcl.my/embed/form/festival25tahun',
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
  ['child', 'Aktiviti Kanak-kanak', 'Akan diumumkan'],
  ['family', 'Aktiviti Keluarga', 'Akan diumumkan'],
  ['booth', 'Booth Jualan', 'Akan diumumkan'],
  ['exhibition', 'Pameran', 'Akan diumumkan'],
  ['stage', 'Program Pentas', 'Akan diumumkan'],
  ['community', 'Aktiviti Komuniti', 'Akan diumumkan'],
  ['food', 'Makanan & Vendor', 'Akan diumumkan'],
]

export const FAQS = [
  {
    question: 'Apa yang termasuk dalam yuran RM50?',
    answer:
      'Bagi Amal Fun Run, yuran pendaftaran RM50 termasuk baju aktiviti, set sarapan dan sijil penyertaan.',
  },
  {
    question: 'Adakah Baju Jubli Perak sama dengan baju Fun Run?',
    answer:
      'Tidak. Baju Jubli Perak ialah merchandise rasmi sambutan 25 Tahun dan merupakan tempahan berasingan.',
  },
  {
    question: 'Bolehkah saya menyertai lebih daripada satu aktiviti?',
    answer: 'Ya. Pendaftaran setiap aktiviti dibuat secara berasingan.',
  },
]
