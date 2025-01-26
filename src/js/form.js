document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('input'); // Seleciona todos os inputs
    const button = document.querySelector('.botao'); // Seleciona o botão de envio

    button.addEventListener('click', (e) => {
        let formIsValid = true;

        inputs.forEach(input => {
            const errorMessage = input.nextElementSibling; // Pega o <p> logo abaixo do input

            // Verifica se o campo está vazio
            if (input.value.trim() === "") {
                input.classList.remove("greenborder");
                input.classList.add("redborder");
                errorMessage.textContent = "campo obrigatório"; // Adiciona a mensagem de erro
                errorMessage.style.display = "block"; // Torna a mensagem visível
                formIsValid = false;
            } else {
                input.classList.remove("redborder");
                input.classList.add("greenborder");
                errorMessage.style.display = "none"; // Esconde a mensagem de erro quando preenchido
            }
        });

        // Se o formulário não for válido, impede o envio
        if (!formIsValid) {
            e.preventDefault(); // Impede o envio do formulário
        }
    });
});
