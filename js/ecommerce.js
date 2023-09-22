let carrito = [];

function agregarCarrito (e){

    console.log("Producto agregado al carrito", e.target);

    let hijo = e.target;
    let padre = hijo.parentNode;
    let abuelo = padre.parentNode;



    let nombreProducto = padre.querySelector("h5").innerText;
 

    let precioProducto = padre.querySelector("span").innerText;


    let imgProducto = abuelo.querySelector("img").src;


    let producto = {
        nombre: nombreProducto,
        precio: precioProducto,
        img: imgProducto,
        cantidad:1
    };

    carrito.push(producto);

    
    mostrarCarrito();

}

function mostrarCarrito(){

    let tabla = document.getElementById("tbody");

    tabla.innerHTML = "";

     for ( let producto of carrito ){

         let fila = document.createElement("tr");
         fila.innerHTML = `<td><img src="${producto.img}"></td>
                           <td><p>${producto.nombre}</p></td>
                           <td>${producto.cantidad}</td>
                           <td>${producto.precio}</td>
                           <td><button class="btn btn-danger btnBorrarProducto">Borrar</button></td>`;
         tabla.append(fila);

     }

     let btnBorrar = document.querySelectorAll(".btnBorrarProducto");

     for( let btn of btnBorrar ){
         btn.addEventListener("click" , borrarProducto );
     }

}

function borrarProducto(e){
    console.log("BORRAR ESTE ELEMENTO: ", e.target );

    let abuelo = e.target.parentNode.parentNode;
    let productoEliminar = abuelo.querySelector("p").innerText;
    console.log(productoEliminar);
    abuelo.remove();

    
    function eliminarProducto( producto ){
        return producto.nombre != productoEliminar
    }

    let resultadoFilter = carrito.filter( eliminarProducto );
    carrito = resultadoFilter
    console.log(resultadoFilter)

}


//EVENTOS

let btnCompra = document.querySelectorAll(".botonCompra");

console.log(btnCompra);


for( let boton of btnCompra ){

    boton.addEventListener("click" , agregarCarrito)
}
