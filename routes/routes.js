const express = require('express')
const router = express.Router()

const post_controller = require('../controllers/admin_controller')
const get_posts_controller = require('../controllers/get_posts_controller')

router.post('/post', post_controller.postAddPost)
router.get('/show-posts', get_posts_controller.getPosts)
router.get('/show-post', get_posts_controller.getPost)


module.exports = router
