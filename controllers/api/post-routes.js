const router = require('express').Router();
const {User ,Post, Comment} = require('../../models');
const withAuth = require('../../utils/auth');


router.get('/', (req, res) => {
    try {
      const posts = Post.findAll( {    
      });
      res.status(200).json(posts);
    } catch (err) {
        res.status(500).json(err);
    }
    });

    router.get('/:id', (req, res) => {
        try {
          const posts = Post.findByPk(req.params.id, {
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

      router.put('/:id', withAuth, (req, res) => {
        try {
          const posts = Post.update(req.body, {
            where: { id: req.params.id }
          });
          res.status(200).json(posts);
        } catch (err) {
          res.status(500).json(err);
        }
      });

router.delete('/:id', withAuth, (req, res) => {
    try {
      const posts = Post.destroy({
        where: { id: req.params.id }
      });
      res.status(200).json(posts);
    } catch (err) {
      res.status(500).json(err);
    }
  });