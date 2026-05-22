<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js"></script>

const supabaseUrl = 'https://trfupybydxgmcozqwpak.supabase.co';
const supabaseKey = '';

const client = supabase.createClient(supabaseUrl, supabaseKey);

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