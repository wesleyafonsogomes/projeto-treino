// criar servidor simples com 3 rotas 

const express = require("express");
const app = express();

const PORT = 3000;

app.get("/home", (req,res) => {
    res.send("Bem-vindo à Home!");
});
app.get("/sobre", (req,res) => {
    res.send("Página Sobre - Sou o Wesley, desenvolvedor!");
});
app.get("/contato", (req,res) => {
    res.send("Entre em contato: wesley@email.com");
});

app.listen(PORT, () => {
    console.log("servidor rodando!")
})


