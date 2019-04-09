/**
 * 📁awal_tahun_jawa.mjs
 * @desc Hari Awal Tahun Kalender Jawa 1867 -2106 (1355-1594H, 1936-2169 M)
 */

import Neptu from './neptu.mjs'
import Kurup from './kurup.mjs'

/**
 * Kurup Alip Selasa Pon (Asepon)
 */

/** @constant {object} */
const ALIP_ASAPON = {
  neptu: Neptu.ALIP,
  kurup: Kurup.ASAPON,
  tahun: [1867, 1875, 1883, 1891, 1899, 1907, 1915, 1923, 1931, 1939, 1947, 1955, 1963, 1971, 1979]
}

/** @constant {object} */
const EHE_ASAPON = {
  neptu: Neptu.EHE,
  kurup: Kurup.ASAPON,
  tahun: [1968, 1876, 1884, 1892, 1900, 1908, 1916, 1924, 1932, 1940, 1948, 1956, 1964, 1972, 1980]
}

/** @constant {object} */
const JIMAWAL_ASAPON = {
  neptu: Neptu.JIMAWAL,
  kurup: Kurup.ASAPON,
  tahun: [1869, 1877, 1885, 1893, 1901, 1909, 1917, 1925, 1933, 1949, 1957, 1965, 1973, 1981]
}

/** @constant {object} */
const JE_ASAPON = {
  neptu: Neptu.JE,
  kurup: Kurup.ASAPON,
  tahun: [1870, 1878, 1886, 1894, 1902, 1910, 1918, 1926, 1934, 1950, 1958, 1966, 1974, 1982]
}

/** @constant {object} */
const DAL_ASAPON = {
  neptu: Neptu.DAL,
  kurup: Kurup.ASAPON,
  tahun: [1871, 1879, 1887, 1895, 1903, 1911, 1919, 1927, 1935, 1951, 1959, 1967, 1975, 1983]
}

/** @constant {object} */
const BE_ASAPON = {
  neptu: Neptu.BE,
  kurup: Kurup.ASAPON,
  tahun: [1872, 1880, 1888, 1896, 1904, 1912, 1920, 1928, 1936, 1952, 1960, 1968, 1976, 1984]
}

/** @constant {object} */
const WAWU_ASAPON = {
  neptu: Neptu.WAWU,
  kurup: Kurup.ASAPON,
  tahun: [1873, 1881, 1889, 1897, 1905, 1913, 1921, 1929, 1937, 1953, 1961, 1969, 1977, 1985]
}

/** @constant {object} */
const JIMAKIR_ASAPON = {
  neptu: Neptu.JIMAKIR,
  kurup: Kurup.ASAPON,
  tahun: [1874, 1882, 1890, 1898, 1906, 1914, 1922, 1930, 1938, 1954, 1962, 1970, 1978, 1986]

}

/**
 * Kurup Alip Senin Pahing
 */

const ALIP_ANENHING = {
  neptu: Neptu.ALIP,
  kurup: Kurup.ANENHING,
  tahun: [1987, 1995, 2003, 2011, 2019, 2027, 2035, 2043, 2051, 2059, 2067, 2075, 2083, 2091, 2099]
}

const EHE_ANENHING = {
  neptu: Neptu.EHE,
  kurup: Kurup.ANENHING,
  tahun: [1988, 1996, 2004, 2012, 2020, 2028, 2036, 2044, 2052, 2060, 2068, 2076, 2084, 2092, 2100]
}

const JIMAWAL_ANENHING = {
  neptu: Neptu.JIMAWAL,
  kurup: Kurup.ANENHING,
  tahun: [1989, 1997, 2005, 2013, 2021, 2029, 2037, 2045, 2053, 2061, 2069, 2077, 2085, 2093, 2101]
}

const JE_ANENHING = {
  neptu: Neptu.JE,
  kurup: Kurup.ANENHING,
  tahun: [1990, 1998, 2006, 2014, 2022, 2030, 2038, 2046, 2054, 2062, 2070, 2078, 2086, 2094, 2102]
}

const DAL_ANENHING = {
  neptu: Neptu.DAL,
  kurup: Kurup.ANENHING,
  tahun: [1991, 1999, 2007, 2015, 2023, 2031, 2039, 2047, 2055, 2063, 2071, 2079, 2087, 2095, 2103]
}

const BE_ANENHING = {
  neptu: Neptu.BE,
  kurup: Kurup.ANENHING,
  tahun: [1992, 2000, 2008, 2016, 2024, 2032, 2040, 2048, 2056, 2064, 2072, 2080, 2088, 2096, 2104]
}

const WAWU_ANENHING = {
  neptu: Neptu.WAWU,
  kurup: Kurup.ANENHING,
  tahun: [1993, 2001, 2009, 2017, 2025, 2033, 2041, 2049, 2057, 2065, 2073, 2081, 2089, 2097, 2105]
}

const JIMAKIR_ANENHING = {
  neptu: Neptu.JIMAKIR,
  kurup: Kurup.ANENHING,
  tahun: [1994, 2002, 2010, 2018, 2026, 2034, 2042, 2050, 2058, 2066, 2074, 2081, 2089, 2098, 2106]
}

export default {
  ALIP_ASAPON,
  EHE_ASAPON,
  JIMAWAL_ASAPON,
  JE_ASAPON,
  DAL_ASAPON,
  BE_ASAPON,
  WAWU_ASAPON,
  JIMAKIR_ASAPON,

  ALIP_ANENHING,
  EHE_ANENHING,
  JIMAWAL_ANENHING,
  JE_ANENHING,
  DAL_ANENHING,
  BE_ANENHING,
  WAWU_ANENHING,
  JIMAKIR_ANENHING
}
