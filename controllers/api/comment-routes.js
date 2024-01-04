const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {
      const comments = await Comment.findAll( {   
      });
      res.status(200).json(comments);
    } catch (err) {
        res.status(500).json(err);
    }
    });

    router.get('/:id', async (req, res) => {
        try {
          const comments = await Comment.findByPk(req.params.id, {
          });
          res.status(200).json(comments);
        } catch (err) {
          res.status(500).json(err);
        }
      });

      router.delete('/:id', async (req, res) => {
        try {
          const comments = await Comment.destroy({
            where: { id: req.params.id }
          });
          res.status(200).json(comments);
        } catch (err) {
          res.status(500).json(err);
        }
      });