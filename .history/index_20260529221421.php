<?php
include("php/sesion_config.php");
?>

<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>Nuura - Principal</title>

    <link rel="stylesheet" href="css/style.css" />
    <link rel="stylesheet" href="css/index.css" />
    <link rel="icon" href="img/Nuura.png" type="png" />

    <script src="js/menu.js" defer></script>
  </head>
  <body>
    <div class="todo">
      <div class="cuadro">
        <div class="nuura">
          <img
            src="img/logo_azul.png"
            alt="Logo de nombre"
            class="imagen"
          />
          <h1 class="texto">
            Nuura busca ser una ayuda para la comunidad haciendo conciencia y
            dándole a todos la oportunidad de participar en reducir la
            contaminación
          </h1>
        </div>
      </div>

      <nav class="principal">
        <?php if(isset($_SESSION['usuario_id'])): ?>

            <h3 class="textoE"> ¡Bienvenido, <?php echo htmlspecialchars($_SESSION['nombre']); ?>!</h3>
            <a class="botonE" href="php/guia.php">Ir a la guía</a>
            <a class="botonE" href="php/cerrarsesion.php">Cerrar sesión</a>

        <?php else: ?>

            <h3 class="textoE">Conoce Nuura</h3>
            <a class="botonE" href="html/iniciarsesion.html">Iniciar sesión</a>
            <a class="botonE" href="html/registrarse.html">Registrarse</a>

        <?php endif; ?>

      </nav>
    </div>
  </body>
</html>