// Conteúdo para iniciar o site já mostrando a div "content1"
if (!window.location.hash) {
    window.location.hash = "#content1";
}

// Array de IDs das seções
const contents = ["content1", "content2", "content3", "content4", "content5"];
const prevArrow = document.getElementById("prev");
const nextArrow = document.getElementById("next");

// Função para manter a posição da rolagem
function maintainScrollPosition() { // !! Nova função para manter a posição da rolagem
    const scrollY = window.scrollY || window.pageYOffset; // Obtém a posição atual da rolagem
    window.scrollTo(0, scrollY); // Define a posição da rolagem para a posição atual
}

// Função para atualizar os links das setas
function updateArrows() {
    const currentHash = window.location.hash.replace("#", "");
    const currentIndex = contents.indexOf(currentHash);

    // Set previous arrow href
    if (currentIndex > 0) {
        prevArrow.href = "#" + contents[currentIndex - 1];
    } else {
        prevArrow.href = "#" + contents[contents.length - 1];
    }

    // Set next arrow href
    if (currentIndex < contents.length - 1) {
        nextArrow.href = "#" + contents[currentIndex + 1];
    } else {
        nextArrow.href = "#" + contents[0];
    }

    // Manter a posição da rolagem após atualizar os links das setas
    maintainScrollPosition(); // !! Chamada da nova função para manter a posição da rolagem
}

// Função para lidar com o clique nas setas
function handleArrowClick(event) { // !! Nova função para lidar com o clique nas setas
    event.preventDefault(); // Previne o comportamento padrão do link

    const targetHash = event.currentTarget.getAttribute('href'); // Obtém o hash alvo
    window.location.hash = targetHash; // Atualiza o hash manualmente

    // Atualiza as setas após mudar o hash
    updateArrows(); // Atualiza os links das setas
}

// Inicializar setas na carga da página
window.addEventListener("load", updateArrows);

// Atualizar setas quando o hash mudar
window.addEventListener("hashchange", updateArrows);

// Adicionar ouvintes de eventos para as setas
prevArrow.addEventListener('click', handleArrowClick); // !! Adicionado para evitar rolagem ao clicar na seta anterior
nextArrow.addEventListener('click', handleArrowClick); // !! Adicionado para evitar rolagem ao clicar na seta seguinte
