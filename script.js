// Pegando o container o texto

const postWrap = document.querySelector('.post-wrap');

// Criando a barra de percentual de leitura

let bar = document.createElement('div');

// Aplicando as estiilizações nesta div

bar.style.width = '0px';
bar.style.height = '4px';
bar.style.backgroundColor = '#6633cc';
bar.style.position = 'fixed';
bar.style.top = '0px';
bar.style.left = '0px';
bar.style.zIndex = '9999';
bar.style.transition = '0.2s';

// Adicionando a nossa barra no Body (Onde fica toda a parte vísivel da nossa página)

document.body.append(bar);

// Atualizar dinâmicamente a barra

function updateBar(){
    // PRECISAMOS:
  
    // Tamanho da box que contém o texto
    const textHeight = postWrap.offsetHeight; 

    // Verificar em que posição da página estmamos (Eixo Y)
    const pagePosition = window.pageYOffset;

    // Regra de 3
    const updateBar = pagePosition * 100 / textHeight;

    bar.style.width = updateBar + '%';
}

// Evento DOM: Scroll

window.addEventListener('load', () => {
    document.addEventListener('scroll', updateBar);
});

