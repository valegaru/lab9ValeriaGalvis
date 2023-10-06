document.addEventListener('DOMContentLoaded', function () {
    const app = document.getElementById('app');

    //Cajón de comentario y sus elementos
    const commentBox = document.createElement('div');
    commentBox.classList.add('comment-box');

    const profileImage = document.createElement('div');
    profileImage.classList.add('profile-image');
    profileImage.innerHTML = '<img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="Imagen de perfil">';

    const commentInput = document.createElement('div');
    commentInput.classList.add('comment-input');
    commentInput.innerHTML = '<textarea id="comment-textarea" placeholder="¿Qué estás pensando, Andrea?"></textarea>';

    commentBox.appendChild(profileImage);
    commentBox.appendChild(commentInput);

    // Agregar el cajón de comentario al contenedor 'app'
    app.appendChild(commentBox);

    //click al espacio de comentarios para abrir el modal
    const commentTextArea = document.getElementById('comment-textarea');
    commentTextArea.addEventListener('click', function () {
        openModal();
    });

    function openModal() {
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `
            <div class="modal-content-square">
                <div class="modal-title">
                    Crear publicación
                    <button id="modal-close-button">X</button>
                </div>
                <hr>
                <div class="profile-info">
                    <div class="profile-image-modal">
                        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="">
                    </div>
                    <div class="profile-name">Andrea Andrade</div>
                </div>
                <input id="input-inside" type="text" placeholder="¿Qué estás pensando, Andrea?" >
                <button id="publish-button" class="publish-button" active>Publicar</button>
            </div>
        `;

        app.appendChild(modal);

        // Click para cerrar el modal
        const modalCloseButton = document.getElementById('modal-close-button');
        modalCloseButton.addEventListener('click', function () {
            closeModal();
        });

        function closeModal() {
            app.removeChild(modal);
        }


        // Para activar el boton, no funciona
        inputInside.addEventListener('input', function () {
            if (inputInside.value.trim() === '') {
                publishButton.classList.remove('active');
            } else {
                publishButton.classList.add('active');
            }
        });

        // Agregar evento de clic al botón de "Publicar"
        publishButton.addEventListener('click', function () {
            publishComment();
        });

        
        function publishComment() {
            const commentText = inputInside.value.trim();
            if (commentText !== '') {
                // Crear un elemento para mostrar el comentario debajo del comment-box original
                const commentElement = document.createElement('div');
                commentElement.classList.add('comment');
                commentElement.textContent = commentText;

                // Agregar el comentario al DOM debajo del comment-box original
                app.insertBefore(commentElement, commentBox.nextSibling);

                // Cerrar el modal y restablecer el input y el botón
                closeModal();
                inputInside.value = '';
                publishButton.classList.remove('active');
            }
        }
    }
});