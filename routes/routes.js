const express = require('express')
const router = express.Router()

const post_controller = require('../controllers/admin_controller')
const get_posts__controller = require('../controllers/get_posts_controller')

router.post('/post', post_controller.postAddPost)
router.get('/show-posts', get_posts__controller.getPosts)


module.exports = router
