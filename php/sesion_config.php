<?php

session_set_cookie_params([
    'lifetime' => 60 * 60 * 24 * 7, // 7 días
    'path' => '/',
    'secure' => false
    'httponly' => true,
    'samesite' => 'Strict'
]);

session_start();