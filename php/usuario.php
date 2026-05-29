<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nuura - Usuario</title>
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/usuario.css">
    <script src="../js/menu.js" defer></script>
    <link rel="icon" href="../img/Nuura.png" type="png">
</head>
<body>
    <h1>Mi perfil</h1>

    <div class="favoritas-container">
    <h2>Mis plantas</h2>

    <div class="grid-favoritas">

        <?php
        include("conexion.php");
        include("sesion_config.php");

        $id_usuario = $_SESSION['usuario_id'];

        $sql = "SELECT g.*
                FROM tbl_guias g
                INNER JOIN tbl_guarda gu 
                ON g.id_guia = gu.id_guia
                WHERE gu.id_usuario = ?";

        $stmt = $conn->prepare($sql);
        $stmt->bind_param("i", $id_usuario);
        $stmt->execute();

        $resultado = $stmt->get_result();

        while($planta = $resultado->fetch_assoc()){
        ?>

        <a href="../html/guiaPlant/planta<?php echo $planta['id_guia']; ?>.html"
           class="card-favorita">

            <img src="<?php echo $planta['imagen_planta']; ?>"
                 alt="<?php echo $planta['nombre_planta']; ?>">

            <h4><?php echo $planta['nombre_planta']; ?></h4>

            <form action="eliminar_fav.php" method="POST">
                <input type="hidden" name="id_guia" value="<?php echo $fila['id_guia']; ?>">
                <button type="submit" class="btn-eliminar">Quitar</button>
            </form>

        </a>

        <?php } ?>

    </div>
</div>


</body>
</html>