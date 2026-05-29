//Aqui está el código para mostrar la contraseña en el input de iniciar sesión
function mostrarContra() {
    const input = document.getElementById('contra');
    if (input.type === 'password') {
        input.type = 'text';
    }else {
        input.type = 'password';
    }
    
}