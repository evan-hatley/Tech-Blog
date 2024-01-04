const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
    try {
      const posts = Post.findAll( {    
      });
      res.status(200).json(posts);
    } catch (err) {
        res.status(500).json(err);
    }
    });

    router.post('/', withAuth, (req, res) => {
        try {
        const posts =  Post.create(req.body);
        res.status(200).json(posts);
        } catch (err) {
          res.status(400).json(err);
        }
      });

module.exports = router;