import * as Kurup from '../kurup.mjs'

const SAMPLE_ASAPON = 'alip selasa pon'
const SAMPLE_ANENHING = 'alip senen pahing'

describe('TEST KURUP', () => {
  test('ASAPON', () => {
    expect(`${Kurup.ASAPON.taun} ${Kurup.ASAPON.dinten} ${Kurup.ASAPON.pasaran}`).toBe(SAMPLE_ASAPON)
  })

  test('ANENHING', () => {
    expect(`${Kurup.ANENHING.taun} ${Kurup.ANENHING.dinten} ${Kurup.ANENHING.pasaran}`).toBe(SAMPLE_ANENHING)
  })
})
