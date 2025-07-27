// TypeScript Types
// 📁 types.ts

export interface PasaranType {
  pasaran: string;
  neptu: number;
  urutan: number;
}

export interface DintenType {
  dino: string;
  urutan: number;
}

export interface WulanType {
  wulan: string;
  celukan: string;
  urutan: number;
  cacah: number[];
}

export interface TaunType {
  taun: string;
  neptu: number;
  urutan: number;
  cacah: number;
}

export interface KurupType {
  taun: string;
  dinten: DintenType;
  pasaran: PasaranType;
}

export interface RumusType {
  wulan: WulanType | undefined;
  dino: number;
  pasaran: number;
}

export interface WulanTaunType {
  wulan: WulanType | undefined;
  taun: TaunType | undefined;
  rumus: RumusType;
}

export interface WulanTaunQueryType {
  wulan: string;
  taun: number;
}

export interface WulanTaunQueryKeyType {
  query: WulanTaunQueryType;
}

export type RumusSasiTaunType = WulanTaunQueryKeyType | WulanTaunType;

export type TaunReturnType = TaunType | undefined;
export type SasiReturnType = WulanType | undefined;

export interface TaunKurupType {
  taun: TaunType;
  kurup: KurupType;
  awal: number[];
}

export interface SasiKeyType {
  sasi: string;
  taun: number;
}

export interface DateType {
  yyyy: number;
  mm: number;
  dd: number;
}
