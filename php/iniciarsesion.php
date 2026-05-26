<?php
include("conexion.php");

// Verificar que los datos existan
if (!isset($_POST['correo'], $_POST['contra'])) {
    die("Faltan datos");
}

$correo = $_POST['correo'];
$contra = $_POST['contra'];

$sql = "SELECT * FROM tbl_usuarios WHERE correo = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $correo);
$stmt->execute();
$resultado = $stmt->get_result();

if ($resultado->num_rows > 0) {
    $usuario = $resultado->fetch_assoc();

    if (password_verify($contra, $usuario['contra'])) {
        header("Location: ../html/guia.html");
        exit();
    } else {
        echo "Contraseña incorrecta";
    }
} else {
    echo "Usuario no encontrado";
}

$stmt->close();
$conn->close();
?>