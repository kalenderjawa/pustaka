// @flow
// Custom Type
// 📁 type.js

type PasaranType = {| pasaran: string, neptu: number, urutan: number |}
type DintenType = {| dino: string, urutan: number |}
type WulanType = {| wulan: string, celukan: string, urutan: number, cacah: Array<number> |}
type TaunType = {| taun: string, neptu: number, urutan: number, cacah: number |}
type KurupType = {| taun: string, dinten: DintenType, pasaran: PasaranType |}
type RumusType = {| wulan: WulanType | void, dino: number, pasaran: number |}
type WulanTaunType = {| wulan: WulanType | void, taun: TaunType | void, rumus: RumusType |}
type WulanTaunQueryType = {| wulan: string, taun: number |}
type WulanTaunQueryKeyType = {| query: WulanTaunQueryType |}
type RumusSasiTaunType = WulanTaunQueryKeyType | WulanTaunType

type TaunReturnType = TaunType | void
type SasiReturnType = WulanType | void
type TaunKurupType = {| taun: TaunType, kurup: KurupType, awal: Array<number>|}
type SasiKeyType = {| sasi: string, taun: number |}

export type {
  PasaranType,
  DintenType,
  WulanType,
  TaunType,
  KurupType,
  RumusType,
  SasiKeyType,
  WulanTaunType,
  WulanTaunQueryType,
  RumusSasiTaunType,
  TaunReturnType,
  SasiReturnType,
  TaunKurupType
}
