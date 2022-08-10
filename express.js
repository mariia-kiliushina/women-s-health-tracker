const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 8081
const periods = require('./periodsData')

const favicon = require('express-favicon')
express.use(favicon(__dirname + '/public/flower.png'))

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/api/periods', (req, res) => res.send(periods))
  .listen(PORT, () => console.log(`Listening on ${PORT}`))
