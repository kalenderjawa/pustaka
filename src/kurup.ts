/**
 * Arane Kurup
 * 📁 kurup.ts
 */

import * as P from '@kalenderjawa/pancawara'
import * as D from '@kalenderjawa/saptawara'

import type { KurupType } from './types.js'

/**
 * @constant
 */
const ASAPON: KurupType = { taun: 'alip', dinten: D.DINTEN.get(D._SELASA), pasaran: P.PASARAN.get(P._PON) }

/**
 * @constant
 */
const ANENHING: KurupType = { taun: 'alip', dinten: D.DINTEN.get(D._SENEN), pasaran: P.PASARAN.get(P._PAHING) }

export { ASAPON, ANENHING }