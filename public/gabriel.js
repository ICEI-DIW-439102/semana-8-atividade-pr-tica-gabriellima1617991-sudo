 // ======================================================
// CATÁLOGO JSON
// ======================================================

const catalogo = [

    {
        id: 1,
        titulo: "Nebula Force",
        tipo: "filme",
        ano: 2024,
        generos: ["Ficção Científica", "Ação"],
        nota: 9.1,
        assistido: true,
        imagem: "https://picsum.photos/400/600?random=1"
    },

    {
        id: 2,
        titulo: "Shadow City",
        tipo: "serie",
        ano: 2023,
        generos: ["Suspense", "Drama"],
        nota: 8.7,
        assistido: false,
        imagem: "https://picsum.photos/400/600?random=2"
    },

    {
        id: 3,
        titulo: "Last Kingdom Rise",
        tipo: "serie",
        ano: 2022,
        generos: ["Fantasia", "Aventura"],
        nota: 9.4,
        assistido: true,
        imagem: "https://picsum.photos/400/600?random=3"
    },

    {
        id: 4,
        titulo: "Cyber Tokyo",
        tipo: "filme",
        ano: 2025,
        generos: ["Cyberpunk", "Ação"],
        nota: 8.9,
        assistido: false,
        imagem: "https://picsum.photos/400/600?random=4"
    },

    {
        id: 5,
        titulo: "Ocean Secrets",
        tipo: "filme",
        ano: 2021,
        generos: ["Drama", "Mistério"],
        nota: 8.5,
        assistido: true,
        imagem: "https://picsum.photos/400/600?random=5"
    },

    {
        id: 6,
        titulo: "Galaxy Hunters",
        tipo: "serie",
        ano: 2020,
        generos: ["Aventura", "Ficção Científica"],
        nota: 9.3,
        assistido: false,
        imagem: "https://picsum.photos/400/600?random=6"
    }

];


// ======================================================
// PEGANDO ELEMENTOS HTML
// ======================================================

const cards = document.getElementById("cards");
const mensagem = document.getElementById("mensagem");
const pesquisa = document.getElementById("pesquisa");


// ======================================================
// FUNÇÃO PARA MOSTRAR FILMES
// ======================================================

function mostrarCatalogo(lista) {

    cards.innerHTML = "";

    mensagem.innerHTML = "";

    if (lista.length === 0) {

        mensagem.innerHTML = "Nenhum filme encontrado.";

        return;
    }

    lista.forEach(item => {

        const card = document.createElement("div");

        card.classList.add("card");

        card.innerHTML = `
        
            <img src="${item.imagem}" alt="${item.titulo}">

            <div class="card-content">

                <h2>${item.titulo}</h2>

                <p><strong>Tipo:</strong> ${item.tipo}</p>

                <p><strong>Ano:</strong> ${item.ano}</p>

                <p><strong>Status:</strong> ${item.assistido ? "Assistido" : "Não assistido"}</p>

                <p><strong>Nota:</strong> ⭐ ${item.nota}</p>

                <div class="generos">
                    ${item.generos.map(genero => `
                        <span class="tag">${genero}</span>
                    `).join("")}
                </div>

            </div>
        
        `;

        cards.appendChild(card);

    });

}


// ======================================================
// FUNÇÃO DE PESQUISA
// ======================================================

function buscarFilmes() {

    const valor = pesquisa.value.toLowerCase();

    const resultado = catalogo.filter(item =>

        item.titulo.toLowerCase().includes(valor)

    );

    mostrarCatalogo(resultado);

}


// ======================================================
// FILTROS
// ======================================================

function filtrarTipo(tipo) {

    if (tipo === "todos") {

        mostrarCatalogo(catalogo);

        return;
    }

    const filtrados = catalogo.filter(item => item.tipo === tipo);

    mostrarCatalogo(filtrados);

}


// ======================================================
// ENTER PARA PESQUISAR
// ======================================================

pesquisa.addEventListener("keypress", function(event) {

    if (event.key === "Enter") {

        buscarFilmes();

    }

});


// ======================================================
// ITERATORS OBRIGATÓRIOS
// ======================================================


// forEach

console.log("===== LISTAGEM =====");

catalogo.forEach(item => {

    console.log(`- [${item.tipo}] ${item.titulo} (${item.ano})`);

});


// map

const titulosMaiusculos = catalogo.map(item => item.titulo.toUpperCase());

console.log(titulosMaiusculos);


// filter

const naoAssistidos = catalogo.filter(item => item.assistido === false);

console.log("Não assistidos:", naoAssistidos.length);


// find

const notaAlta = catalogo.find(item => item.nota >= 9);

if (notaAlta) {

    console.log("Primeiro item com nota maior que 9:");

    console.log(notaAlta.titulo, notaAlta.nota);

}


// reduce

const somaNotas = catalogo.reduce((acc, item) => {

    return acc + item.nota;

}, 0);

const media = somaNotas / catalogo.length;

console.log("Média geral:", media.toFixed(2));


// some

const existeAntigo = catalogo.some(item => item.ano < 2000);

console.log("Existe item antigo?", existeAntigo);


// every

const todosTemGenero = catalogo.every(item => item.generos.length > 0);

console.log("Todos possuem gênero?", todosTemGenero);


// ======================================================
// INICIAR CATÁLOGO
// ======================================================

mostrarCatalogo(catalogo);