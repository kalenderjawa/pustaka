import * as Kurup from '../kurup.mjs'

const SAMPLE_ASAPON = 'alip selasa pon'
const SAMPLE_ANENHING = 'alip senen pahing'

describe('TEST KURUP', () => {
  test('ASAPON', () => {
    expect(`${Kurup.ASAPON.taun} ${Kurup.ASAPON.dinten.dino} ${Kurup.ASAPON.pasaran.pasaran}`).toBe(SAMPLE_ASAPON)
  })

  test('ANENHING', () => {
    expect(`${Kurup.ANENHING.taun} ${Kurup.ANENHING.dinten.dino} ${Kurup.ANENHING.pasaran.pasaran}`).toBe(SAMPLE_ANENHING)
  })
})
