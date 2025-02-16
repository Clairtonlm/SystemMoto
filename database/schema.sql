CREATE DATABASE IF NOT EXISTS system_moto;
USE system_moto;

CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Inserir usuário padrão (senha: admin123)
INSERT INTO usuarios (nome, email, senha) VALUES 
('Administrador', 'admin@admin.com', '$2a$10$N.AUHqlดB3QX4jU5CคVt.OE8KGZ9T1T5J3Y5Q2Q');

-- Tabela de clientes
CREATE TABLE IF NOT EXISTS clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cpf VARCHAR(14) UNIQUE,
    placa_veiculo VARCHAR(10),
    kilometragem INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
