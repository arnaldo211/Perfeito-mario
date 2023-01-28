/*
OBJETIVO 1 - QUANDO P USUÁRIO CLICAR NO BOTÃO DE VEJA TRAILER, DEVEMOS ABRIR A MODAL COM O VIDEO DO TRAILER.
    - passo 1 - dar um jeito de pegar o elemento que representa o botão na tela usando o JS.
    - passo 2 -dar um jeito de indentificar quando o usuário clicar no botão
    - passo 3 - dar um jeito de pegar o elemento da modal no JS
    - passo 4 - abrir a modal na tela

OBJETIVO 2 - quando o usuário clicar no X devemos fechar a modal
    - passo 1 - dar um jeito de pegar o elemento de fechar modal usando o JS
    - passo 2 - dar um jeito de identificar quando o usuário clicar no X
    - passo 3 - fechar a modal
*/

// dar um jeito de pegar o elemento que representa o botão na tela usando o JS.



const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;


function alternarModal(){
    modal.classList.toggle("aberto");
}

// passo 2 -dar um jeito de indentificar quando o usuário clicar no botão
botaoTrailer.addEventListener("click", () => {
    alternarModal();
    // passo 4 - abrir a modal na tela
    video.setAttribute("src", linkDoVideo);
})

//  passo 3 - dar um jeito de pegar o elemento da modal no JS
//const modal = document.querySelector(".modal")

 //OBJETIVO 2 - quando o usuário clicar no X devemos fechar a modal
// passo 1 - dar um jeito de pegar o elemento de fechar modal usando o JS

//passo 2 - dar um jeito de identificar quando o usuário clicar no X
botaoFecharModal.addEventListener("click", () => {
    // passo 3 - fechar a modal
    alternarModal();
    video.setAttribute("src", "");
})

