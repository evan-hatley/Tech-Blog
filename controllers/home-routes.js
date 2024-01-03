const router = require('express').Router();
const sequelize = require('../config/connection');
const {User, Post, Comment} = require('../models');

router.get('/', async (req,res) => {
    res.send('homepage')

})