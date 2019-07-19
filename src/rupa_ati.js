/**
 * @flow
 *
 * Rupa Ati
 * 📁 rupa_ati.js
 */

type KWMap = Map<Symbol, Object>

import * as Romadon from './rumus_apalan_awal_taun_abadi.js'
import * as Sawal from './rumus_apalan_awal_taun_sawal_abadi'

function mergeMap(mapArray: Array<KWMap>): KWMap {
  return new Map(function* (...mapArray) {
    yield* mapArray
  }())
}


export { mergeMap }