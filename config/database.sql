CREATE DATABASE IF NOT EXISTS sistema_moto;
USE sistema_moto;

CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cpf VARCHAR(14) UNIQUE NOT NULL,
    placa_veiculo VARCHAR(8) NOT NULL,
    kilometragem INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS servicos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT,
    tipo_servico VARCHAR(100) NOT NULL,
    descricao TEXT,
    data_servico DATE NOT NULL,
    valor DECIMAL(10,2) NOT NULL,
    status ENUM('orçamento', 'em_andamento', 'concluido', 'cancelado') DEFAULT 'orçamento',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);

-- Inserir usuário admin padrão (senha: admin123)
INSERT INTO usuarios (email, senha) VALUES ('admin@admin.com', '$2a$10$HKveMsPlst41Ie2LQgpijO691lUtZ8cLfcliAO1DD9TtZxEpaEoJe');