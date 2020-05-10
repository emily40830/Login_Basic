const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const LoginAuth = require('./loginAuth')

const app = express()
const port = 3000

app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})


app.post('/', (req, res) => {
  const message = req.body
  const result = LoginAuth(message)

  switch (result) {
    case "empty":
      res.render('index', { input: req.body, message: true })
      break;
    case "error":
      res.render('index', { input: req.body, error: true })
      break;
    default:
      res.render('login', { name: result })
  }


})


app.listen(port, () => {
  console.log(`runnung on localhost:${port}`)
})


// app.post('/', (req, res) => {
//   const input = req.body
//   const member = Login(req.body)
//   if (member) {
//     res.render('view', { member, input })
//   }
//   else {
//     res.render('index', { member: !member, input })
//   }
// })