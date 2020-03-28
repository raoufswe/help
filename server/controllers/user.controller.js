const User = require("../schemas/user")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

exports.create = function(req, res) {
  console.log(req.body)
  let user = {
    email: req.body.email,
    password: req.body.password,
    name: req.body.name
  }
  User.create(user)
    .then(User => {
      res.send({ success: true, result: [User], errors: [] })
      console.log("saved to db")
    })
    .catch(err => {
      res.send({ success: false, result: [], errors: [err] })
      console.log(err)
    })
}

exports.readOne = function(req, res, next) {
  if (req.body.email !== "" && req.body.password !== "") {
    User.findOne(
      {
        email: req.body.email
      },
      function(err, userInfo) {
        if (userInfo === null) {
          res.send({ success: false, result: [], errors: [err] })
        } else {
          if (bcrypt.compareSync(req.body.password, userInfo.password)) {
            const token = jwt.sign(
              {
                id: userInfo._id
              },
              req.app.get("secretKey"),
              { expiresIn: "24h" }
            )
            res.json({
              status: "success",
              message: "User Found",
              data: { user: userInfo, token: token }
            })
          } else {
            res.send({ success: false, result: [], errors: [err] })
          }
        }
      }
    )
  } else {
    res.send({ success: false, result: [], errors: [err] })
  }
}
