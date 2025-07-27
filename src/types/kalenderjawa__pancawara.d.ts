declare module '@kalenderjawa/pancawara' {
  export interface PasaranType {
    pasaran: string;
    neptu: number;
    urutan: number;
  }

  export const PASARAN: Map<string, PasaranType>;
  export const PASARAN_ARR: PasaranType[];
  
  // Pasaran constants (keys for PASARAN Map)
  export const _LEGI: string;
  export const _PAHING: string;
  export const _PON: string;
  export const _WAGE: string;
  export const _KLIWON: string;
}