/*
Criar Promise (a função);

function minhaFunc() {
    return new Promise((resolve, reject) => {
        if sucesso = resolve(resultado)
        if erro = reject(erro)    
    });
}

consumir Promise (usar a function)
1. com .then .catch 

minhaFunc()
.then(resultado => {
    usar resultado
})
.catch(erro => {
    usar erro 
});

2. com async/await

async function usar() {
    try {
        const resultado = await minhaFunc();
        usar resultado
    } catch(erro) {
        trate o erro  
    }
}
*/

// 1.1 Promise Básica 


    const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Olá mundo!"); 
    }, 2000)
});

async function executar() {
    try {
        const resultado = await promise;
        console.log(resultado);
    } catch(err) {
        console.log("Erro:", err);
    }
}

// 1.2 promise que resolve depois de 3s

const carregarDados = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("Dados carregados com sucesso!");
    }, 3000)
});
async function iniciar() {
    try {
        const result = await carregarDados;
        console.log(result);
    } catch(err) {
        console.log("Erro:", err);
    }
}

// 1.3 Promise que pode dar certo ou errado 

const buscarUsuario = new Promise((resolve, reject) => {
    setTimeout(() => {
        const numAleatorio = Math.random();
        if(numAleatorio > 0.5) {
            resolve("Usuário encontrado");
        } else {
            reject("Usuário não encontrado");
        }
    }, 2000)
})
async function executarBusca() {
    try {
        const result = await buscarUsuario;
        console.log(result);
    } catch(err) {
        console.log("Erro na busca:", err);
    }
}


// 1.4 duas promises usando async/await

const verificarToken = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Token válido!");
    }, 1500)
})
const carregarPerfil = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Perfil carregado");
    }, 2000)
})

async function iniciarSistema() {
    try {
        const msg1 = await verificarToken;
        console.log(msg1);
        const msg2 = await carregarPerfil;
        console.log(msg2);

        console.log("Sistema pronto!")

    } catch(err) {
        console.log("Erro:", err);
    }
}

// 1.5 criar function que retorna promise 
function baixarArquivo(callback) {
    setTimeout(() => {
        callback("Download concluído!");
    }, 2000);
}
function baixarArquivoPromise() {
    return new Promise((resolve, reject) => {
        baixarArquivo((mensagem) => {
            resolve(mensagem);
        });
    });
}
async function executarDownload() {
    try {
        const msg = await baixarArquivoPromise();
        console.log(msg);
    } catch(err) {
        console.log("Erro:", err);
    }
}

// 2.1 buscar dados de array 

const carrosClassicos = [
    { id: 1, modelo: "Opala SS", marca: "Chevrolet", ano: 1976, preco: 120000 },
    { id: 2, modelo: "Maverick GT", marca: "Ford", ano: 1974, preco: 150000 },
    { id: 3, modelo: "Fusca 1300", marca: "Volkswagen", ano: 1972, preco: 45000 },
    { id: 4, modelo: "Dodge Charger R/T", marca: "Dodge", ano: 1969, preco: 280000 }
];

async function buscarCarroClassico(id) { 
        return new Promise ((resolve, reject) => {
            setTimeout(() => {
                const buscandoCarro =  carrosClassicos.find(carro => carro.id === id);

                if(buscandoCarro) {
                    resolve(buscandoCarro);
                } else {
                    reject(new Error("Carro não encontrado"));
                }
            }, 1500)
        });
    }

async function mostrarCarro(id) {
    try {
        const msg = await buscarCarroClassico(id);
        console.log(msg);
    } catch(err) {
        console.log("Erro:", err);
    }
}

// IA 1

async function iniciar() {
    minhaPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
            resolve("Carregado!");
        }, 1000)
    });
    const msg = await minhaPromise;
    console.log(msg);
};

// IA 2

async function carregar() {
    const promessa = new Promise((resolve, reject) => {
        setTimeout(() => {
            const aleatorio = Math.random();
            if(aleatorio > 0.5) {
                resolve("Sucesso ao carregar: N > 1.5");
            } else {
                reject("Falha ao carregar dados: N <= 1.5");
            }
        }, 1500)
    });
    try {       
        const msg = await promessa;
        console.log(msg);
    } catch(err) {
        console.log("Erro:", err);
    }
}


// IA 3 - duas promises em sequencia 

async function inicializar() {
    const verificarToken = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Token válido");
        }, 1000)
    });
    const carregarDados = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Dados carregados");
        }, 2000)
    });
    console.log("Validando token...");
    const msg1 = await verificarToken;
    console.log(msg1);
    const msg2 = await carregarDados;
    console.log(msg2);
    console.log("Sistema pronto");
}

// processar uma lista de usuarios com delay

const lista = ["Ana", "Carlos", "Julia", "Marcos"];

async function processarUsuario(usuarios) {
    const resultado = [];
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    for (const user of usuarios) {
    await delay(500);
    console.log("Processando: ", user);
    resultado.push(`Processado: ${user}`);  
    }  
    return resultado;
}

// validar um usuario e carregar seu perfil 

const usuarios = [{nome: "Ana", idade: 21},{nome: "Wesley", idade: 29}];

async function login(nome) {

    const usuarioEncontrado = usuarios.find(u => u.nome === nome);

    const validacao = new Promise((resolve, reject)=> {
        setTimeout(()=> {
            
            if(!usuarioEncontrado) {
                reject("Usuário não existe!");
            } else if(usuarioEncontrado.nome === "Ana") {
                reject("Usuário bloquado!");
            } else {
                resolve("Usuário válido!");
            }
        }, 1000)
    });
    const carregandoPerfil = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Usuário carregado: Nome: ${usuarioEncontrado.nome}, idade: ${usuarioEncontrado.idade}`);
        }, 2000)
    });
    try {
        console.log("Validando usuário");
        const msg1 = await validacao;
        console.log(msg1);

        console.log("Carregando perfil...");
        const msg2 = await carregandoPerfil;
        console.log(msg2);
    } catch(err) {
        console.log("Erro: ", err);
    }
}
login("Wesley");











