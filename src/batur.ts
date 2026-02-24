// Pustaka Kalender Jawa
// Perhitungan, pengkonversian dan penanggalan Jawa
// 📁 batur.ts
// :ES6

// saat ini Pustaka Kalender Jawa hanya berlaku untuk 2 kurup
// prototype
const MIN_TAHUNJAWA = 1867;
const MAX_TAHUNJAWA = 2106;

interface BATASAN_TYPE {
  status: boolean;
  message: string;
}

function periksaBatasan(t: number): BATASAN_TYPE {
  if (t < MIN_TAHUNJAWA || t > MAX_TAHUNJAWA) {
    return { status: false, message: 'out of scope' };
  } else {
    return { status: true, message: '' };
  }
}

export { periksaBatasan };
