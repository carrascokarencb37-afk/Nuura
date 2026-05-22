<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js"></script>

const supabaseUrl = 'https://trfupybydxgmcozqwpak.supabase.co';
const supabaseKey = 'sb_publishable_CxM4HostaaVYhh8uIXM8Qw_U3r3ccTR';

const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);


//INICIAR SESION
async function iniciarSesion() {

    const correo = document.getElementById('correo').value;
    const contra = document.getElementById('contra').value;
    
    if (!correo || !contra) {
        alert('Por favor, ingresa tu correo electrónico y contraseña.');
        return;
    }

    const { data, error } = await supabaseClient.auth.signInWithPassword({
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

    if (!nombre || !correo || !contra) {
        alert('Por favor, completa todos los campos para registrarte.');
        return;
    }

    const { data: authData, error: authError } = await supabaseClient.auth.signUp({
        email: correo,
        password: contra
    });

    if (authError) {
        console.error('Error al registrarse:', authError.message);
        alert('Error al registrarse: ' + authError.message);
        return;

    }
    if(authData.user) {
        const{ data: insertData, error: insertError } = await supabaseClient
        .from('tbl_usuario')
        .insert({
            id_usuario: authData.user.id,
            nombre: nombre,
            email: correo
        });

    if (insertError) {
        console.error('Error al insertar datos del usuario:', insertError.message);
        alert('Error al guardar los datos del usuario: ' + insertError.message);
    } else {
        alert('¡Usuario registrado con éxito! Bienvenido: ' + nombre);
        window.location.href = 'index.html';
        }
    }
}