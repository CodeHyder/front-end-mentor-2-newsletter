const botao = document.getElementById('button');
const botao2 = document.getElementById('button-2')
const imagem = document.getElementById('imagem');
const container = document.getElementById('container');
const formulario = document.getElementById('form');
const container2 = document.getElementById('card-2')

function handleContent() {   
    container.classList.contains('active') === true ? container.classList.replace("active", "inactive") : container.classList.replace("inactive", "active");
    imagem.classList.contains('active') === true ? imagem.classList.replace("active", "inactive") : imagem.classList.replace("inactive", "active");
    container2.classList.contains('inactive') === true ? container2.classList.replace("inactive", "active") : container2.classList.replace("active", "inactive")
}

botao.addEventListener("click", () => handleContent());
botao2.addEventListener("click", () => handleContent());

/*
container.classList.contains('active') ? container.classList.replace('active', 'inactive') : container.classList.replace('inactive', 'active');
    imagem.classList.contains('active') ? imagem.classList.replace('active', 'inactive') : imagem.classList.replace('inactive', 'active');
*/

// if (container.classList.contains('active') && imagem.classList.contains('active')) {

    //     container.classList.replace('active', 'inactive');
    //     imagem.classList.replace('active', 'inactive');

    // } 

    // container2.className === 'inactive' ? container2.classList.replace('inactive', 'active') : container2.classList.replace('active', 'inactive')
    