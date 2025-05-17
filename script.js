function mostrarModal(plano) {
    const modal = document.getElementById("modal");
    const modalTitulo = document.getElementById("modal-titulo");
    const modalTexto = document.getElementById("modal-texto");

    modal.style.display = "block";

    switch (plano) {
        case "plano1":
            modalTitulo.textContent = "Plano Básico";
            modalTexto.textContent = "Você escolheu o Plano Básico, com mensalidade de R$ 59,00. Clique em fechar para continuar navegando.";
            break;
        case "plano2":
            modalTitulo.textContent = "Plano Intermediário";
            modalTexto.textContent = "Você escolheu o Plano Intermediário, com mensalidade de R$ 99,00. Clique em fechar para continuar navegando.";
            break;
        case "plano3":
            modalTitulo.textContent = "Plano Completo";
            modalTexto.textContent = "Você escolheu o Plano Completo, com mensalidade de R$ 139,00. Clique em fechar para continuar navegando.";
            break;
        default:
            modalTitulo.textContent = "Plano Indefinido";
            modalTexto.textContent = "Plano não identificado. Clique em fechar para continuar navegando.";
    }
}

function fecharModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}