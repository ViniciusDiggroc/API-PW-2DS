$(document).ready(function () {

     $("#txttelefone").mask("+00 (00) 00000-0000");
      $("#txtcpf").mask("000.000.000-00");

    $("#formExemplo").validate({

        rules: {

            txtnome: {
                required: true,
                minlength: 5
            },

            txtemail: {
                required: true,
                email: true
            },

            txtidade: {
                required: true,
                min: 18,
                max: 65
            },

            txttelefone: {
                required: true
            },

            txtcpf: {
                required: true
            },

            txtarea: {
                required: true
            },

            txtexperiencia: {
                required: true,
                minlength: 20,
                maxlength: 50
            },

            txtsenha: {
                required: true,
                minlength: 6
            },

            txtconfirmar: {
                required: true,
                equalTo: "#txtsenha"
            }

        },

        messages: {

            txtnome: {
                required: "Digite seu nome",
                minlength: "Mínimo 5 caracteres"
            },

            txtemail: {
                required: "Digite seu email",
                email: "Email inválido"
            },

            txtidade: {
                required: "Digite sua idade",
                min: "Idade mínima 18",
                max: "Idade máxima 65"
            },

            txttelefone: {
                required: "Digite seu telefone"
            },

            txtcpf: {
                required: "Digite seu CPF"
            },

            txtarea: {
                required: "Selecione uma área"
            },

            txtexperiencia: {
                required: "Descreva sua experiência",
                minlength: "Mínimo 20 caracteres",
                maxlength: "Máximo 50 caracteres"
            },

            txtsenha: {
                required: "Digite uma senha",
                minlength: "Mínimo 6 caracteres"
            },

            txtconfirmar: {
                required: "Confirme a senha",
                equalTo: "As senhas devem ser iguais"
            }

        },

        submitHandler: function (form) {

            let nome = $("#txtnome").val();
            let email = $("#txtemail").val();
            let idade = $("#txtidade").val();
            let telefone = $("#txttelefone").val();
            let cpf = $("#txtcpf").val();
            let area = $("#txtarea").val();
            let experiencia = $("#txtexperiencia").val();

            alert(
                "Currículo enviado com sucesso!\n\n" +
                "Nome: " + nome +
                "\nEmail: " + email +
                "\nIdade: " + idade +
                "\nTelefone: " + telefone +
                "\nCPF: " + cpf +
                "\nÁrea de interesse: " + area +
                "\nExperiência: " + experiencia
            );

        }

    });

});