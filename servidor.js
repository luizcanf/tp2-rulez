const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.get('/', (request, response) => {
    let teste = Math.PI
    response.send(`O valor do PI é ${teste}`)
})
app.get('/index', (request, response) => {
    response.render('conta')
})
app.get('/tudonofront', (request, response) => {
    response.render('rayane')
})
const PORTA = 8000
app.listen(PORTA, () => {
    console.log(`Servidor rodando em http://localhost:${PORTA}`);
})