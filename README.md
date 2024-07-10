![alt text](https://github.com/DiegoWebwork/estrutura-de-dados/blob/main/universidade%20de%20vassouras%20Vertical.png)

# Curso: Engenharia de Software
# Aluno: Diego Rios dos Santos (202010774)
# Disciplina: Laboratório de Programação de Aplicativos Nativos 8º Periodo
# Professor: Fabricio Dias


# ProjetoL

ProjetoL é uma aplicação mobile simples, onde o usuario consegue logar e criar novos usuarios, usando jwt e criptografia na senha.

## Instalação

Use o npm install dentro da pasta backend para instalar as dependências do backend.

```bash
npm install 
```
Use o npm install dentro da pasta Tela para instalar as dependências do frontend.

```bash
npm install 
```

## Como iniciar

```node
# na pasta backend nodemon app.js

# na pasta tela react-native app.js

```

## Authentication
A API usa restapi para autorização

```
Usuario adm - usuario comum.
```
# API ENDPOINTS e ROTAS:

# app.get("/", ...):
  Manipula solicitações GET para o endpoint raiz.
  
 

# app.post("/register", ...):
   Manipula solicitações POST para registrar um novo usuário.
  
  

# app.post("/login-user", ...):
  Manipula solicitações POST para login de usuário.
  
 

# app.post("/userdata", ...):
  Manipula solicitações POST para recuperar dados do usuário com base no token.
  
  
  


# app.post("/update-user", ...):
  Manipula solicitações POST para atualizar informações do usuário.
  
  

# app.get("/get-all-user", ...):
  Manipula solicitações GET para recuperar todos os usuários.
  
 
# app.post("/delete-user", ...):
  Manipula solicitações POST para excluir um usuário.
  

