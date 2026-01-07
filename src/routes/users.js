const express = require('express');
const router = express.Router();
const { listUsers, addUser } = require('../services/usersService');
const validateUser = require('../utils/userValidator');

router.post('/', async (req, res) =>{
    const {name, email, password} = req.body;
    const validation = validateUser({name,email,password});
    if(!validation.valid){
        return res.status(400).json({message: validation.message});
    }
    try{
        const passwordHash = password;
        const id = await addUser({ name, email, passwordHash });
        res.status(201).json({id});
    }catch (err){
        if (err.errno === 1062){
            return res.status(400).json({ message: 'User with this email already exists' });
        }
        res.status(err.status || 500).json({message:err.message});
    }
});

router.get('/', async (req, res, next) =>{
    try{
        const {email, page=1, limit=10} = req.query;

        const pageNumber= Number(page);
        const limitNumber= Number(limit);

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (email && !emailRegex.test(email)) {
    return res.status(400).json({
        error: {
            code: 'INVALID_EMAIL',
            message: 'Invalid email format'
        }
    });
}

        if(pageNumber<1 || limitNumber<1){
            return res.status(400).json({
                error:{
                    code: 'INVALID_PAGINATION',
                    message: 'Page and limit must be positive numbers'
                }
            });
        }
        const offset = (pageNumber -1)* limitNumber;

        const users = await listUsers({
            email,
            limit: limitNumber,
            offset
        });
        res.json({
            data: users,
            pagination:{
                page:   pageNumber,
                limit: limitNumber
            }
        });
    }catch (err){
        next(err);
    }
});

module.exports = router;