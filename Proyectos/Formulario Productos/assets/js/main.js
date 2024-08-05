
$(document).ready(function(){

    var tablaCatalogo = [];

    function limpiarErrores() {
        $("#msj-producto, #msj-precio-producto, #msj-cantidad-producto").html("")
    }

    function limpiarFormulario() {
        $("#select-producto, #precio-producto, #cantidad-producto").val("")
    }

    function listarFilas(tabla) {
        $("tbody").html("");
        var indice = 0;
        var total = 0;
        while (indice < tabla.length) {
            $("tbody").append(`
                <tr>                
                    <td>${tabla[indice].producto}</td>                    
                    <td class="text-end">${tabla[indice].cantidad_producto}</td>
                    <td class="text-end">${tabla[indice].precio_producto}</td>
                    <td class="text-end">${tabla[indice].subtotal}</td>
                </tr>
                `)
            total = total + tabla[indice].subtotal
            indice = indice + 1
        }
        $("#total-catalogo").html("Total: "+total);
    }

    $("form").submit(function(event){
        event.preventDefault();
        
        var producto = $("#select-producto").val();
        var precioProducto = Number($("#precio-producto").val());
        var cantidadProducto = Number($("#cantidad-producto").val());

        if (producto == "") {
            $("#msj-select-producto").html("Seleccione el producto")
        }

        if (precioProducto == "") {
            $("#msj-precio-producto").html("Ingrese el precio")
        }

        if (cantidadProducto == "") {
            $("#msj-cantidad-producto").html("Ingrese una cantidad")
        }

        var catalogo = {
            producto: producto,
            precio_producto: precioProducto,
            cantidad_producto: cantidadProducto,
            subtotal: precioProducto*cantidadProducto
        }

        

        tablaCatalogo.push(catalogo);

        listarFilas(tablaCatalogo);
        //console.log(catalogo);
        
        limpiarFormulario();
        //console.log(precioProducto);
        //console.log(cantidadProducto);
    })
});