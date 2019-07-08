/**
 * 📁 kurup.mjs
 * @desc Kurup Konstan
 */

import * as P from './pasaran.mjs'
import * as D from './dinten.mjs'

const ASAPON = { taun: 'alip', dinten: D.DINTEN.get(D._SELASA).dino, pasaran: P.PASARAN.get(P._PON).pasaran }
const ANENHING = { taun: 'alip', dinten: D.DINTEN.get(D._SENEN).dino, pasaran: P.PASARAN.get(P._PAHING).pasaran }

export { ASAPON, ANENHING }
