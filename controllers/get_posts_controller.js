const Post = require('../models/post');

var getPosts = (req, res) => {
  Post.findAll()
  .then(posts => {
    res.send(posts)
  })
}

module.exports = {
  getPosts: getPosts
}
