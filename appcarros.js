// API de carros clássicos 

const express = require("express");
const app = express();
const PORT = 3030;

// lista de carros 

class Carros {
    constructor() {
        this.carros = [];
    }
    addCarro(id, modelo, marca, ano, cor, estado, preco) {
    let novoCarro = {
        id:id,
        modelo:modelo,
        marca:marca,
        ano:ano,
        cor:cor,
        estado:estado,
        preco:preco,
        favorito:favorito
    };
    this.carros.push(novoCarro);
    }

}


// adicionando 

let meusCarros = new Carros();
meusCarros.addCarro(1, "Opala SS", "Chevrolet", 1975, "Preto", "restaurado", 120000, true);

meusCarros.addCarro(2, "Mustang GT", "Ford", 2018, "Vermelho", "seminovo", 285000, false);

meusCarros.addCarro(3, "Civic Si", "Honda", 2020, "Branco", "novo", 185000, false);

meusCarros.addCarro(4, "Gol GTi", "Volkswagen", 1992, "Azul", "original", 95000, false);

meusCarros.addCarro(5, "Camaro SS", "Chevrolet", 2016, "Amarelo", "usado", 235000, false);


// rotas 

app.get("/", (req,res) => {
    res.send("<p>Seja bem vindo a minha concessionária, me chamo Wesley, sou amante de carros clássicos restaurados, abaixo aprecie nosso acervo!</p><ul><li><a href='/carros'>Lista de carros</a></li><li><a href='/carros/id/:id'>Carro por ID</a></li><li><a href='/carros/marca/:marca'>Carro por marca</a></li><li><a href='/carros/estado/:estado'>Carro por estado</a></li><li><a href='/carros/decada/:decada'>Carros por Década</a></li><li><a href='/sobre'>Sobre</a></li></ul>");
})

app.get("/carros", (req,res) => {
    res.json({
        meusCarros
    })
})

// pesquisa por id 

app.get("/carros/id/:id", (req,res) => {
    let id = Number(req.params.id);
    const carroPorId = carrosPorId(id);

    if(!carroPorId) {
        return res.status(404).send("ID do carro não encontrado!")
    }
    res.send(carrosPorId(id));
})
function carrosPorId(id) {
    return meusCarros.carros.find(carro => carro.id === id);
}

// pesquisa por marca 

app.get("/carros/marca/:marca", (req,res) => {
    let marca = req.params.marca.toLowerCase();
    const carroFiltrado = carrosPorMarca(marca);

    if(carroFiltrado.length === 0) {
        return res.status(404).send("Marca do carro não encontrado!");
    }
    res.send(carroFiltrado);
})
function carrosPorMarca(marca) {
    return meusCarros.carros.filter(carro => carro.marca.toLowerCase() === marca);
}

// pesquisa por estado 

app.get("/carros/estado/:estado", (req,res) => {
    let estado = req.params.estado.toLowerCase().replace("-", " ");
    const filtroEstado = carrosPorEstado(estado);

    if(filtroEstado.length === 0) {
        return res.status(404).send("Marca do carro não encontrado!");
    }
    res.send(filtroEstado);
})
function carrosPorEstado(estado) {
    return meusCarros.carros.filter(carro => carro.estado.toLowerCase() === estado);
}

// pesquisa por decada 

app.get("/carros/decada/:decada", (req,res) => {
    let decadaBruta = Number(req.params.decada);
    let decada = 1900 + decadaBruta *10;
    const filtroDecada = carrosPorDecada(decada);

    if(filtroDecada.length === 0) {
        return res.status(404).send("Nenhum carro encontrado!");
    }
    res.send(filtroDecada);
})
function carrosPorDecada(decada) {

    const inicio = decada;
    const fim = decada + 9;

    return meusCarros.carros.filter(carro => carro.ano >= inicio && carro.ano <= fim);
} // explique pf o carrosPorDecada pois eu pedi dicas do GPT mas entendi que filtrei e depois determinei um intervalo entre os anos para determinar 1 decada 
// explique o decada bruta tbem que peguei no gpt mas entendi que tinha que transformar o ano bruto em 70 - 80 etc... 

// sobre 

app.get("/sobre", (req,res) => {
    res.send("<h1>Coleção de Wesley</h1><p>Esta é uma coleção fictícia onde escolhi os carros que mais aprecio, temos exatamente 5 carros, e o meu favorito é o Opala SS</p>");
})

app.get("/favorito", (req,res) => {
    let favorito = carroFavorito();
    // como escolhi 1 só para favorito vou optar por find que escolhe o primeiro da variavel que eu setei 
    if(!favorito) {
        return res.status(404).send("Nenhum carro favorito encontrado");
    }
    res.send(favorito);
})
function carroFavorito() {
    return meusCarros.carros.find(carro => carro.favorito === true)
}






app.listen(PORT, () => {
    console.log("ONLINE!");
})
