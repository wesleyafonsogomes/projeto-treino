// API de carros antigos 

const express = require("express");
const {Op} = require("sequelize");
const app = express();
const db = require("./db/conection");
const Carro = require("./models/carros");

PORT = 3030;

// teste db conection 

db.authenticate()
.then(() => {
    console.log("Conectou ao banco de dados");
}) 
.catch(err => {
    console.log("Erro:", err);
});


// rotas 

app.get("/carros", async (req,res) => {
    try {
        const carros = await Carro.findAll();
        res.json(carros);
    } catch(err) {
        res.status(404).json({ error: "Erro ao buscar carro"});
    }
})

app.get("/carros/id/:id", async (req,res) => {  
    console.log("Isso são os parâmetros:", req.params);
    const ret =  await Carro.findOne ({
    where: {id: req.params.id}
    })
    const r1 = ret.toJSON();
    console.log("Este são os dados do carro presente no banco de dados: ", ret);
    console.log("Isso é o valor de r1: ", r1);
    res.send(ret);
    return ret;

    /*
    .then(carro => {
        if(!carro) {
            return res.status(404).send({ erro: "Carro não encontrado!"});
        }
        res.send(carro);
    
    })
    .catch(err => {
        res.status(500).send({ erro: "Erro no servidor", detalhes: err});
    })
    */
    }
);

app.get("/carros/marca/:marca", async (req,res) => {
    try {
    const marca = req.params.marca;
    const carros = await Carro.findAll({
        where: { marca: marca}
    });

    if(carros.length === 0) {
        return res.status(404).json({ erro: "Carro não encontrado"});
    }

    res.json(carros);

    } catch (err) {
        res.status(500).json({ erro: "Erro no servidor", detalhe: err});
    }
});

app.get("/carros/estado/:estado", async (req,res) => {
    try {
    const estado = req.params.estado;
    const carros = await Carro.findAll({
        where: { estado: estado}
    });

    if(carros.length === 0) {
        return res.status(404).json({ erro: "Carro não encontrado"});
    }

    res.json(carros);

    } catch (err) {
        res.status(500).json({ erro: "Erro no servidor", detalhe: err});
    }
});

//favorito

app.get("/carros/favoritos", async (req,res) => {
    try {
        const carros = await Carro.findAll({
            where: { favoritos: true }
        });

        if(carros.length === 0) {
            return res.status(404).send("Favorito não encontrado");
        }

        res.send(carros);

    } catch(err) {
        res.status(500).json({ erro: "Erro no servidor", detalhe: err});
    }
})

// decadas

app.get("/carros/decada/:ano", async (req,res) => {
        try {
        const ano = parseInt(req.params.ano); 
        const inicioDecada = Math.floor(ano / 10) * 10;
        const fimDecada = inicioDecada + 9;

        const carros = await Carro.findAll({
            where: {
                ano: {
                    [Op.between]: [inicioDecada, fimDecada]
                }
            }
        });
        
        res.json(carros);
    } catch(err) {
        res.status(500).json({ message: "Erro so buscar por decadas" });
    } 
});


// sincronizar e inserir carros

db.sync({ force: true})
.then(() => {
    return Carro.bulkCreate([
        {
        marca: "Ford Maverick GT V8",
        estado: "Excelente",
        ano: 1974,
        favoritos: true
        },
        {
        marca: "Chevrolet Opala SS",
        estado: "Bom",
        ano: 1976,
        favoritos: false
        },
        {
        marca: "Volkswagen Fusca 1300",
        estado: "Regular",
        ano: 1972,
        favoritos: false
        },
        {
        marca: "Dodge Charger R/T",
        estado: "Excelente",
        ano: 1969,
        favoritos: false
        },
        {
        marca: "Chevrolet Bel Air",
        estado: "Bom",
        ano: 1957,
        favoritos: false
        }
    ]);
})
.then(() => {
    console.log("Carros inseridos com sucesso");

    
    app.listen(PORT, () => {
        console.log("Online!");
    });
});

