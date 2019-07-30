/**
 * @flow
 *
 * Rupa Ati
 * 📁 rupa_ati.js
 */
import * as Mukarom from './rumus_apalan_awal_bulan_mukarom_abadi.js'
import * as Sapar from './rumus_apalan_awal_bulan_sapar_abadi.js'
import * as Robiulawal from './rumus_apalan_awal_bulan_robiulawal_abadi.js'
import * as Robiulakir from './rumus_apalan_awal_bulan_robiulakir_abadi.js'
import * as Jumadilawal from './rumus_apalan_awal_bulan_jumadilawal_abadi.js'

import * as Rojab from './rumus_apalan_awal_bulan_rojab_abadi.js'
import * as Sakban from './rumus_apalan_awal_bulan_sakban_abadi.js'
import * as Romadon from './rumus_apalan_awal_bulan_romadon_abadi.js'
import * as Sawal from './rumus_apalan_awal_bulan_sawal_abadi.js'
import * as Dulkodah from './rumus_apalan_awal_bulan_dulkodah_abadi.js'
import * as Dulkijah from './rumus_apalan_awal_bulan_dulkijah_abadi.js'

type KWMapType = Map<Symbol, Object>

function _SengkalaMap (): KWMapType {
  return new Map([
    ...Romadon.RUMUS_APALAN_AWAL_BULAN_ROMADON_ABADI,
    ...Sawal.RUMUS_APALAN_AWAL_BULAN_SAWAL_ABADI,
    ...Dulkodah.RUMUS_APALAN_AWAL_BULAN_DULKODAH_ABADI,
    ...Dulkijah.RUMUS_APALAN_AWAL_BULAN_DULKIJAH_ABADI,
    ...Mukarom.RUMUS_APALAN_AWAL_BULAN_MUKAROM_ABADI,
    ...Sapar.RUMUS_APALAN_AWAL_BULAN_SAPAR_ABADI,
    ...Rojab.RUMUS_APALAN_AWAL_BULAN_ROJAB_ABADI,
    ...Robiulawal.RUMUS_APALAN_AWAL_BULAN_ROBIULAWAL_ABADI,
    ...Robiulakir.RUMUS_APALAN_AWAL_BULAN_ROBIULAKIR_ABADI,
    ...Sakban.RUMUS_APALAN_AWAL_BULAN_SAKBAN_ABADI,
    ...Jumadilawal.RUMUS_APALAN_AWAL_BULAN_JUMADILAWAL_ABADI
  ])
}

const SengkalaMap = _SengkalaMap()

export { SengkalaMap }
