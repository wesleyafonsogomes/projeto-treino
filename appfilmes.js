// API de filmes 

const express = require("express");
const app = express();
const PORT = 3000;

// array de filmes 

let filmes = [
    {"id" : 1, "titulo" : "Matrix", "ano" : 1992, "diretor" : "Neotwo", "genero" : "ficcao"},
    {"id" : 2, "titulo" : "Guerreiros", "ano" : 1992, "diretor" : "Oeen", "genero" : "acao"},
    {"id" : 3, "titulo" : "Origem", "ano" : 2005, "diretor" : "Francisco", "genero" : "ficcao"},
    {"id" : 4, "titulo" : "Chaves", "ano" : 1996, "diretor" : "Chapolin", "genero" : "comedia"},
];

// rotas get

app.get("/", (req,res) => {
    res.send("<h1>API de FIlmes</h1><p>Aqui temos uma api filmes, que são um modo de armanezar filmes que futuramente poderão ser alterados, adicionados, removidos, da página e guardados no banco de dados.</p><p>Temos algumas rotas para selecionar os filmes sugeridos:</p><a href='/filmes '>Filmes</a><a href='/filmes/:id'>Filtrar filmes por ID </a><a href='/filmes/:genero'>Filtrar filmes por gênero</a><a href='/filmes/:acao'>Filtrar filmes por ação</a><a href='/sobre'>Sobre</a>");
})
app.get("/filmes", (req,res) => {
    res.json({filmes});
})

// filme por ID
app.get("/filmes/:id", (req,res) => {
    let id = Number(req.params.id);
    const filme = filmesID(id);
    if(!filme) {
        return res.status(404).send({erro: "Filme não encontrado!"});
    }
    res.send(filme);

    
})
    function filmesID(id) {
        return filmes.find(filme => filme.id === id);
    }

// filmes genero 

app.get("/filmes/genero/:genero", (req,res) => {
    const genero = req.params.genero.toLowerCase();
    res.send(filmesPorGenero(genero));
});
    function filmesPorGenero(genero) {
        return filmes.filter(filme => {
            return filme.genero.toLowerCase() === genero
        });
    }

// filmes por ano

app.get("/filmes/ano/:ano", (req,res) => {
    const ano = Number(req.params.ano);
    res.send(filmesPorAno(ano));
});
    function filmesPorAno(ano) {
        return filmes.filter(filme => filme.ano === ano);
    }

// filmes por nome 

app.get("/filmes/titulo/:titulo", (req,res) => {
    const titulo = req.params.titulo.toLowerCase();
    res.send(filmesPorTitulo(titulo));
});
    function filmesPorTitulo(titulo) {
        return filmes.filter(filme => filme.titulo.toLowerCase() === titulo);
    }


// sobre 

app.get("/sobre", (req,res) => {
    res.send("<h1>Catálogo de filmes criado por Wesley</h1><p>Temos 4 filmes disponíveis</p>");
})

// add filme 

function addFilme(id, titulo, ano, diretor, genero) {
    const novoFilme = {
        id:id,
        titulo:titulo,
        ano:ano,
        diretor:diretor,
        genero:genero
    };
    filmes.push(novoFilme);
    return novoFilme;
}
addFilme(5, "Os mercenarios", 1970, "stalone", "acao");



// chamando a porta 

app.listen(PORT, () => {
    console.log("Online =>");
});