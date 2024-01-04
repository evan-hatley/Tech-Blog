const router = require('express').Router();
const {User, Post, Comment} = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    Comment.findAll

});

router.post('/', withAuth, (req, res) => {
    Comment.create

});

router.delete('/:id', withAuth, (req, res) => {
    Comment.destroy


})