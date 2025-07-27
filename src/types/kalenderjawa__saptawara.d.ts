declare module '@kalenderjawa/saptawara' {
  export interface DintenType {
    dino: string;
    urutan: number;
    bobot: number;
  }

  export const DINTEN: Map<string, DintenType>;
  export const DINTEN_ARR: DintenType[];
  
  // Day constants (keys for DINTEN Map)
  export const _AKAD: string;
  export const _SENEN: string;
  export const _SELASA: string;
  export const _REBO: string;
  export const _KEMIS: string;
  export const _JEMAH: string;
  export const _SEBTU: string;
}