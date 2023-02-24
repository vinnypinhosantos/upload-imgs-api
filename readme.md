# API de Upload de Imagens

Documentação de projeto realizado com o objetivo de aprendizado, sendo uma API que possibilita o upload de imagens, salvando o caminho no banco de dados e a imagem no servidor.

### Tecnologias Utilizadas

* NodeJs
* MongoDB (com mongoose)
* Express
* Multer

### Estrutura dos Arquivos

* Controllers: onde está localizada a lógica das ações utilizadas nas rotas
* Models: onde foi criado o Schema utilizando mongoose para criação do modelo no banco
* Routes: onde se encontram as rotas da aplicação

### As rotas da aplicação

O caminho básico é /pictures, onde é possível realizar as operações: 

* POST passando um nome e a imagem no body da requisição
* GET que retornam todas as imagens salvas
* DELETE passando o id como parâmetro no caminho 