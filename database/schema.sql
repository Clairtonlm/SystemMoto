CREATE DATABASE IF NOT EXISTS system_moto;
USE system_moto;

CREATE TABLE IF NOT EXISTS clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cpf VARCHAR(14) UNIQUE,
    placa_veiculo VARCHAR(10),
    kilometragem INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
