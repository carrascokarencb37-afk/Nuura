<?php
include("conexion.php");

if (!isset($_POST['nombre'], $_POST['correo'], $_POST['contra'])) {
    die("Faltan datos");
}

$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$contra = $_POST['contra'];

// Encriptar contraseña
$contraHash = password_hash($contra, PASSWORD_DEFAULT);

$sql = "INSERT INTO tbl_usuarios (nombre, correo, contra)
VALUES ('$nombre', '$correo', '$contraHash')";

if ($conn->query($sql) === TRUE) {
    session_start();
    $_SESSION['nombre'] = $nombre;
    header("Location: ../html/guia.html");
    exit();
} else {
    echo "Error: " . $conn->error;
}

$conn->close();
?>