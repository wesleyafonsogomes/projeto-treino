/* processar array com async 

const precos = [45000, 120000, 150000, 85000, 200000];

async function processarPrecos(arrayPrecos) {
    const resultado = [];
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    for (const preco of arrayPrecos) {
        await delay(500);
        const desconto = preco * 0.9;
        const arredondar = Math.round(desconto);
        resultado.push(arredondar);
    }
    return resultado;
}
processarPrecos(precos)
.then(res => console.log("Resultado final: ", res));

*/

// 1.1 refazer 

const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Olá mundo!");
    }, 2000)
});
async function executar() {
    try {
        const msg = await promise1;
        console.log(msg);
    } catch(err) {
        console.log("Erro: ", err);
    }
}
executar();

// 1.2 refazer 

function verificarNumero(num) {
    return new Promise((resolve,reject) => {
        if(num % 2 === 0) {
            resolve("Número par");
        } else {
            reject("Número ímpar");
        }
    });
}
async function testarNumero(num) {
    try {
        const msg = await verificarNumero(num);
        console.log(msg);
    } catch(err) {
        console.log("Erro: ", err);
    }
}

// Refazer 2.1b (carros classicos);

const carrosClassicos = [
    { id: 1, modelo: "Opala SS", marca: "Chevrolet", ano: 1976, preco: 120000 },
    { id: 2, modelo: "Maverick GT", marca: "Ford", ano: 1974, preco: 150000 },
    { id: 3, modelo: "Fusca 1300", marca: "Volkswagen", ano: 1972, preco: 45000 },
    { id: 4, modelo: "Dodge Charger R/T", marca: "Dodge", ano: 1969, preco: 280000 }
];

function buscarCarroClassico(id) {
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            const buscarCarro = carrosClassicos.find(carro => carro.id === id);
            if(buscarCarro) {
                resolve(`ID: ${buscarCarro.id} Modelo: ${buscarCarro.modelo} Marca: ${buscarCarro.marca} Ano: ${buscarCarro.ano} Preço: ${buscarCarro.preco}`);
            } else {
                reject(new Error("Carro não encontrado!"));
            }
        }, 1500)
    });
}
async function executarCarroClassico(id) {
    try {
        const msg = await buscarCarroClassico(id);
        console.log("Buscando carro...");
        console.log(msg);
    } catch(err) {
        console.log("Erro: ", err);
    }
}
executarCarroClassico(2);
