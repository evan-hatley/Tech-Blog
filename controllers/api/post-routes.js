const router = require('express').Router();
const {User ,Post, Comment} = require('../../models');


router.get('/', (req, res) => {
    Post.findAll

});

router.get('/:id', (req, res) => {
    Post.findOne

});

router.post('/', withAuth, (req,res) => {
    Post.create

});

router.put('/:id', withAuth, (req, res) => {



});
