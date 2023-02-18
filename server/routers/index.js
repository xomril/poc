const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
// get config vars
dotenv.config();

// access config var
process.env.TOKEN_SECRET;

router.get('/', async (req, res) => {
    res.send('hello world')
})

router.get('/login', async (req, res) => {
    // get token from fetch request
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im9tcmkiLCJpYXQiOjE2NzYzNTQ3MTMsImV4cCI6MTY3NjM1NjUxM30.sRXBPojMao6gSB10kel8afodO83cP1dcNwKzbzl8XBQ' //await res.json();

// set token in cookie
document.cookie = `token=${token}`
res.send
})

router.get('/secret',authenticateToken, (req, res) => {
    res.send('OK!!')
})

router.get('/newUser/:user', async (req, res) => {
    const token = generateAccessToken({ username: req.params.user });
    res.json(token);
})

function generateAccessToken(username) {
    return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
}

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        console.log(err)

        if (err) return res.sendStatus(403)

        req.user = user

        next()
    })
}
module.exports = router;