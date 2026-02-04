🚀 TechFocus – Backend API
Backend de alto desempenho e escalável para a plataforma TechFocus. Esta API RESTful gerencia o ecossistema de dados, autenticação de usuários e regras de negócio, utilizando tecnologias de ponta para garantir segurança e estabilidade.

🧠 Arquitetura e Design
A API foi projetada seguindo padrões de Arquitetura Limpa (Clean Architecture) e separação rigorosa de responsabilidades. O uso de TypeScript garante contratos de dados consistentes em toda a aplicação, reduzindo erros em tempo de execução e facilitando a manutenção.

🔐 Autenticação e Segurança
O sistema implementa uma camada de segurança robusta baseada nos principais padrões da indústria:

🔑 Autenticação Stateless: Utilização de JSON Web Tokens (JWT) para gestão de sessões segura e eficiente.

🔒 Criptografia de Dados: Implementação de Bcrypt para hashing de senhas, garantindo que dados sensíveis nunca sejam expostos.

🛡️ Política de CORS: Configuração avançada de Cross-Origin Resource Sharing para integração segura entre o ecossistema Vercel (Frontend) e Render (Backend).

✅ Integridade com TypeScript: Definição de interfaces e tipos personalizados para todos os modelos de dados e respostas da API.

🛠️ Stack Tecnológica
Linguagem: TypeScript

Runtime: Node.js

Framework: Express.js

Persistência: MongoDB Atlas (NoSQL)

ODM: Mongoose

Segurança: JWT & Bcrypt

Gestão de Ambiente: Dotenv

Build & Tooling: Ts-node-dev, Rimraf

🛰️ Principais Funcionalidades
Sistema de Auth: Registro e login de usuários com validação de credenciais em tempo real.

Persistência em Nuvem: Integração total com cluster MongoDB para alta disponibilidade.

Middleware de Proteção: Filtros de segurança que validam tokens de acesso em rotas restritas.

Tratamento de Erros: Sistema centralizado para respostas HTTP padronizadas.

🚀 Instalação e Execução
Clone este repositório.

Instale as dependências: npm install.

Configure o arquivo .env com suas credenciais (MONGO_URI, JWT_SECRET, PORT).

Realize o build do projeto: npm run build.

Inicie o servidor em produção: npm start.
