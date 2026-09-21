const botoes = document.querySelectorAll("article button");

        botoes.forEach( function (botao) {
        let curtiu = false;
            botao.addEventListener("click", function botaoClicado() {
                console.log("fui clicado");
                let texto = botao.querySelector("span");
                if (curtiu === false){
                    texto.textContent++;
                    curtiu = true;
                } else{
                    texto.textContent--;
                    curtiu = false;
                }
            })
        })

        const BtnTemaEscuro = document.querySelector(".btn-tema-escuro");
        
        BtnTemaEscuro.addEventListener("click", mudaTema);

        function mudaTema() {
            const corpoPagina = document.body;
            if(corpoPagina.classList.contains("tema-escuro")) {
                corpoPagina.classList.remove("tema-escuro");
            } else {
                corpoPagina.classList.add("tema-escuro");
            }
        }
