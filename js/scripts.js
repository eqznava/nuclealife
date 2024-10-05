document.addEventListener('DOMContentLoaded', function() {
    // Selecciona todos los contenedores de preguntas
    const questionContainers = document.querySelectorAll('.questionsContainerTwo > div');

    questionContainers.forEach(container => {
        // Selecciona el enlace y la respuesta dentro del contenedor
        const question = container.querySelector('a');
        const answer = container.nextElementSibling;

        // Verificar que el siguiente elemento sea un párrafo (la respuesta)
        if (answer && answer.tagName.toLowerCase() === 'p') {
            // Añadir el evento de clic al enlace
            question.addEventListener('click', function(event) {
                event.preventDefault(); // Prevenir que el enlace redirija

                // Alternar la visibilidad de la respuesta
                answer.classList.toggle('show');
            });
        }
    });
});
