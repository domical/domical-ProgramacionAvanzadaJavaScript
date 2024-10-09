import { Leon, Lobo, Aguila, Oso, Serpiente } from './Animales.js';

(() => {
    const btnRegistrar = document.getElementById('btnRegistrar');
    btnRegistrar.addEventListener('click', async () => {
        const animalSelect = document.getElementById('animal').value;
        const edadSelect = document.getElementById('edad').value;
        const comentario = document.getElementById('comentarios').value;

        if (!animalSelect || !edadSelect) {
            alert('Por favor, complete todos los campos.');
            return;
        }

        let animalInstance;
        switch (animalSelect) {
            case 'Leon':
                animalInstance = new Leon(edadSelect);
                break;
            case 'Lobo':
                animalInstance = new Lobo(edadSelect);
                break;
            case 'Aguila':
                animalInstance = new Aguila(edadSelect);
                break;
            case 'Oso':
                animalInstance = new Oso(edadSelect);
                break;
            case 'Serpiente':
                animalInstance = new Serpiente(edadSelect);
                break;
        }

        animalInstance.Comentario = comentario;
        await agregarAnimalATabla(animalInstance);
        resetFormulario();
    });
})();

async function agregarAnimalATabla(animal) {
    const animalesDiv = document.getElementById('Animales');
    const animalDiv = document.createElement('div');
    animalDiv.className = 'animal-card';
    animalDiv.innerHTML = `
        <img src="${animal.img}" alt="${animal.Nombre}" style="width: 100px; cursor: pointer;" onclick="mostrarDetalle('${animal.Nombre}')"/>
        <p>${animal.Nombre} - ${animal.Edad}</p>
        <button onclick="reproducirSonido('${animal.Nombre}')">Reproducir sonido</button>
    `;
    animalesDiv.appendChild(animalDiv);
}

function reproducirSonido(nombre) {
    const animal = obtenerAnimalPorNombre(nombre);
    animal.reproducirSonido();
}

function mostrarDetalle(nombre) {
    const animal = obtenerAnimalPorNombre(nombre);
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = `
        <h5>${animal.Nombre}</h5>
        <p>Edad: ${animal.Edad}</p>
        <p>Comentario: ${animal.Comentario}</p>
        <img src="${animal.img}" alt="${animal.Nombre}" style="width: 100%;" />
    `;
    const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
    modal.show();
}

// Función para resetear el formulario
function resetFormulario() {
    document.getElementById('animal').selectedIndex = 0;
    document.getElementById('edad').selectedIndex = 0;
    document.getElementById('comentarios').value = '';
}


function obtenerAnimalPorNombre(nombre) {
}