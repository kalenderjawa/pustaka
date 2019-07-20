/**
 * @flow
 *
 * Rupa Ati
 * 📁 rupa_ati.js
 */

type KWMapType = Map<Symbol, Object>

import * as Romadon from './rumus_apalan_awal_taun_romadon_abadi.js'
import * as Sawal from './rumus_apalan_awal_taun_sawal_abadi'

function SengkalaMap(): KWMapType {
  return new Map([...Romadon.RUMUS_APALAN_AWAL_TAUN_ROMADON_ABADI, ...Sawal.RUMUS_APALAN_AWAL_TAUN_SAWAL_ABADI])
}

export { SengkalaMap }
