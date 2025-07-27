/**
 * 📁 kurup_asapon_anenhing_statik.ts
 * @desc Hari Awal awal Kalender Jawa 1867 -2106 (1355-1594 H, 1936-2169 M)
 * @desc Kurup A-Sa-Pon & Kurup A-Nen-Hing
 */

import { _ALIP, _EHE, _JIMAWAL, _JE, _DAL, _BE, _WAWU, _JIMAKIR, ARANING_TAHUN_SEWINDU } from './taun.js'
import { ASAPON, ANENHING } from './kurup.js'
import type { TaunKurupType } from './types.js'

/**
 * Kurup Alip Selasa Pon (A-SA-PON)
 */

const ALIP_ASAPON: TaunKurupType = {
  taun: ARANING_TAHUN_SEWINDU.get(_ALIP)!,
  kurup: ASAPON,
  awal: [1867, 1875, 1883, 1891, 1899, 1907, 1915, 1923, 1931, 1939, 1947, 1955, 1963, 1971, 1979]
}

const EHE_ASAPON: TaunKurupType = {
  taun: ARANING_TAHUN_SEWINDU.get(_EHE)!,
  kurup: ASAPON,
  awal: [1868, 1876, 1884, 1892, 1900, 1908, 1916, 1924, 1932, 1940, 1948, 1956, 1964, 1972, 1980]
}

const JIMAWAL_ASAPON: TaunKurupType = {
  taun: ARANING_TAHUN_SEWINDU.get(_JIMAWAL)!,
  kurup: ASAPON,
  awal: [1869, 1877, 1885, 1893, 1901, 1909, 1917, 1925, 1933, 1941, 1949, 1957, 1965, 1973, 1981]
}

const JE_ASAPON: TaunKurupType = {
  taun: ARANING_TAHUN_SEWINDU.get(_JE)!,
  kurup: ASAPON,
  awal: [1870, 1878, 1886, 1894, 1902, 1910, 1918, 1926, 1934, 1942, 1950, 1958, 1966, 1974, 1982]
}

const DAL_ASAPON: TaunKurupType = {
  taun: ARANING_TAHUN_SEWINDU.get(_DAL)!,
  kurup: ASAPON,
  awal: [1871, 1879, 1887, 1895, 1903, 1911, 1919, 1927, 1935, 1943, 1951, 1959, 1967, 1975, 1983]
}

const BE_ASAPON: TaunKurupType = {
  taun: ARANING_TAHUN_SEWINDU.get(_BE)!,
  kurup: ASAPON,
  awal: [1872, 1880, 1888, 1896, 1904, 1912, 1920, 1928, 1936, 1944, 1952, 1960, 1968, 1976, 1984]
}

const WAWU_ASAPON: TaunKurupType = {
  taun: ARANING_TAHUN_SEWINDU.get(_WAWU)!,
  kurup: ASAPON,
  awal: [1873, 1881, 1889, 1897, 1905, 1913, 1921, 1929, 1937, 1945, 1953, 1961, 1969, 1977, 1985]
}

const JIMAKIR_ASAPON: TaunKurupType = {
  taun: ARANING_TAHUN_SEWINDU.get(_JIMAKIR)!,
  kurup: ASAPON,
  awal: [1874, 1882, 1890, 1898, 1906, 1914, 1922, 1930, 1938, 1946, 1954, 1962, 1970, 1978, 1986]
}

/**
 * Kurup Alip Senen Pahing (A-NEN-HING)
 */

const ALIP_ANENHING: TaunKurupType = {
  taun: ARANING_TAHUN_SEWINDU.get(_ALIP)!,
  kurup: ANENHING,
  awal: [1987, 1995, 2003, 2011, 2019, 2027, 2035, 2043, 2051, 2059, 2067, 2075, 2083, 2091, 2099]
}

const EHE_ANENHING: TaunKurupType = {
  taun: ARANING_TAHUN_SEWINDU.get(_EHE)!,
  kurup: ANENHING,
  awal: [1988, 1996, 2004, 2012, 2020, 2028, 2036, 2044, 2052, 2060, 2068, 2076, 2084, 2092, 2100]
}

const JIMAWAL_ANENHING: TaunKurupType = {
  taun: ARANING_TAHUN_SEWINDU.get(_JIMAWAL)!,
  kurup: ANENHING,
  awal: [1989, 1997, 2005, 2013, 2021, 2029, 2037, 2045, 2053, 2061, 2069, 2077, 2085, 2093, 2101]
}

const JE_ANENHING: TaunKurupType = {
  taun: ARANING_TAHUN_SEWINDU.get(_JE)!,
  kurup: ANENHING,
  awal: [1990, 1998, 2006, 2014, 2022, 2030, 2038, 2046, 2054, 2062, 2070, 2078, 2086, 2094, 2102]
}

const DAL_ANENHING: TaunKurupType = {
  taun: ARANING_TAHUN_SEWINDU.get(_DAL)!,
  kurup: ANENHING,
  awal: [1991, 1999, 2007, 2015, 2023, 2031, 2039, 2047, 2055, 2063, 2071, 2079, 2087, 2095, 2103]
}

const BE_ANENHING: TaunKurupType = {
  taun: ARANING_TAHUN_SEWINDU.get(_BE)!,
  kurup: ANENHING,
  awal: [1992, 2000, 2008, 2016, 2024, 2032, 2040, 2048, 2056, 2064, 2072, 2080, 2088, 2096, 2104]
}

const WAWU_ANENHING: TaunKurupType = {
  taun: ARANING_TAHUN_SEWINDU.get(_WAWU)!,
  kurup: ANENHING,
  awal: [1993, 2001, 2009, 2017, 2025, 2033, 2041, 2049, 2057, 2065, 2073, 2081, 2089, 2097, 2105]
}

const JIMAKIR_ANENHING: TaunKurupType = {
  taun: ARANING_TAHUN_SEWINDU.get(_JIMAKIR)!,
  kurup: ANENHING,
  awal: [1994, 2002, 2010, 2018, 2026, 2034, 2042, 2050, 2058, 2066, 2074, 2082, 2090, 2098, 2106]
}

const KURUP_ASAPON_ANENHING: TaunKurupType[] = [
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
]

export { KURUP_ASAPON_ANENHING }
