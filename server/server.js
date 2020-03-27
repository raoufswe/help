const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
let jwt = require('express-jwt');

// let upload = multer({ dest: 'uploads/' })
app.use(express.static('uploads'));
mongoose.connect("mongodb+srv://dbadmin:fuckRaouf@cluster0-jyz9i.mongodb.net/helpDB?retryWrites=true&w=majority",
  {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false})
  .then((info) => {
    console.log("mongo connected")
  }).catch((err) => {
  console.log("mongo connection error", err.message)
});

app.set('secretKey', 'server');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
// app.use(jwt({
//   secret: 'server',
//   getToken: function fromHeaderOrQuerystring(req) {
//     if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
//       return req.headers.authorization.split(' ')[1];
//     } else if (req.query && req.query.token) {
//       return req.query.token;
//     }
//     return null;
//   }
// }).unless({path: ['/', '/user/auth', '/user/register']}), function (err, req, res, next) {
//   if (err) {
//     res.sendStatus(401);
//   }
// });
app.get('/', (req, res) => res.send('Hello World!'));
app.use('/user', require('./routes/user'));
app.use('/journals', require('./routes/journal'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
