document.addEventListener("DOMContentLoaded", function () {
    // -------------------------------------------------------------
    // 1. Funcionalidade dos botões de reação (Curtidas e Joinhas)
    // -------------------------------------------------------------
    const botoesReacao = document.querySelectorAll("article button");

    botoesReacao.forEach(function (botao) {
        let curtiu = false;

        botao.addEventListener("click", function () {
            const contadorSpan = botao.querySelector("span");

            if (contadorSpan) {
                let contador = parseInt(contadorSpan.textContent, 10);

                if (!curtiu) {
                    contadorSpan.textContent = contador + 1;
                    botao.classList.add("ativo"); // Permite estilizar o botão ativo no CSS
                    curtiu = true;
                } else {
                    contadorSpan.textContent = contador - 1;
                    botao.classList.remove("ativo");
                    curtiu = false;
                }
            }
        });
    });

    // -------------------------------------------------------------
    // 2. Funcionalidade de Alternar Tema (Claro / Escuro) com LocalStorage
    // -------------------------------------------------------------
    const btnTemaEscuro = document.querySelector(".btn-tema-escuro");

    // Verifica se o usuário já havia escolhido o tema escuro anteriormente
    if (localStorage.getItem("tema") === "escuro") {
        document.body.classList.add("tema-escuro");
    }

    if (btnTemaEscuro) {
        btnTemaEscuro.addEventListener("click", function () {
            document.body.classList.toggle("tema-escuro");

            // Salva a preferência no navegador do usuário
            if (document.body.classList.contains("tema-escuro")) {
                localStorage.setItem("tema", "escuro");
            } else {
                localStorage.setItem("tema", "claro");
            }
        });
    }
});