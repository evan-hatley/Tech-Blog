const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    try {
      const comments = Comment.findAll( {   
      });
      res.status(200).json(comments);
    } catch (err) {
        res.status(500).json(err);
    }
    });

    router.post('/', withAuth, (req, res) => {
        try {
        const comments =  Comment.create(req.body);
        res.status(200).json(comments);
        } catch (err) {
          res.status(400).json(err);
        }
      });

      router.delete('/:id', withAuth, (req, res) => {
        try {
          const comments = Comment.destroy({
            where: { id: req.params.id }
          });
          res.status(200).json(comments);
        } catch (err) {
          res.status(500).json(err);
        }
      });