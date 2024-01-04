const router = require('express').Router();
const { User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    try {
      const users = User.findAll( {
      });
      res.status(200).json(users);
    } catch (err) {
        res.status(500).json(err);
    }
    });

    router.get('/:id', (req, res) => {
        try {
          const users = User.findByPk(req.params.id, {
          });
          res.status(200).json(users);
        } catch (err) {
          res.status(500).json(err);
        }
      });

router.post('/', (req, res) => {
    try {
      const userData = User.create(req.body);
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
  
        res.status(200).json(userData);
      });
    } catch (err) {
      res.status(400).json(err);
    }
  });

router.post('/login', (req, res) => {
    try {
      const userData = User.findOne({ where: { email: req.body.email } });
  
      if (!userData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      const validPassword = userData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        
        res.json({ user: userData, message: 'You are now logged in!' });
      });
  
    } catch (err) {
      res.status(400).json(err);
    }
  });


router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});


module.exports = router;