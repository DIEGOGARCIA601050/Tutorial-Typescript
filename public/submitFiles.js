"use strict";
const form = document.getElementById('imageForm');
function handleImageUpload(event) {
    var _a;
    event.preventDefault(); // Evita el envío del formulario por defecto
    const imageInput = document.getElementById('imageInput');
    const file = (_a = imageInput.files) === null || _a === void 0 ? void 0 : _a[0]; // Obtiene el archivo seleccionado
    // Verifica si se seleccionó un archivo
    if (file) {
        // Crea un objeto URL para la imagen
        const imageUrl = URL.createObjectURL(file);
        // Crea un nuevo elemento <img>
        const imageElement = document.createElement('img');
        imageElement.src = imageUrl;
        imageElement.alt = file.name;
        // Agrega la imagen al DOM
        document.body.appendChild(imageElement);
    }
}
form.addEventListener('submit', handleImageUpload);
