/**
 * @flow
 *
 * Rupa Ati
 * 📁 rupa_ati.js
 */

type KWMapType = Map<Symbol, Object>

import * as Romadon from './rumus_apalan_awal_taun_romadon_abadi.js'
import * as Sawal from './rumus_apalan_awal_taun_sawal_abadi'
import * as Dulkodah from './rumus_apalan_awal_taun_dulkodah_abadi.js'
import * as Dulkijah from './rumus_apalan_awal_taun_dulkijah_abadi.js'

function _SengkalaMap(): KWMapType {
  return new Map([
    ...Romadon.RUMUS_APALAN_AWAL_TAUN_ROMADON_ABADI, 
    ...Sawal.RUMUS_APALAN_AWAL_TAUN_SAWAL_ABADI,
    ...Dulkodah.RUMUS_APALAN_AWAL_TAUN_DULKODAH_ABADI,
    ...Dulkijah.RUMUS_APALAN_AWAL_TAUN_DULKIJAH_ABADI
  ])
}

const SengkalaMap = _SengkalaMap()

export { SengkalaMap }
