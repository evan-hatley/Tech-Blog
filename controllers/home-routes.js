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

    router.get('/login', (req, res) => {
        if (req.session.logged_in) {
          res.redirect('/dashboard');
          return;
        }

        res.render('login');
    });

module.exports = router;