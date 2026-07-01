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

