const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Post = sequelize.define('post', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  author: {
    type: Sequelize.STRING,
    allowNull: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: true
  },
  thumbnail: {
    type: Sequelize.STRING,
    allowNull: true
  },
  content: {
    type: Sequelize.STRING,
    allowNull: true
  },
  previewText: {
    type: Sequelize.STRING,
    allowNull: true
  },
  updatedDate: {
    type: Sequelize.DATE,
    allowNull: false
  }
},

{timestamps: false}
);

module.exports = Post;
