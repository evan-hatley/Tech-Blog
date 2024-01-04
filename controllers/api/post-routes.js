const router = require('express').Router();
const {User ,Post, Comment} = require('../../models');
const withAuth = require('../../utils/auth');


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

router.delete('/id', withAuth, (req, res) => {

    
})