const express = require('express')
const router = express.Router

const post_controller = require('@/controllers/admin')

router.post('/post', post_controller)


module.exports = router
