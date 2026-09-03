const asset = (name) => `${import.meta.env.BASE_URL}assets/${name}`

export const BCL_DUMMY_URL = 'https://yayasanamalmalaysia.bcl.my/embed/form/karnival25tahunamalmalaysia'

export const EVENT = {
  title: 'Festival Labohan Dagang @25 tahun Yayasan Amal Malaysia',
  shortTitle: 'Festival Labohan Dagang',
  dateLabel: '3 Oktober 2026',
  dateTime: '2026-10-03T00:00:00+08:00',
  registrationCloseLabel: '16 September 2026',
  locationShort: 'HQ Yayasan Amal Malaysia • Kg. Labohan Dagang',
  location: 'HQ Yayasan Amal Malaysia, Kg. Labohan Dagang, Selangor',
  tagline: '25 Tahun Membina Legasi, Memimpin Transformasi',
}

export const ASSETS = {
  logo: asset('yam-logo-official.jpg'),
  anniversaryLogo: asset('yam-25-logo-official.png'),
  hero: asset('hero-community-syariah-final.png'),
  funRunLong: asset('funrun-long.jpeg'),
  funRunShort: asset('funrun-short.jpeg'),
  funRunPeople: asset('funrun-wearing-mockup-final.png'),
  funRunRoute: asset('funrun-route-3d-draft.png'),
  jubileeLong: asset('jubilee-long.jpeg'),
  jubileePolo: asset('jubilee-polo.jpeg'),
  jubileePeople: asset('jubilee-wearing-mockup-final.png'),
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
    embedUrl: BCL_DUMMY_URL,
    isDummy: true,
  },
  shirt: {
    id: 'shirt',
    title: 'Baju Rasmi Jubli Perak 25 Tahun',
    shortTitle: 'Baju Jubli Perak',
    price: null,
    highlight: 'Keluaran khas • Tempahan berasingan',
    embedUrl: BCL_DUMMY_URL,
    isDummy: true,
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
