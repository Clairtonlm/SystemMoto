const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const authRoutes = require('./routes/auth');
const clientesRoutes = require('./routes/clientes');

const app = express();

// Configurações
app.use(session({
    secret: 'motoSystem2024',
    resave: false,
    saveUninitialized: true
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware para verificar autenticação
const isAuthenticated = (req, res, next) => {
    if (req.session.loggedin) {
        return next();
    }
    res.redirect('/');
};

// Rotas
app.get('/', (req, res) => {
    if (req.session.loggedin) {
        res.redirect('/dashboard');
    } else {
        res.render('login');
    }
});

app.get('/dashboard', isAuthenticated, (req, res) => {
    res.render('dashboard');
});

// Rotas de autenticação e clientes
app.use(authRoutes);
app.use(clientesRoutes);

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});