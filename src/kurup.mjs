/**
 * Arane Kurup
 * 📁 kurup.mjs
 */

import * as P from './pasaran.mjs'
import * as D from './dinten.mjs'

/**
 * @constant
 * @type {object} 
 * 
 */
const ASAPON = { taun: 'alip', dinten: D.DINTEN.get(D._SELASA), pasaran: P.PASARAN.get(P._PON) }

/**
 * @constant
 * @type {object} 
 */
const ANENHING = { taun: 'alip', dinten: D.DINTEN.get(D._SENEN), pasaran: P.PASARAN.get(P._PAHING) }

export { ASAPON, ANENHING }
