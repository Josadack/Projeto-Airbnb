# Projeto Airbnb Clone

Este é um clone simplificado da plataforma Airbnb, desenvolvido como um projeto full-stack para praticar e demonstrar habilidades em desenvolvimento web moderno. O projeto permite que usuários criem e gerenciem acomodações, façam upload de fotos, e listem suas propriedades para outros usuários explorarem.

## 🚀 Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias:

**Frontend:**
*   **React:** Biblioteca JavaScript para construção de interfaces de usuário.
*   **Vite:** Ferramenta de build rápida para projetos web modernos, otimizando o processo de desenvolvimento.
*   **Tailwind CSS:** Framework CSS para estilização rápida e responsiva.
*   **Axios:** Cliente HTTP baseado em Promises para fazer requisições à API.
*   **React Router DOM:** Biblioteca para roteamento declarativo no React.

**Backend:**
*   **Node.js:** Ambiente de tempo de execução JavaScript para o lado do servidor.
*   **Express.js:** Framework web para Node.js, utilizado para construir a API RESTful.
*   **MongoDB:** Banco de dados NoSQL flexível e escalável para persistência de dados.
*   **Mongoose:** ODM (Object Data Modeling) para MongoDB em ambiente Node.js, facilitando a interação com o banco de dados.
*   **JWT (JSON Web Tokens):** Para autenticação e autorização de usuários.
*   **Bcrypt.js:** Para hash de senhas de forma segura.
*   **Multer:** Middleware para Node.js que lida com dados `multipart/form-data`, usado principalmente para upload de arquivos.
*   **ImageKit.io:** Serviço de gerenciamento e otimização de imagens, utilizado para armazenar e servir as fotos das acomodações com alta performance e transformações em tempo real.

## ✨ Features Principais

*   **Autenticação de Usuários:** Cadastro, login e logout com JWT.
*   **Gestão de Acomodações:** Usuários logados podem adicionar, editar e excluir suas propriedades.
*   **Upload de Fotos:** Upload de múltiplas fotos para as acomodações, gerenciadas pelo ImageKit.io.
*   **Listagem de Propriedades:** Exibição de todas as acomodações cadastradas.
*   **Visualização Detalhada da Acomodação:** Página para visualizar detalhes específicos de cada propriedade.
*   **Responsividade:** Interface adaptada para diferentes tamanhos de tela.

## ⚙️ Configuração e Instalação

Siga os passos abaixo para configurar e rodar o projeto em seu ambiente local.

### Pré-requisitos

*   Node.js (versão 18.x ou superior)
*   MongoDB (local ou um cluster MongoDB Atlas)
*   Conta no ImageKit.io

### 1. Configurar o Backend

1.  **Clone o repositório do backend:**
    ```bash  
    git clone https://github.com/seu-usuario/seu-repositorio-backend.git  
    cd seu-repositorio-backend  
Instale as dependências:

bash
npm install  
# ou  
yarn install  
Crie um arquivo .env na raiz do diretório do backend com as seguintes variáveis de ambiente:

env
MONGO_URL="mongodb+srv://<seu_usuario>:<sua_senha>@<seu_cluster>.mongodb.net/<seu_database>?retryWrites=true&w=majority"  
JWT_SECRET="alguma_string_secreta_forte_para_jwt"  
IMAGEKIT_PUBLIC_KEY="chave_publica_do_imagekit"  
IMAGEKIT_PRIVATE_KEY="chave_privada_do_imagekit"  
IMAGEKIT_URL_ENDPOINT="https://ik.imagekit.io/seu_id/"  
# A porta padrão para o backend (ex: 4000)  
PORT=4000  
Substitua os valores <...> pelas suas próprias credenciais e chaves do ImageKit.io.
Para MONGO_URL, você pode usar um banco de dados MongoDB local ou um cluster no MongoDB Atlas.
Para JWT_SECRET, gere uma string aleatória longa.
Inicie o servidor backend:

bash
npm start  
# ou  
yarn start  
O servidor estará rodando em http://localhost:4000 (ou na porta que você configurou).

2. Configurar o Frontend
Clone o repositório do frontend:

bash
git clone https://github.com/seu-usuario/seu-repositorio-frontend.git  
cd seu-repositorio-frontend  
(Substitua pelo caminho correto do seu frontend)

Instale as dependências:

bash
npm install  
# ou  
yarn install  
Crie um arquivo .env na raiz do diretório do frontend com a seguinte variável de ambiente:

env
VITE_API_BASE_URL="http://localhost:4000/api"  
# Se você for implantar, esta URL mudará para a URL do seu backend em produção (ex: https://seu-backend.onrender.com/api)  
Inicie a aplicação frontend:

bash
npm run dev  
# ou  
yarn dev  
A aplicação estará rodando em http://localhost:5173 (ou na porta que o Vite definir).

🚀 Como Usar
Acesse a Aplicação: Abra seu navegador e vá para http://localhost:5173.
Registro/Login: Crie uma nova conta ou faça login com uma conta existente.
Adicionar Acomodação: Navegue até a seção "Minhas Acomodações" e clique em "Adicionar Novo Lugar" para registrar uma nova propriedade, incluindo detalhes e fotos.
Explorar: Navegue pela página inicial para ver as acomodações listadas por outros usuários (ou por você mesmo).
