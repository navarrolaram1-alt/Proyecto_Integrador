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

// Mostrar proyectos dinámicamente
function mostrarProyectos() {
    const contenedor = document.getElementById(
        "contenedorProyectos"
    );

    if (!contenedor) return;

    proyectos.forEach(proyecto => {
        const tarjeta =
            document.createElement("article");

        tarjeta.classList.add(
            "tarjeta-interna",
            "variante-2"
        );

        const titulo =
            document.createElement("h3");
        titulo.textContent =
            proyecto.nombre;

        const descripcion =
            document.createElement("p");
        descripcion.textContent =
            proyecto.descripcion;

        tarjeta.appendChild(titulo);
        tarjeta.appendChild(descripcion);

        contenedor.appendChild(tarjeta);
    });
}

// Validar formulario
function validarFormulario(e) {
    e.preventDefault();

    try {
        const nombre =
            document.getElementById("nombre");

        const email =
            document.getElementById("email");

        const mensaje =
            document.getElementById("mensaje");

        if (
            !nombre.value.trim() ||
            !email.value.trim() ||
            !mensaje.value.trim()
        ) {
            throw new Error(
                "Complete todos los campos obligatorios."
            );
        }

        if (!email.value.includes("@")) {
            throw new Error(
                "Ingrese un correo válido."
            );
        }

        alert(
            "Formulario enviado correctamente."
        );

        e.target.reset();

        const contador =
            document.getElementById(
                "contador"
            );

        if (contador) {
            contador.textContent =
                "Caracteres: 0/300";
        }

    } catch (error) {
        alert(error.message);
    }
}

// Contador de caracteres
function contarCaracteres() {
    const mensaje =
        document.getElementById("mensaje");

    if (!mensaje) return;

    let contador =
        document.getElementById(
            "contador"
        );

    if (!contador) {
        contador =
            document.createElement("p");

        contador.id = "contador";

        mensaje.parentNode.appendChild(
            contador
        );
    }

    contador.textContent =
        `Caracteres: ${mensaje.value.length}/300`;
}

// Esperar a que cargue el HTML
document.addEventListener(
    "DOMContentLoaded",
    () => {

        // Mostrar proyectos automáticamente
        mostrarProyectos();

        // Eventos del formulario
        const formulario =
            document.querySelector("form");

        if (formulario) {
            formulario.addEventListener(
                "submit",
                validarFormulario
            );

            const mensaje =
                document.getElementById(
                    "mensaje"
                );

            if (mensaje) {
                mensaje.addEventListener(
                    "input",
                    contarCaracteres
                );
            }
        }
    }
);