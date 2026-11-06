const express = require('express');

const app = express();

app.use(express.json());

// Rota inicial
app.get('/', (req, res) => {
    res.send('Minha API está funcionando!');
});

// Listar usuários
app.get('/usuarios', (req, res) => {
    res.json([
        { id: 1, nome: 'João' },
        { id: 2, nome: 'Maria' }
    ]);
});

// Criar usuário
app.post('/usuarios', (req, res) => {
    const usuario = req.body;

    res.status(201).json({
        mensagem: 'Usuário criado!',
        usuario: usuario
    });
});

// Iniciar servidor
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});