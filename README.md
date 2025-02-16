# Sistema de Gerenciamento de Motocicletas

## 📝 Descrição
Sistema web para gerenciamento de serviços e clientes de oficina de motocicletas, desenvolvido com Node.js, Express e MySQL.

## 🚀 Tecnologias Utilizadas
- Node.js
- Express.js
- MySQL
- EJS (Template Engine)
- Bootstrap 5
- Express Session

## 💻 Pré-requisitos
- Node.js (versão 14 ou superior)
- MySQL Server
- NPM ou Yarn

## 🔧 Instalação

1. Clone o repositório
```bash
git clone https://github.com/Clairtonlm/SystemMoto.git
cd SystemMoto
```

2. Instale as dependências
```bash
npm install
```

3. Configure o banco de dados
- Crie um banco de dados MySQL
- Execute o script SQL localizado em `/database/schema.sql`
- Configure as credenciais do banco em `/config/database.js`

4. Inicie o servidor
```bash
npm start
```

## 🔑 Credenciais Padrão
- Usuário: admin
- Senha: admin123

## 🌟 Funcionalidades
- Login e autenticação
- Dashboard com métricas
- Gerenciamento de clientes
- Controle de serviços
- Registro de quilometragem

## 📁 Estrutura do Projeto
```
SystemMoto/
├── config/          # Configurações do sistema
├── database/        # Scripts SQL
├── public/         # Arquivos estáticos
├── routes/         # Rotas da aplicação
├── views/          # Templates EJS
└── app.js          # Arquivo principal
```

## 👥 Autores
- [@Clairtonlm](https://github.com/Clairtonlm)

## 📄 Licença
Este projeto está sob a licença ISC.
