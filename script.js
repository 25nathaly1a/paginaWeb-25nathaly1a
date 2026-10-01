// Funcionalidade dos botões de reação (Curtidas e Joinhas)
const botoes = document.querySelectorAll("article button");

botoes.forEach(function (botao) {
    let curtiu = false;

    botao.addEventListener("click", function () {
        const texto = botao.querySelector("span");

        if (texto) {
            let contador = parseInt(texto.textContent, 10);

            if (!curtiu) {
                texto.textContent = contador + 1;
                curtiu = true;
            } else {
                texto.textContent = contador - 1;
                curtiu = false;
            }
        }
    });
});

// Funcionalidade de Alternar Tema (Claro / Escuro)
const btnTemaEscuro = document.querySelector(".btn-tema-escuro");

if (btnTemaEscuro) {
    btnTemaEscuro.addEventListener("click", function () {
        document.body.classList.toggle("tema-escuro");
    });
}