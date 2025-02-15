const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const db = require('../config/database');

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const [users] = await db.query('SELECT * FROM usuarios WHERE email = ?', [email]);
        
        if (users.length === 0) {
            return res.redirect('/?error=1');
        }

        const user = users[0];
        const validPassword = await bcrypt.compare(password, user.senha);

        if (!validPassword) {
            return res.redirect('/?error=1');
        }

        req.session.loggedin = true;
        req.session.userId = user.id;
        res.redirect('/dashboard');
    } catch (error) {
        console.error(error);
        res.redirect('/?error=2');
    }
});

router.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

module.exports = router;