<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js"></script>

const supabaseUrl = 'https://trfupybydxgmcozqwpak.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRyZnVweWJ5ZHhnbWNvenF3cGFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg4MTgzNDcsImV4cCI6MjA5NDM5NDM0N30.SNexC4W6M6Tz78g-0IE_STfhhweA37ykcqruSaT2n_M';

const client = supabase.createClient(supabaseUrl, supabaseKey);


//INICIAR SESION
async function iniciarSesion() {

    const correo = document.getElementById('correo').value;
    const contra = document.getElementById('contra').value;
    
    const { data, error } = await client.auth.signInWithPassword({
        email: correo,
        password: contra
    })
    if (error) {
        console.error('Error al iniciar sesión:', error.message);
        alert('Error al iniciar sesión: ' + error.message);
    }
}

s

//REGISTRARSE
async function registrar() {
    
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const contra = document.getElementById('contra').value;

    const { data, error } = await client.from('tbl_usuario').insert([
        {
            nombre: nombre,
            email: correo,
            password: contra
        }
    ]);
    if (error){
        console.log(error);
        alert("Error");
    } else {
        alert("Usuario registrado");
    }
}