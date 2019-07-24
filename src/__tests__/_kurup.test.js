/**
 * Testing kurup.js
 */
import * as Kurup from '../kurup.js'

const SAMPLE_ASAPON = 'alip selasa pon'
const SAMPLE_ANENHING = 'alip senen pahing'

describe("Kurup Testing", () => {
  test('Kurup ASAPON', () => {
    expect(`${Kurup.ASAPON.taun} ${Kurup.ASAPON.dinten.dino} ${Kurup.ASAPON.pasaran.pasaran}`).toBe(SAMPLE_ASAPON)
  })

  test('Kurup ANENHING', () => {
    expect(`${Kurup.ANENHING.taun} ${Kurup.ANENHING.dinten.dino} ${Kurup.ANENHING.pasaran.pasaran}`).toBe(SAMPLE_ANENHING)
  })
})