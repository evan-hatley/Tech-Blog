const router = require('express').Router();
const {User ,Post, Comment} = require('../../models');
const withAuth = require('../../utils/auth');


router.get('/', async (req, res) => {
    try {
      const posts = await Post.findAll( {    
      });
      res.status(200).json(posts);
    } catch (err) {
        res.status(500).json(err);
    }
    });

    router.get('/:id', async (req, res) => {
        try {
          const posts = await Post.findByPk(req.params.id, {
          });
          res.status(200).json(posts);
        } catch (err) {
          res.status(500).json(err);
        }
      });

      router.post('/', async (req, res) => {
        try {
        const posts = await Post.create(req.body);
        res.status(200).json(posts);
        } catch (err) {
          res.status(400).json(err);
        }
      });

      router.put('/:id', async (req, res) => {
        try {
          const posts = await Post.update(req.body, {
            where: { id: req.params.id }
          });
          res.status(200).json(posts);
        } catch (err) {
          res.status(500).json(err);
        }
      });

router.delete('/:id', async (req, res) => {
    try {
      const posts = await Post.destroy({
        where: { id: req.params.id }
      });
      res.status(200).json(posts);
    } catch (err) {
      res.status(500).json(err);
    }
  });