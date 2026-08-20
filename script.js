document.getElementById("form-contato").addEventListener("submit", function(evento) {
    evento.preventDefault();

    var nome = dcument.getElementById("nome").value;
    var email = dcument.getElementById("email").value;

    if (nome === "" || email === "") {
        alert("Por favor, preencha todos os campos.");
    } else {
        alert("mensagem enviada com sucesso!");
    }
});
