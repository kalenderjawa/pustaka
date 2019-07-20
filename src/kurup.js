/**
 * @flow
 * 
 * Arane Kurup
 * 📁 kurup.js
 */

import * as P from './pasaran.js'
import * as D from './dinten.js'

import type { KurupType } from './type.js'

/**
 * @constant
 * @type {KurupType} 
 * 
 */
const ASAPON = { taun: 'alip', dinten: D.DINTEN.get(D._SELASA), pasaran: P.PASARAN.get(P._PON) }

/**
 * @constant
 * @type {KurupType} 
 */
const ANENHING = { taun: 'alip', dinten: D.DINTEN.get(D._SENEN), pasaran: P.PASARAN.get(P._PAHING) }

export { ASAPON, ANENHING }
