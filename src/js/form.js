document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('input'); // Seleciona todos os inputs

    inputs.forEach(input => {
        input.addEventListener('input', () => { // Detecta mudanças enquanto o usuário digita
            if (input.value.trim() !== "") {
                input.classList.remove("redborder");
                input.classList.add("greenborder");
            } else {
                input.classList.remove("greenborder");
                input.classList.add("redborder");
            }
        });
    });
});
