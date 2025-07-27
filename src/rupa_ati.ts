/**
 * Rupa Ati
 * 📁 rupa_ati.ts
 */
import * as Mukarom from "./rumus_apalan_awal_bulan_mukarom_abadi.ts";
import * as Sapar from "./rumus_apalan_awal_bulan_sapar_abadi.ts";
import * as Robiulawal from "./rumus_apalan_awal_bulan_robiulawal_abadi.ts";
import * as Robiulakir from "./rumus_apalan_awal_bulan_robiulakir_abadi.ts";
import * as Jumadilawal from "./rumus_apalan_awal_bulan_jumadilawal_abadi.ts";
import * as Jumadilakir from "./rumus_apalan_awal_bulan_jumadilakir_abadi.ts";
import * as Rojab from "./rumus_apalan_awal_bulan_rojab_abadi.ts";
import * as Sakban from "./rumus_apalan_awal_bulan_sakban_abadi.ts";
import * as Romadon from "./rumus_apalan_awal_bulan_romadon_abadi.ts";
import * as Sawal from "./rumus_apalan_awal_bulan_sawal_abadi.ts";
import * as Dulkodah from "./rumus_apalan_awal_bulan_dulkodah_abadi.ts";
import * as Dulkijah from "./rumus_apalan_awal_bulan_dulkijah_abadi.ts";

type KWMapType = Map<symbol, Object>;

function _SengkalaMap(): KWMapType {
  return new Map([
    ...Mukarom.RUMUS_APALAN_AWAL_BULAN_MUKAROM_ABADI,
    ...Sapar.RUMUS_APALAN_AWAL_BULAN_SAPAR_ABADI,
    ...Robiulawal.RUMUS_APALAN_AWAL_BULAN_ROBIULAWAL_ABADI,
    ...Robiulakir.RUMUS_APALAN_AWAL_BULAN_ROBIULAKIR_ABADI,
    ...Jumadilawal.RUMUS_APALAN_AWAL_BULAN_JUMADILAWAL_ABADI,
    ...Jumadilakir.RUMUS_APALAN_AWAL_BULAN_JUMADILAKIR_ABADI,
    ...Rojab.RUMUS_APALAN_AWAL_BULAN_ROJAB_ABADI,
    ...Sakban.RUMUS_APALAN_AWAL_BULAN_SAKBAN_ABADI,
    ...Romadon.RUMUS_APALAN_AWAL_BULAN_ROMADON_ABADI,
    ...Sawal.RUMUS_APALAN_AWAL_BULAN_SAWAL_ABADI,
    ...Dulkodah.RUMUS_APALAN_AWAL_BULAN_DULKODAH_ABADI,
    ...Dulkijah.RUMUS_APALAN_AWAL_BULAN_DULKIJAH_ABADI,
  ]);
}

const SengkalaMap = _SengkalaMap();

export { SengkalaMap };
