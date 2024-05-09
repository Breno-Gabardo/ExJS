document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtém os valores dos campos A e B
    var campoA = parseInt(document.getElementById("campoA").value);
    var campoB = parseInt(document.getElementById("campoB").value);

    // Verifica se B é maior que A
    if (campoB > campoA) {
        // Exibe mensagem positiva
        document.getElementById("message").innerText = "Formulário válido!";
        document.getElementById("message").style.display = "block";
        document.getElementById("errorMessage").style.display = "none";
    } else {
        // Exibe mensagem negativa
        document.getElementById("errorMessage").innerText = "Campo B deve ser maior que Campo A!";
        document.getElementById("errorMessage").style.display = "block";
        document.getElementById("message").style.display = "none";
    }
});
