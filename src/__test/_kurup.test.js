import Kurup from '../kurup.mjs'

const SAMPLE_ASAPON = 'alip selasa pon'
const SAMPLE_ANENHING = 'alip senin pahing'

describe('TEST KURUP', () => {
  test('ASAPON', () => {
    expect(Kurup.ASAPON).toBe(SAMPLE_ASAPON)
  })

  test('ANENHING', () => {
    expect(Kurup.ANENHING).toBe(SAMPLE_ANENHING)
  })
})
