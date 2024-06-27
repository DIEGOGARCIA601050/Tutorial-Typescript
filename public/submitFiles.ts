const form = document.getElementById('imageForm') as HTMLElement;
function handleImageUpload(event: SubmitEvent): void {
    event.preventDefault(); // Evita el envío del formulario por defecto
  
    const imageInput = document.getElementById('imageInput') as HTMLInputElement;
    const file:File|undefined = imageInput.files?.[0]; // Obtiene el archivo seleccionado
  
    // Verifica si se seleccionó un archivo
    if (file) {
      // Crea un objeto URL para la imagen
      const imageUrl = URL.createObjectURL(file);
  
      // Crea un nuevo elemento <img>
      const imageElement = document.createElement('img') as HTMLImageElement;
      imageElement.src = imageUrl;
      imageElement.alt = file.name;
  
      // Agrega la imagen al DOM
      document.body.appendChild(imageElement);
    }
  }
  

form.addEventListener('submit', handleImageUpload);
