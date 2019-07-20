// @flow
// Custom Type
// 📁 type.js

type PasaranType = {| pasaran: string, neptu: number, urutan: number |}
type DintenType = {| dino: string, urutan: number |}
type WulanType = {| wulan: string, celukan: string, urutan: number |}
type TaunType = {| taun: string, neptu: number, urutan: number |}

type KurupType = {| taun: string, dinten: DintenType, pasaran: PasaranType |}
type RumusType = {| wulan: WulanType, dino: string, pasaran: number |}


export type { PasaranType, DintenType, WulanType, TaunType, KurupType, RumusType}