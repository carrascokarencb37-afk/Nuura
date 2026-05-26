
<?php
//Conexión a base de datos
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "bd_nuura";

//Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

//Verificar conexión
if ($conn->connect_error){
    die("Conexión fallida: " . $conn->connect_error);
}
?>