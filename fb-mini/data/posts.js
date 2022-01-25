const casual = require('casual')
const userData = require('./users') // need this because some id relate to the user table

casual.define('post',(user1Id) => ({ // need to use the {} because input two values
    id: casual.uuid,
    user1: user1Id,
}))

const userPost = []

for (let i = 0; i < 20; ++i) {
  userPost.push(casual.post)
}

module.exports = userPost
