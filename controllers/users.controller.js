let users = [
    { id: 1, name: 'João', email: 'joao@email.com' },
    { id: 2, name: 'Maria', email: 'maria@email.com' }
];

// Listar usuários
exports.getUsers = (req, res) => {
    res.json(users);
};

// Buscar usuário por ID
exports.getUserById = (req, res) => {
    const user = users.find(
        u => u.id === Number(req.params.id)
    );

    if (!user) {
        return res.status(404).json({
            message: 'Usuário não encontrado'
        });
    }

    res.json(user);
};

// Criar usuário
exports.createUser = (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({
            message: 'Nome e email são obrigatórios'
        });
    }

    const newUser = {
        id: users.length
            ? Math.max(...users.map(u => u.id)) + 1
            : 1,
        name,
        email
    };

    users.push(newUser);

    res.status(201).json(newUser);
};

// Excluir usuário
exports.deleteUser = (req, res) => {
    const id = Number(req.params.id);

    const userExists = users.some(u => u.id === id);

    if (!userExists) {
        return res.status(404).json({
            message: 'Usuário não encontrado'
        });
    }

    users = users.filter(u => u.id !== id);

    res.json({
        message: 'Usuário excluído com sucesso'
    });
};