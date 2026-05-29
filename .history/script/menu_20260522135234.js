fetch('../html/menu.html')
    .then(res => res.text())
    .then(data=> {

        document.getElementById('menu_container').innerHTML = data;

        const desp =
    document.querySelector('.menu_desp');
    const menu =
    document.querySelector('.cont_botones');
    
    console.log(desp);
    
    desp.addEventListener('click', () => {
        menu.classList.toggle('act');
    });

    const links =
    document.querySelectorAll('.boton');
            const rutAct =
    window.location.pathname;
    
            links.forEach(link => {
                const href =
    link.getAttribute('href');
    
                if (rutAct.endsWith(href)) {
    link.classList.add('activo');

            const img =
    link.querySelector('img');
                if(img) {
                    const src =
    img.getAttribute('src');
                        img.setAttribute('src',
    src.replace('.png', '_click.png'));
                }
                }
            });
});

//Aqui está el código para mostrar la contraseña en el input de iniciar sesión
function mostrarContra() {
    const input = document.getElementById('contra');
    if (input.type === 'password') {
        input.type = 'text';
    }else {
        input.type = 'password';
    }
    
}