/**
 * Test Server
 */
import express from 'express'
const app = express()
const port = 3113

// testing dir (future: make temp in os dir.)
app.use(express.static('examples'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`test server listening at http://localhost:${port}`)
})
