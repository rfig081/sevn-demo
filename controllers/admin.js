const Post = require('@/models/post');

exports.postAddPost = (req, res, next) => {
  const author = req.body.author;
  const title = req.body.title;
  const thumbnail = req.body.thumbnail;
  const content = req.body.content;
  const previewText = req.body.previewText;
  const updatedDate = req.body.updatedDate;

  Post.create({
    author: author,
    title: title,
    thumbnail: thumbnail,
    content: content,
    previewText: previewText,
    updatedDate: updatedDate
  })
}
