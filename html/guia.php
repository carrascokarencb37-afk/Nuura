<?php
include("../php/sesion_config.php");

if (!isset($_SESSION['usuario_id'])) {
    header("Location: iniciarsesion.html");
    exit();
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nuura - Guía de flores</title>
    <link rel="stylesheet" href="../css/style.css">
    <script src="../script/menu.js" defer></script>
    <link rel="icon" href="../img/Nuura.png" type="png">
</head>
<body class="guia">
    <h1>Flores 🌸</h1>

    <div class="menu_container">

    <div class="menu_container">

        <div class="card">
            <a href="guiaPlant/planta1.html"> 
                <img class="foto" src="../img/plantas/coronita.jpg"> 
            </a>
            <h3>Corona de Cristo</h3>
            <p>Muchas flores y árboles se marchitan en el invierno, mientras que el
                corona de Cristo no es derrotado por las heladas. Todavía es agradable
                a la vista con flores tiernas y encantadoras. Con forma de mariposa, la
                pequeña flor está hecha de dos pétalos, y luego forma un pequeño racimo,
                verde en verano y rojo en invierno.</p>
        </div>


        <div class="card">
            <a href="guiaPlant/planta2.html">
                <img class="foto" src="../img/plantas/duranta.jpg"> 
            </a>
            <h3>Duranta</h3>
        <p>La cultura detrás de la Duranta ( Duranta erecta ) se centra en su papel como
            planta ornamental de protección, símbolo de prosperidad y pilar ecológico nativo 
            de las Américas.</p>
        </div>

        <div class="card">
            <a href="guiaPlant/planta3.html">
                <img class="foto" src="../img/plantas/rosaDesierto.jpg">
            </a>
            <h3>Rosa del desierto</h3>
            <p> En la cultura china, se le conoce como fuguihua , que significa "flor de la prosperidad". 
                Según el Feng Shui, florecer esta planta atrae buena fortuna, riqueza y abundancia al hogar</p>
        </div>


        <div class="card">
            <a href="guiaPlant/planta4.html">
                <img class="foto" src="../img/plantas/pervinca.jpg">
            </a>
            <h3>Pervinca rosa</h3>
            <p>La flor de la pervinca (también conocida como vinca) simboliza la fidelidad, el amor eterno y los 
                recuerdos entrañables . Culturalmente, sus cinco pétalos se asocian con cinco principios de la vida: 
                amor, riqueza, felicidad, memoria y paz</p>
        </div>

        <div class="card">
            <a href="guiaPlant/planta5.html">
                <img class="foto" src="../img/plantas/capuchina.jpg">
            </a>
            <h3>Capuchina</h3>
            <p>Los antiguos incas valoraban esta flor como planta medicinal (para tratar infecciones respiratorias y 
                curar heridas) y como alimento. También fue adoptada en culturas mesoamericanas para decorar y honrar 
                a sus deidades.</p>
        </div>

        <div class="card">
            <a href="guiaPlant/planta6.html">
                <img class="foto" src="../img/plantas/ruda.jpg">
            </a>
            <h3>Ruda</h3>
            <p> se centra en el misticismo, la protección espiritual y la medicina tradicional . Originaria del 
                Mediterráneo, ha sido considerada un símbolo universal de purificación y buena suerte desde civilizaciones 
                antiguas como Grecia y Roma.</p>
        </div>

        <div class="card">
            <a href="guiaPlant/planta7.html">
                <img class="foto" src="../img/plantas/trompillo.jpg">
            </a>
            <h3>Trompillo</h3>
            <p>En el lenguaje floral tradicional, las flores con forma de trompeta o estrella (como el trompillo) 
                simbolizan el afecto, la ternura y el cariño . Por su color azul lavanda o morado, se 
                asocia también con la paz, la calma y el aprecio sincero hacia los seres queridos.</p>
        </div>

        <div class="card">
            <a href="guiaPlant/planta8.html">
                <img class="foto" src="../img/plantas/jazmin.jpg">
            </a>
            <h3>Jazmín azul</h3>
            <p>Según la leyenda, en la antigüedad, un soldado y una princesa se enamoraron el uno del otro, y el soldado tuvo que irse a 
                pelear en una guerra. Con la crueldad de la guerra, el soldado nunca regresó. La princesa que perdió su amor decidió suicidarse,
                y un parche de jazmín azul floreció en el lugar donde murió.</p>
        </div>

        <div class="card">
            <a href="guiaPlant/planta9.html">
                <img class="foto" src="../img/plantas/pascua.jpg">
            </a>
            <h3>Flor de Pascua</h3>
            <p>los aztecas la llamaban cuetlaxóchitl y simbolizaba la pureza y la nueva vida para los guerreros caídos. Hoy en día, esta planta
                es un emblema universal de la Navidad, representando esperanza, buena suerte y renovación.</p>
        </div>

        <div class="card">
            <a href="guiaPlant/planta10.html">
                <img class="foto" src="../img/plantas/bigotillo.jpg">
            </a>
            <h3>Bigotillo</h3>
            <p>Se cuenta que cuenta que el bigotillo fue originalmente un hada. Al bajar a la Tierra y ver cómo los aldeanos 
                sufrían y morían sin recursos, comenzó a sanarlos incansablemente. Trabajó con tanta devoción que enfermó y murió, transformándose en 
                esta flor para seguir beneficiando y alegrando a la gente.</p>

    </div>
</body>
</html>