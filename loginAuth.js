//Data
const users = [
  {
    firstName: 'Tony',
    email: 'tony@stark.com',
    password: 'iamironman'
  },
  {
    firstName: 'Steve',
    email: 'captain@hotmail.com',
    password: 'icandothisallday'
  },
  {
    firstName: 'Peter',
    email: 'peter@parker.com',
    password: 'enajyram'
  },
  {
    firstName: 'Natasha',
    email: 'natasha@gamil.com',
    password: '*parol#@$!'
  },
  {
    firstName: 'Nick',
    email: 'nick@shield.com',
    password: 'password'
  }
]


function Login(req) {
  const reqEmail = req.email
  const reqPassword = req.password

  // 1. find the email is in the userList or not
  const indexOfEmail = users.findIndex(user => user.email === reqEmail)
  if (indexOfEmail != -1) {
    // 2. find the password and email will match
    return users[indexOfEmail].password === reqPassword ? users[indexOfEmail].firstName : "error"
  } else {
    return "empty"
  }

}

module.exports = Login