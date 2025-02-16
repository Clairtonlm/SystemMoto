const express = require('express');
const router = express.Router();
const db = require('../config/database');

// Middleware para verificar autenticação
const isAuthenticated = (req, res, next) => {
    if (req.session.loggedin) {
        return next();
    }
    res.redirect('/');
};

// Listar clientes
router.get('/clientes', isAuthenticated, async (req, res) => {
    try {
        const [clientes] = await db.query('SELECT * FROM clientes ORDER BY nome');
        res.render('clientes/index', { 
            clientes,
            username: req.session.username,
            error: null
        });
    } catch (error) {
        console.error('Erro ao listar clientes:', error);
        res.render('clientes/index', { 
            clientes: [],
            error: 'Erro ao carregar clientes',
            username: req.session.username
        });
    }
});

// Adicionar cliente
router.post('/clientes', isAuthenticated, async (req, res) => {
    const { nome, cpf, placa_veiculo, kilometragem } = req.body;
    try {
        console.log('Dados recebidos:', req.body); // Debug

        const [result] = await db.query(
            'INSERT INTO clientes (nome, cpf, placa_veiculo, kilometragem) VALUES (?, ?, ?, ?)',
            [nome, cpf || null, placa_veiculo || null, kilometragem || 0]
        );

        console.log('Cliente cadastrado:', result); // Debug
        res.redirect('/clientes');
    } catch (error) {
        console.error('Erro ao cadastrar cliente:', error);
        const [clientes] = await db.query('SELECT * FROM clientes ORDER BY nome');
        res.render('clientes/index', {
            clientes,
            error: 'Erro ao cadastrar cliente: ' + error.message,
            username: req.session.username
        });
    }
});

// Atualizar cliente
router.put('/clientes/:id', isAuthenticated, async (req, res) => {
    const { nome, cpf, placa_veiculo, kilometragem } = req.body;
    const { id } = req.params;
    try {
        await db.query(
            'UPDATE clientes SET nome = ?, cpf = ?, placa_veiculo = ?, kilometragem = ? WHERE id = ?',
            [nome, cpf, placa_veiculo, kilometragem, id]
        );
        res.json({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false });
    }
});

// Excluir cliente
router.delete('/clientes/:id', isAuthenticated, async (req, res) => {
    const { id } = req.params;
    try {
        await db.query('DELETE FROM clientes WHERE id = ?', [id]);
        res.json({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false });
    }
});

// Buscar cliente
router.get('/clientes/buscar', isAuthenticated, async (req, res) => {
    const { termo } = req.query;
    try {
        const [clientes] = await db.query(
            'SELECT * FROM clientes WHERE nome LIKE ? OR placa_veiculo LIKE ?',
            [`%${termo}%`, `%${termo}%`]
        );
        res.json(clientes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro na busca' });
    }
});

router.get('/clientes', (req, res) => {
    res.render('clientes');
});

module.exports = router;