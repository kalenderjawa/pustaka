/**
 * @flow
 *
 * Rupa Ati
 * 📁 rupa_ati.js
 */

type KWMapType = Map<Symbol, Object>

import * as Romadon from './rumus_apalan_awal_bulan_romadon_abadi.js'
import * as Sawal from './rumus_apalan_awal_bulan_sawal_abadi'
import * as Dulkodah from './rumus_apalan_awal_bulan_dulkodah_abadi.js'
import * as Dulkijah from './rumus_apalan_awal_bulan_dulkijah_abadi.js'
import * as Mukarom from './rumus_apalan_awal_bulan_mukarom_abadi.js'

function _SengkalaMap(): KWMapType {
  return new Map([
    ...Romadon.RUMUS_APALAN_AWAL_BULAN_ROMADON_ABADI, 
    ...Sawal.RUMUS_APALAN_AWAL_BULAN_SAWAL_ABADI,
    ...Dulkodah.RUMUS_APALAN_AWAL_BULAN_DULKODAH_ABADI,
    ...Dulkijah.RUMUS_APALAN_AWAL_BULAN_DULKIJAH_ABADI,
    ...Mukarom.RUMUS_APALAN_AWAL_BULAN_MUKAROM_ABADI
  ])
}

const SengkalaMap = _SengkalaMap()

export { SengkalaMap }
