// rotas para uma pagina de receitas 

const express = require("express");
const app = express();

const PORT = 5000;

app.get("/home", (req,res) => {
    res.send("<h1>Bem vindo ao meu Site de Receitas</h1><p>Aqui você encontrará receitas caseiras gostosas!</p>");
})
app.get("/receitas", (req,res) => {
    res.send("<ul><li>Bolo: <a href='/receitas/bolo'>Acesse para ver a receita</a></li><li>Lasanha<a href= '/receitas/lasanha'>Acesse para ver a receita</a></li><li>Torta<a href= '/receitas/torta'>Acesse para ver a receita</a></li></ul>");
})
app.get("/receitas/bolo", (req,res) => {
    res.send("<h1>Bolo de chocolate</h1><h2>Modo de preparo</h2><p>Para agilizar o exercício vou deixar assim!</p>");
})
app.get("/receitas/lasanha", (req,res) => {
    res.send("<ul><li>Lasanha</li></ul>");
})
app.get("/receitas/torta", (req,res) => {
    res.send("<ul><li>Torta</li></ul>");
})
app.get("/sobre", (req,res) => {
    res.send("<p>Meu nome é Wesley, criei este site para treinar a criação de rotas e servidores (back-end), minhaa receita favorida é Lasanha</p>");
})
app.get("/dicas", (req,res) => {
    res.send("Primeiramente tenha vontade de cozinhas, pesquise receitas, e ame cozinhar!");
})

// mostrar se ta online 

app.listen(PORT, () => {
    console.log("Online!!!");
})


