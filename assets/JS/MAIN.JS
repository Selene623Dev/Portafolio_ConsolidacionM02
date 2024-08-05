$(document).ready(function () {
  
    function limpiarErrores() {
      $("#msg-nombre, #msg-apellido, #msg-email, #msg-telefono").html("")
    }
  
    function limpiarFormulario() {
      $("#txt-nombre, #txt-apellido, #txt-email, #txt-telefono").val("")
    }
  
    $("#formulario").submit(function (evento) {
      evento.preventDefault();
  
      limpiarErrores()
  
      var nombre = $("#txt-nombre").val();
      var apellido = $("#txt-apellido").val();
      var email = $("#txt-email").val();
      var telefono = $("#txt-telefono").val();
  
      if (nombre == "") {
        return $("#msg-nombre").html("Ingrese el nombre");
      }
  
      if (apellido == "") {
        return $("#msg-apellido").html("Ingrese el apellido");
      }
  
      if (email == "") {
        return $("#msg-email").html("Ingrese el correo electrónico");
      }
      if (telefono == "") {
        return $("#msg-telefono").html("Ingrese el teléfono");
      }
  
      limpiarFormulario()
  
  
  
    })
  
  })