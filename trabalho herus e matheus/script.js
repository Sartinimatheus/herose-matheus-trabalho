
// INTERAÇÃO 1: FILTRO DE ATIVIDADES

const filtro = document.getElementById("filtro");

if (filtro) {
    filtro.addEventListener("change", function() {

        const categoriaSelecionada = filtro.value;

        const atividades = document.querySelectorAll(
            "#lista-atividades tr"
        );

        let quantidade = 0;

        atividades.forEach(function(atividade) {

            const categoria = atividade.dataset.categoria;

            if (
                categoriaSelecionada === "todos" ||
                categoria === categoriaSelecionada
            ) {
                atividade.style.display = "";
                quantidade++;
            } else {
                atividade.style.display = "none";
            }

        });

        const mensagem = document.getElementById("mensagem-filtro");

        mensagem.textContent =
            quantidade + " atividade(s) encontrada(s).";
    });
}


// INTERAÇÃO 2: FORMULÁRIO SIMULADO

const formulario = document.getElementById("form-interesse");

if (formulario) {

    formulario.addEventListener("submit", function(event) {

        // Impede o recarregamento da página
        event.preventDefault();

        // Captura os valores preenchidos
        const apelido = document.getElementById("apelido").value.trim();
        const atividade = document.getElementById("atividade").value;
        const turno = document.getElementById("turno").value;

        // Exibe a confirmação
        const resultado = document.getElementById("resultado");

        resultado.textContent =
            "Parabéns, " + apelido +
            "! Seu interesse em " + atividade +
            " no turno da " + turno +
            " foi registrado nesta simulação. Esperamos você no Festival Pixel!";

        // Limpa os campos
        formulario.reset();

    });

}
