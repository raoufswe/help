const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3000
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const jwt = require('express-jwt')
const dotenv = require('dotenv')

dotenv.config()

app.use(express.static('uploads'))
mongoose
  .connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((info) => {
    console.log('mongo connected')
  })
  .catch((err) => {
    console.log('mongo connection error', err.message)
  })

app.set('secretKey', process.env.TOKEN_SECRET)
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors())
app.use(
  jwt({
    secret: process.env.TOKEN_SECRET,
    getToken: function fromHeaderOrQuerystring(req) {
      if (
        req.headers.authorization &&
        req.headers.authorization.split(' ')[0] === 'Bearer'
      ) {
        return req.headers.authorization.split(' ')[1]
      } else if (req.query && req.query.token) {
        return req.query.token
      }
      return null
    },
  }).unless({
    path: [
      '/',
      '/user/auth',
      '/user/register',
      '/user/google',
      '/user/facebook',
    ],
  }),
  function (err, req, res, next) {
    if (err) {
      res.sendStatus(401)
    }
  },
)

app.get('/', (req, res) => res.send('Hello World!'))
app.use('/user', require('./routes/user.route'))
app.use('/journals', require('./routes/journal.route'))
app.use('/grateful', require('./routes/grateful.route'))
app.use('/tasks', require('./routes/task.route'))
app.use('/feeling', require('./routes/feeling.route'))
app.use('/notifications', require('./routes/notifications.route'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
