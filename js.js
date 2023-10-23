document.addEventListener("DOMContentLoaded", function() {
    
    let form = document.querySelector("form");
    let modal = document.getElementById("modalErrores");
    let closeBtn = document.querySelector(".close-btn");
    let textoErrores = document.getElementById("textoErrores");

    form.addEventListener("submit", function(event) {
        let errores = [];
        
        let emailInput = form.querySelector("[name='Email']");
        let usernameInput = form.querySelector("[name='Usuario']");
        let passwordInput = form.querySelector("[name='Contraseña']");
        let confirmPasswordInput = form.querySelector("[name='ConfirmarContraseña']");
        let password = passwordInput.value;
        let confirmPassword = confirmPasswordInput.value;

        // Validación de email
        let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailRegex.test(emailInput.value)) {
            errores.push("Email inválido.");
        }

        // Validación de caracteres especiales en el nombre de usuario
        let usernameRegex = /^[a-zA-Z0-9]*$/;
        if (!usernameRegex.test(usernameInput.value)) {
            errores.push("El nombre de usuario contiene caracteres no permitidos.");
        }

        // Validación de coincidencia de contraseñas
        if (password !== confirmPassword) {
            errores.push("Las contraseñas no coinciden.");
        }

        if(errores.length > 0) {
            event.preventDefault();
            textoErrores.innerHTML = errores.join("<br>");
            modal.style.display = "block";
        }
    });

    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if(event.target == modal) {
            modal.style.display = "none";
        }
    });
});
