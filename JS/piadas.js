$(document).ready(function () {

    $("#formExemplo").submit(function (event) {

        event.preventDefault();

        gerarPiada();

    });

});

function gerarPiada() {

    $("#txtresultado").text("Carregando piada...");

    $.ajax({

        url: "https://official-joke-api.appspot.com/random_joke",
        method: "GET",

        success: function (data) {

            let piada = data.setup + " " + data.punchline;

            $("#txtresultado").html(
                "<strong>Piada:</strong><br><br>" + piada
            );

        },

        error: function () {

            $("#txtresultado").text("Erro ao buscar piada.");

        }

    });

}
