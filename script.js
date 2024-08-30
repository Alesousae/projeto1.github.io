function armazenarValor(){



    //armazena o valor que o usuário digitou
    var userInput = document.getElementById("userInput").value;

    //exibe o valor armazenado
    console.log("Parabéns voce clicou no botão: " + userInput);

    //atualiza o conteúdo
    document.getElementById("valorInserido").innerText = "Parabéns voce clicou no botão: " + userInput;
    
}