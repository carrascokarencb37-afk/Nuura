<?php
include("conexion.php");

$correo = $_POST['correo'];
$contrasena = $_POST['contra'];

$sql = "SELECT * FROM tbl_usuarios WHERE correo='$correo'";
$resultado = $conn->query($sql);

if ($resultado->num_rows > 0) {

    $usuario = $resultado->fetch_assoc();

    if (password_verify($contraseña, $nombre['contra'])) {
        header("Location: ../html/guia.html");
        exit();
    } else {
        echo "Contraseña incorrecta";
    }

} else {
    echo "Usuario no encontrado";
}

$conn->close();
?>