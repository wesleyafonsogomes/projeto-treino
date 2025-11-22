// API de carros clássicos 

const express = require("express");
const app = express();
const db = require("./db/conection");
const Car = require("./models/carro");

const PORT = 3030;

// Testar conexão

db.authenticate()
.then(() => {
    console.log("Conectou do banco de dados")
    return db.sync({ force: false});
})
.then(async() => {
    console.log("Banco sincronizado!");

    // verificando quantidade de carros na tebela 

    const qtd = await Car.count();

        if(qtd === 0) {
        console.log("Banco vazio!! Populando...");

        await Car.bulkCreate([
            {
                modelo: "Opala SS", marca: "Chevrolet", ano: 1975, estado: "restaurado", preco: 120000, favorito: true
            },
            {
                modelo: "Mustang GT", marca: "Ford", ano: 2018, estado: "seminovo", preco: 285000, favorito: false 
            },
            { 
                modelo: "Civic Si", marca: "Honda", ano: 2020, estado: "novo", preco: 185000, favorito: false 
            },
            { 
                modelo: "Gol GTi", marca: "Volkswagen", ano: 1992, estado: "original", preco: 95000, favorito: false 
            },
            { 
                modelo: "Camaro SS", marca: "Chevrolet", ano: 2016, estado: "usado", preco: 235000, favorito: false 
            }
        ]);
        
    } else {
        console.log(`Banco já tem ${qtd} carros!`);
    }
})
.then(() => {
    console.log("Processo concluído!");
})
.catch(err => {
    console.log("Erro:", err);
})




app.listen(PORT, () => {
    console.log("ONLINE!");
})


