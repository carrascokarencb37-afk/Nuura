<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js"></script>

const supabaseUrl = 'https://trfupybydxgmcozqwpak.supabase.co';
const supabaseKey = '';

const client = supabase.createClient(supabaseUrl, supabaseKey);


//INICIAR SESION
async function iniciarSesion() {

    const correo = document.getElementById('correo').value;
    const contra = document.getElementById('contra').value;
    
    const { data, error } = await client.auth.signInWithPassword({
        email: correo,
        password: contra

    });
    if (error) {
        console.error('Error al iniciar sesión:', error.message);
        alert('Error al iniciar sesión: ' + error.message);
    }else {
        alert('Bienvenido ' + data.user.email);
        window.location.href = 'index.html';
    }
}



//REGISTRARSE
async function registrar() {
    
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const contra = document.getElementById('contra').value;

    const { data, error } = await client.auth.signUp({
        email: correo,
        password: contra
    });

    if (error) {
        console.error('Error al registrarse:', error.message);
        alert('Error al registrarse: ' + error.message);
    } else {
        alert('Usuario registrado con éxito: ' + data.user.email);
        window.location.href = 'index.html';
    }

    await client.from('tbl_usuario').insert(
        { 
            id_usuario: data.user.id,
            nombre: nombre
        });
}