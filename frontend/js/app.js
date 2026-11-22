// URL base de la API
const API_URL = "http://localhost:8080/articulos";

// Manejadores de eventos
document.getElementById("form-articulo").addEventListener("submit", guardarArticulo);

document.getElementById("btnBuscar").addEventListener("click", buscarArticuloPorId);

document.getElementById("btnBuscarNombre").addEventListener("click", buscarArticulosPorNombre);

document.getElementById("btnMostrarTodos").addEventListener("click", () => {
    document.getElementById("buscarId").value = "";
    document.getElementById("buscarNombre").value = "";
    listarArticulos();
});

document.getElementById("btnLimpiar").addEventListener("click", limpiarVista);

document.getElementById("cancelar").addEventListener("click", () => {
    document.getElementById("form-articulo").reset();
    document.getElementById("idArticulo").value = "";
});


// === Limpiar la vista de resultados ===
function limpiarVista() {
    document.getElementById("tabla-articulos").innerHTML = "";
    document.getElementById("contenedorListado").style.display = "none";

    document.getElementById("buscarId").value = "";
    document.getElementById("buscarNombre").value = "";
}


// === Mostrar artículos en la tabla ===
function mostrarArticulos(articulos) {
    const tbody = document.getElementById("tabla-articulos");
    const contenedor = document.getElementById("contenedorListado");

    tbody.innerHTML = "";
    contenedor.style.display = "block";

    articulos.forEach(articulo => {
        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${articulo.id}</td>
            <td>${articulo.nombre}</td>
            <td>${Number(articulo.precio).toFixed(2)}</td>
            <td>
                <button class="btn btn-editar btn-sm">Editar</button>
                <button class="btn btn-eliminar btn-sm">Eliminar</button>
            </td>
        `;

        fila.querySelector(".btn-editar").addEventListener("click", () => {
            editarArticulo(articulo.id);
        });

        fila.querySelector(".btn-eliminar").addEventListener("click", () => {
            eliminarArticulo(articulo.id);
        });

        tbody.appendChild(fila);
    });
}


// === Listar todos los artículos ===
function listarArticulos() {
    fetch(API_URL)
        .then(response => {
            if (!response.ok) {
                throw new Error("Error al obtener los artículos");
            }
            return response.json();
        })
        .then(data => {
            mostrarArticulos(data);
        })
        .catch(error => console.error("Error al listar artículos:", error));
}


// === Buscar un artículo por ID ===
function buscarArticuloPorId() {
    const id = document.getElementById("buscarId").value;
    document.getElementById("buscarId").value = "";

    if (!id) {
        alert("Ingrese un ID.");
        return;
    }

    fetch(`${API_URL}/${id}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`No se encontró ningún artículo con el código ${id}.`);
            }
            return response.json();
        })
        .then(articulo => {
            if (!articulo) {
                throw new Error(`No se encontró ningún artículo con el código ${id}.`);
            }

            mostrarArticulos([articulo]);
        })
        .catch(error => {
            document.getElementById("contenedorListado").style.display = "none";
            alert(error.message);
        });
}


// === Buscar artículos por nombre ===
function buscarArticulosPorNombre() {
    const termino = document.getElementById("buscarNombre").value.trim().toLowerCase();

    if (!termino) {
        alert("Ingrese un nombre o parte del nombre.");
        return;
    }

    fetch(API_URL)
        .then(response => {
            if (!response.ok) {
                throw new Error("Error al obtener los artículos");
            }
            return response.json();
        })
        .then(data => {
            const encontrados = data.filter(articulo =>
                articulo.nombre.toLowerCase().includes(termino)
            );

            if (encontrados.length === 0) {
                document.getElementById("contenedorListado").style.display = "none";
                alert("No se encontraron artículos con ese nombre.");
                return;
            }

            mostrarArticulos(encontrados);
        })
        .catch(error => alert(error.message));
}


// === Guardar o actualizar un artículo ===
function guardarArticulo(event) {
    event.preventDefault();

    const id = document.getElementById("idArticulo").value;
    const nombre = document.getElementById("nombre").value.trim();
    const precio = parseFloat(document.getElementById("precio").value);

    if (!nombre || isNaN(precio) || precio < 0) {
        alert("Por favor complete correctamente los campos.");
        return;
    }

    const articulo = { nombre, precio };
    const url = id ? `${API_URL}/${id}` : API_URL;
    const metodo = id ? "PUT" : "POST";

    fetch(url, {
        method: metodo,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(articulo)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("Error al guardar");
            }
            return response.json();
        })
        .then(() => {
            document.getElementById("form-articulo").reset();
            document.getElementById("idArticulo").value = "";
            listarArticulos();
        })
        .catch(error => console.error("Error al guardar artículo:", error));
}


// === Cargar artículo en el formulario para edición ===
function editarArticulo(id) {
    fetch(`${API_URL}/${id}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Error al obtener el artículo");
            }
            return response.json();
        })
        .then(articulo => {
            if (!articulo) {
                throw new Error("El artículo no existe.");
            }

            document.getElementById("idArticulo").value = articulo.id;
            document.getElementById("nombre").value = articulo.nombre;
            document.getElementById("precio").value = articulo.precio;
        })
        .catch(error => console.error("Error al obtener artículo:", error));
}


// === Eliminar un artículo ===
function eliminarArticulo(id) {
    if (confirm("¿Deseás eliminar este artículo?")) {
        fetch(`${API_URL}/${id}`, {
            method: "DELETE"
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Error al eliminar");
                }
                listarArticulos();
            })
            .catch(error => console.error("Error al eliminar artículo:", error));
    }
}