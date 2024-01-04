const router = require('express').Router();
const sequelize = require('../config/connection');
const {User, Post, Comment} = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
    try {
      const posts = Post.findAll( {    
      });
      res.status(200).json(posts);
    } catch (err) {
        res.status(500).json(err);
    }
    });

