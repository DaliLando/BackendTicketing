const express = require('express');
const { getProfile, updateProfile, getAllUsers } = require('../handlers/user');
const { isAuth } = require('../middlewares/isAuth');
const {isAdmin} = require ("../middlewares/isAdmin");


let userRouter = express.Router();

userRouter.get('/profile', isAuth, getProfile);
userRouter.put('/profile', isAuth, updateProfile);
userRouter.get('/manage',isAdmin,getAllUsers)

module.exports = userRouter;