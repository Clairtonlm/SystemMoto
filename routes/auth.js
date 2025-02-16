const express = require('express');
const router = express.Router();

// Rota de login simplificada temporariamente
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    
    // Autenticação básica temporária
    if (username === 'admin' && password === 'admin123') {
        req.session.loggedin = true;
        req.session.username = username;
        res.redirect('/dashboard');
    } else {
        res.render('login', { 
            error: '1',
            layout: false 
        });
    }
});

router.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error('Erro ao fazer logout:', err);
        }
        res.redirect('/');
    });
});

module.exports = router;