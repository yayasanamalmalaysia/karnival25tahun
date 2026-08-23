const asset = (name) => `${import.meta.env.BASE_URL}assets/${name}`

export const BCL_DUMMY_URL = 'https://yayasanamalmalaysia.bcl.my/embed/form/karnival25tahunamalmalaysia'

export const EVENT = {
  title: 'Karnival Jubli Perak 25 Tahun Yayasan Amal Malaysia',
  shortTitle: 'Karnival Jubli Perak',
  dateLabel: '3 Oktober 2026',
  dateTime: '2026-10-03T00:00:00+08:00',
  registrationCloseLabel: '16 September 2026',
  locationShort: 'HQ Yayasan Amal Malaysia • Kg. Labohan Dagang',
  location: 'HQ Yayasan Amal Malaysia, Kg. Labohan Dagang, Selangor',
  tagline: '25 Tahun Membina Legasi, Memimpin Transformasi',
}

export const ASSETS = {
  logo: asset('yam-logo.png'),
  anniversaryLogo: asset('yam-25-logo.png'),
  hero: asset('hero-community-bawal-draft.png'),
  funRunLong: asset('funrun-long.jpeg'),
  funRunShort: asset('funrun-short.jpeg'),
  funRunRoute: asset('funrun-route-3d-draft.png'),
  riderShirt: asset('rider-shirt-draft.png'),
  riderConvoy: asset('rider-convoy-draft.png'),
  jubileeLong: asset('jubilee-long.jpeg'),
  jubileePolo: asset('jubilee-polo.jpeg'),
}

export const REGISTRATIONS = {
  funrun: {
    id: 'funrun',
    title: 'Amal Fun Run 2026',
    shortTitle: 'Fun Run',
    price: 'RM50',
    highlight: 'Termasuk Baju Amal Fun Run',
    embedUrl: BCL_DUMMY_URL,
    isDummy: true,
  },
  rider: {
    id: 'rider',
    title: 'Amal Rider 2026',
    shortTitle: 'Amal Rider',
    price: 'RM50',
    highlight: 'Termasuk Baju Amal Rider',
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
  ['bike', 'Amal Rider', 'Pendaftaran dibuka'],
  ['family', 'Aktiviti Keluarga', 'Akan diumumkan'],
  ['child', 'Aktiviti Kanak-kanak', 'Akan diumumkan'],
  ['booth', 'Booth & Pameran', 'Akan diumumkan'],
  ['bag', 'Jualan / Vendor', 'Akan diumumkan'],
  ['stage', 'Program Pentas', 'Akan diumumkan'],
  ['community', 'Aktiviti Komuniti', 'Akan diumumkan'],
]

export const FAQS = [
  {
    question: 'Adakah Fun Run dan Amal Rider menggunakan pendaftaran yang sama?',
    answer:
      'Tidak untuk versi akhir. Dalam draf ini, borang BCL yang sama digunakan sebagai dummy bagi menguji fungsi ketiga-tiga pilihan.',
  },
  {
    question: 'Adakah RM50 termasuk baju?',
    answer:
      'Ya, bagi Fun Run dan Amal Rider, yuran RM50 termasuk baju aktiviti masing-masing.',
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
