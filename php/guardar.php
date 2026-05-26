<?php
include("conexion.php");

$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$contraseña = $_POST['contra'];

// Encriptar contraseña
$contraseñaHash = password_hash($contraseña, PASSWORD_DEFAULT);

$sql = "INSERT INTO tbl_usuarios (nombre, correo, contra)
VALUES ('$nombre', '$correo', '$contraHash')";

if ($conn->query($sql) === TRUE) {
    session_start();
    $_SESSION['nombre'] = $nombre;
    header("Location: ../html/guia.html"");
    exit();
} else {
    echo "Error: " . $conn->error;
}

$conn->close();
?>