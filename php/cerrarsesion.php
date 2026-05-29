<?php

include("sesion_config.php");

session_unset();
session_destroy();

header("Location: ../html/iniciarsesion.html");
exit();