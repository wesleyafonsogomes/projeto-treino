// criar ums ervidor express com 5 rotas 

const express = require("express");
const app = express();

const port = 8080;

// 5 rotas 

app.get("/", (req,res) => {
    res.send("<h1>Bem vindo</h1><p>Meu nome é Wesley, e esse é o meu portifólio!</p>");
})
app.get("/sobre", (req,res) => {
    res.send("Me chamo Wesley, atualmente estudando programação, querendo fazer uma transição de carreira, e sonho em se tornar DEV");
})
app.get("/habilidades", (req,res) => {
    res.send("<h1>Minhas tecnologias</h1><ul><li>JavaScript</li><li>Node.js</li><li>HTML e CSS</li></ul>");
})
app.get("/projetos", (req,res) => {
    res.send("<h1>Meus projetos</h1><p>Job Finder, Jogo da Velha e uma Mini Calculadora</p>");
})
app.get("/contato", (req,res) => {
    res.send("<h1>Meus contatos</h1><ul><li>E-mail: wesleyafonsogomes@yahoo.com.br</li><li>GitHub: wesleyafonsogomes.github.com</li></ul>");
})
app.get("/experiencia", (req,res) => {
    res.send("<p>Atualmente tenho 2 mêses de HTML e CSS e quase 2 mêses de JS e começando no mundo back-end agora com Node.js. Meus objetivos são de ser um dev Back-end ou Front-end. Minha meta é 7 meses aplicar para algumas vagas no Linkedin</p>");
})

app.listen(port, () => {
    console.log("Online!");
})

