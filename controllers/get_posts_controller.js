const Post = require('../models/post');

var getPosts = (req, res) => {
  Post.findAll()
  .then(posts => {
    res.send(posts)
  })
}

var getPost = (req, res) => {
  // console.log(req.query)
  const postID = parseInt(req.query.id)
  Post.findAll({
    where: {
      id: postID
    }
  })
  .then(post => {
    // console.log(post)
    res.send(post)
  })
}


module.exports = {
  getPosts: getPosts,
  getPost: getPost
}
