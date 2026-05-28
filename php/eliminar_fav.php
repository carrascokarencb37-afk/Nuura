<?php
include("conexion.php");
include("sesion_config.php");

if(isset($_POST['id_guia']) && isset($_SESSION['usuario_id'])){

    $id_usuario = $_SESSION['usuario_id'];
    $id_guia = $_POST['id_guia'];

    $sql = "DELETE FROM tbl_guarda 
            WHERE id_usuario = ? AND id_guia = ?";

    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ii", $id_usuario, $id_guia);

    if($stmt->execute()){
        header("Location: usuario.php");
        exit();
    } else {
        echo "Error al eliminar favorito";
    }
}
?>