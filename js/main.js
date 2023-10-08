// PRODUCTOS//

const productos = [

    {
        id: "bisagra-simple",
        titulo: "Bisagra Simple",
        imagen: "../assets/img/bisagra_simple1.jpg",
        categoria: {
            nombre: "Bisagras",
            id: "bisagras"
        },
        precio: 1100
    },
    {
        id: "bisagra-municion",
        titulo: "Bisagra Munición",
        imagen: "../assets/img/bisagra_municion2.jpg",
        categoria: {
            nombre: "Bisagras",
            id: "bisagras"
        },
        precio: 1400
    },
    {
        id: "bisagra-carrocero",
        titulo: "Bisagra Carrocero",
        imagen: "../assets/img/bisagra_carrocero3.jpg",
        categoria: {
            nombre: "Bisagras",
            id: "bisagras"
        },
        precio: 1200
    },
    {
        id: "bisagra-forjada",
        titulo: "Bisagra Forjada",
        imagen: "../assets/img/bisagra_forjada4.jpg",
        categoria: {
            nombre: "Bisagras",
            id: "bisagras"
        },
        precio: 2500
    },
    {
        id: "bisagra-muebles",
        titulo: "Bisagra de Muebles",
        imagen: "../assets/img/bisagra_muebles5.jpg",
        categoria: {
            nombre: "Bisagras",
            id: "bisagras"
        },
        precio: 1300
    },
    {
        id: "bisagra-pomelas",
        titulo: "Bisagra Pomelas",
        imagen: "../assets/img/bisagra_pomelas6.jpg",
        categoria: {
            nombre: "Bisagras",
            id: "bisagras"
        },
        precio: 1400
    }

];

const contenedorProductos = document.querySelector("#contenedor-productos");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


function cargarProductos(productosElegidos) {

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id=${producto.id}>Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);

    })
    actualizarBotonesAgregar();
    console.log(botonesAgregar);
}

cargarProductos(productos);

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    })

}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

 if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {     
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if (productosEnCarrito.some(producto => producto.id === idBoton)) {

        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;

    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;

}
