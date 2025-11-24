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
