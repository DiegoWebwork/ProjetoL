![alt text](https://github.com/DiegoWebwork/estrutura-de-dados/blob/main/universidade%20de%20vassouras%20Vertical.png)

# Curso: Engenharia de Software
# Alunos: Diego Rios dos Santos (202010774)
# Disciplina: Laboratório de Programação de Aplicativos Nativos 8º Periodo
# Professor: Fabricio Dias

# Como rodar:
dentro da pasta ProjetoL

cd backend para entrar na pasta do servidor

com um terminal aberto na pasta backend

rode o comando npm install para instalar as dependencias necessarias

rode o comando node app.js para iniciar o servidor

dentro da pasta ProjetoL

cd Tela para entrar na pagina principal da aplicação react-native

com um terminal aberto na pasta Tela

rode o comando npm install para instalar as dependencias necessarias

rode o comando react-native start para iniciar a aplicação e escolha se ira rodar em um emular android, IOS ou Web

# Introdução:
Esse projeto inicial lida com components e navegação entre paginas, adicionando um metodo de cadastro de usuario e loguin com jwt e senha com hash,
na pasta backend, tem o arquivo app.js que é onde fica as api endpoint a partir da linha 24

# API ENDPOINTS e ROTAS:

# app.get("/", ...):
  Manipula solicitações GET para o endpoint raiz.
  
  exemplo:
  
![alt text](https://github.com/DiegoWebwork/ProjetoL/blob/master/images/s.png)

# app.post("/register", ...):
   Manipula solicitações POST para registrar um novo usuário.
  
  exemplo:
  
![alt text](https://github.com/DiegoWebwork/ProjetoL/blob/master/images/register.png)

# app.post("/login-user", ...):
  Manipula solicitações POST para login de usuário.
  
  exemplo:
  
![alt text](https://github.com/DiegoWebwork/ProjetoL/blob/master/images/login.png)

# app.post("/userdata", ...):
  Manipula solicitações POST para recuperar dados do usuário com base no token.
  
  exemplo:
  
![alt text](https://github.com/DiegoWebwork/ProjetoL/blob/master/images/userdata.png)

# app.post("/update-user", ...):
  Manipula solicitações POST para atualizar informações do usuário.
  
  exemplo:
  
![alt text](https://github.com/DiegoWebwork/ProjetoL/blob/master/images/updateuser.png)

# app.get("/get-all-user", ...):
  Manipula solicitações GET para recuperar todos os usuários.
  
  exemplo:
  
![alt text](https://github.com/DiegoWebwork/ProjetoL/blob/master/images/getall.png)

# app.post("/delete-user", ...):
  Manipula solicitações POST para excluir um usuário.
  
  exemplo:
  
![alt text](https://github.com/DiegoWebwork/ProjetoL/blob/master/images/delete.png)

