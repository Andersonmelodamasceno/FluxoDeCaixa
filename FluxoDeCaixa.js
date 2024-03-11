function criarModal(modalId, modalTitle, modalContent) {
    // Crie o elemento modal
    var modal = document.createElement('div');
    modal.className = 'modal fade';
    modal.id = modalId;
    modal.tabIndex = -1;
    modal.setAttribute('aria-labelledby', modalId + 'Label');
    modal.setAttribute('aria-hidden', 'true');

    // Crie a estrutura interna do modal
    modal.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title fs-5" id="${modalId}Label">${modalTitle}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    ${modalContent}
                </div>
            </div>
        </div>
    `;

    // Adicione o modal ao corpo do documento
    document.body.appendChild(modal);

    // Inicialize o modal usando o Bootstrap
    var modalInstance = new bootstrap.Modal(document.getElementById(modalId));
    return modalInstance;
}

// Função para mostrar o modal
function mostrarModal(modalId) {
    var modalInstance = criarModal(modalId, 'Modal Title', 'Modal Content');
    modalInstance.show();
}
//modelbanco
function mostrarModalBanco() {
    var modalBanco = new bootstrap.Modal(document.getElementById('modalBanco'));
    modalBanco.show();
}
