/**
 * ES
 */

import path from 'path'

function exo () {
  let ja = path.join(__dirname)
  console.log(`Hello ${ja}`)
}

module.exports = { exo }
