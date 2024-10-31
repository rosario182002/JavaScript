function validarFormulario() {
    // Obtener los valores de los campos
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Obtener los elementos de error para mostrar mensajes
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
     // Limpiar mensajes previos
     emailError.textContent = "";
     passwordError.textContent = "";

     // Validaciones
     let esValido = true;

     if (!emailRegex.test(email)) {
       emailError.textContent = "Ingrese un correo electrónico válido.";
       esValido = false;
     }

     if (password.length < 8) {
       passwordError.textContent = "La contraseña debe tener al menos 8 caracteres.";
       esValido = false;
     }

     // Redirección si es válido
     if (esValido) {
       window.location.href = "https://ceu.es";
     }
   }