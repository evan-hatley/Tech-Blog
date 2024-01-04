const router = require('express').Router();
const { User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    User.findAll


})

router.get('/:id', (req, res) => {
    User.findOne

})

router.post('/', (req, res) => {
    User.create

})

router.post('/login', (req, res) => {



})

router.post('/logout', (req, res) => {


})


module.exports = router;