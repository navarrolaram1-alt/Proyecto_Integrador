
const proyectos = [
    {
        nombre: "Sistema de Turnos",
        descripcion:
            "Aplicación para gestionar turnos y pacientes."
    },
    {
        nombre: "BiblioSys",
        descripcion:
            "Sistema de gestión de biblioteca desarrollado para la facultad."
    },
    {
        nombre: "Calculadora Web",
        descripcion:
            "Calculadora realizada con HTML y CSS."
    }
];


function mostrarProyectos() {
    const contenedor = document.getElementById("contenedorProyectos");

    if (!contenedor) return;

   
    contenedor.innerHTML = "";

    proyectos.forEach(proyecto => {
        const tarjeta = document.createElement("article");

        tarjeta.classList.add("tarjeta-interna", "variante-2");
        // Guardamos el nombre en un atributo data-* para poder filtrar después
        tarjeta.dataset.nombre = proyecto.nombre.toLowerCase();

        const titulo = document.createElement("h3");
        titulo.textContent = proyecto.nombre;

        const descripcion = document.createElement("p");
        descripcion.textContent = proyecto.descripcion;

        tarjeta.appendChild(titulo);
        tarjeta.appendChild(descripcion);

        contenedor.appendChild(tarjeta);
    });
}
//funcion 2
function filtrarProyectos() {
    try {
        const input = document.getElementById("buscarProyecto");
        const mensaje = document.getElementById("mensajeBusqueda");
        const contenedor = document.getElementById("contenedorProyectos");

        if (!input || !contenedor) {
            throw new Error("No se encontró el buscador de proyectos.");
        }

        const texto = input.value.trim().toLowerCase();
        const tarjetas = contenedor.querySelectorAll(".tarjeta-interna");

        let coincidencias = 0;

        tarjetas.forEach(tarjeta => {
            const coincide =
                texto === "" || tarjeta.dataset.nombre.includes(texto);

            tarjeta.style.display = coincide ? "" : "none";

            if (coincide) coincidencias++;
        });

        if (mensaje) {
            if (texto === "") {
                mensaje.textContent = "";
            } else if (coincidencias === 0) {
                mensaje.textContent =
                    `No se encontraron proyectos para "${input.value}".`;
            } else {
                mensaje.textContent =
                    `${coincidencias} proyecto(s) encontrado(s).`;
            }
        }
    } catch (error) {
        alert(error.message);
    }
}

// Función 3: Validar formulario de contacto

function validarFormulario(e) {
    e.preventDefault();

    try {
        const nombre = document.getElementById("nombre");
        const email = document.getElementById("email");
        const mensaje = document.getElementById("mensaje");

        if (
            !nombre.value.trim() ||
            !email.value.trim() ||
            !mensaje.value.trim()
        ) {
            throw new Error("Complete todos los campos obligatorios.");
        }

        if (!email.value.includes("@")) {
            throw new Error("Ingrese un correo válido.");
        }

        alert("Formulario enviado correctamente.");

        e.target.reset();

        const contador = document.getElementById("contador");

        if (contador) {
            contador.textContent = "Caracteres: 0/300";
        }

    } catch (error) {
        alert(error.message);
    }
}


// Función 4: Contador de caracteres del mensaje

function contarCaracteres() {
    const mensaje = document.getElementById("mensaje");

    if (!mensaje) return;

    let contador = document.getElementById("contador");

    if (!contador) {
        contador = document.createElement("p");
        contador.id = "contador";
        mensaje.parentNode.appendChild(contador);
    }

    contador.textContent = `Caracteres: ${mensaje.value.length}/300`;
}


document.addEventListener("DOMContentLoaded", () => {

    // Mostrar proyectos automáticamente (index.html)
    mostrarProyectos();

    // Evento "click": buscar/filtrar proyectos
    const btnBuscar = document.getElementById("btnBuscarProyecto");
    if (btnBuscar) {
        btnBuscar.addEventListener("click", filtrarProyectos);
    }

    // Evento "keyup": permite filtrar también mientras se escribe
    const inputBuscar = document.getElementById("buscarProyecto");
    if (inputBuscar) {
        inputBuscar.addEventListener("keyup", filtrarProyectos);
    }

    // Eventos del formulario de contacto (contacto.html)
    const formulario = document.querySelector("form");

    if (formulario) {
        // Evento "submit": validar formulario
        formulario.addEventListener("submit", validarFormulario);

        const mensaje = document.getElementById("mensaje");

        if (mensaje) {
            // Evento "input": contar caracteres en tiempo real
            mensaje.addEventListener("input", contarCaracteres);
        }
    }
});