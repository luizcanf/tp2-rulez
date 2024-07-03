const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.get('/', (request, response) => {
    let teste = Math.PI
    response.send(`O valor do PI é ${teste}`)
})
app.listen(8080)