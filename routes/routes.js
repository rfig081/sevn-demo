const post_controller = require('@/controllers/admin')

module.exports = app => {
    app.use('/post', post_controller)
}
