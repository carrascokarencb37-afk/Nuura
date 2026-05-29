<?php
include("conexion.php");
include("sesion_config.php");

if(isset($_POST['id_guia']) && isset($_SESSION['usuario_id'])){

    $id_usuario = $_SESSION['usuario_id'];
    $id_guia = $_POST['id_guia']; // <-- faltaba esta línea

    $sql = "INSERT INTO tbl_guarda (id_usuario, id_guia)
            VALUES (?, ?)";

    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ii", $id_usuario, $id_guia);

    if($stmt->execute()){
        header("Location: guia.php");
        exit();
    } else {
        echo "Error al guardar";
    }

} else {
    echo "Faltan datos";
    var_dump($_POST);
    var_dump($_SESSION);
}
?>