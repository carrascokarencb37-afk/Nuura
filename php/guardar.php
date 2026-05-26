<?php
include("conexion.php");
include("sesion_config.php");

if (!isset($_POST['nombre'], $_POST['correo'], $_POST['contra'])) {
    die("Faltan datos");
}

$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$contra = $_POST['contra'];

// Encriptar contraseña
$contraHash = password_hash($contra, PASSWORD_DEFAULT);

$sql = "INSERT INTO tbl_usuarios (nombre, correo, contra)
VALUES (?, ?, ?)";

$_SESSION['usuario_id'] = $conn->insert_id;

$stmt = $conn->prepare($sql);
$stmt->bind_param("sss", $nombre, $correo, $contraHash);

if ($stmt->execute()) {

    session_regenerate_id(true);

    $_SESSION['nombre'] = $nombre;

    header("Location: ../html/guia.php");
    exit();

} else {
    echo "Error: " . $stmt->error;
}

$conn->close();
?>