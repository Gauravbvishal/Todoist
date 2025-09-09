const express=require('express');
const router=express.Router();

const authLogin=require('../controllers/auth/login')

router.get('/login',authLogin.getLogin)

module.exports = router;