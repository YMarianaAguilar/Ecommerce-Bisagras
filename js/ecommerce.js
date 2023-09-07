


class Bisagra{

    constructor( nombre , precio , stock ){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    get_datos(){
        console.log("<-- BISAGRA -->");
        console.log("Nombre: ", this.nombre);
        console.log("Precio: ", this.precio);
        console.log("Stock: ", this.stock);
        console.log("");
    }

    get_stock(){
        if ( this.stock <= 0) {
            return false
        }
        else{
            return true
        }
    }

    update_stock( unidades ){
        
        if (this.stock >= unidades ) {
            this.stock = this.stock - unidades;
            return true
        }
        else{
            console.log("No tenemos tanto stock");
            console.log("Stock disponible: ", this.stock);
            return false
        }
    }

}


let listaBisagras = []

listaBisagras.push( new Bisagra("Bisagras 1842", 880 , 7))
listaBisagras.push( new Bisagra("Carrocera", 750 , 8))
listaBisagras.push( new Bisagra("Municion", 900 , 9))
listaBisagras.push( new Bisagra("Escalera", 720 , 8))
listaBisagras.push( new Bisagra("Pestaña", 830 , 5))

console.log("LISTA DE BISAGRAS");

for( let bisagra of listaBisagras ){

    bisagra.get_datos();

}

function buscarBisagra( bisagra ){

    return bisagra.nombre == compraUsuario

}

let compraUsuario = "";

while ( compraUsuario != "FIN") {
    compraUsuario = prompt("Ingrese el nombre de la bisagra que desee comprar");

    if ( compraUsuario != "FIN") {
        
            let resultado_find = listaBisagras.find( buscarBisagra );

            if ( resultado_find != undefined ) {
                
                    if ( resultado_find.get_stock() ) {
                        
                        let unidades = parseInt(prompt("¿Cuántas unidades desea comprar?"));

                        if ( resultado_find.update_stock( unidades )) {
                            console.log("Gracias por su compra");

                            for( let bisagra of listaBisagras ){

                                if ( bisagra.stock > 0 ) {
                                    bisagra.get_datos();
                                }
                            }
                        }
                    }
            }
            else{
                console.log("Bisagra no encontrada: ", compraUsuario);
            }
    }

}