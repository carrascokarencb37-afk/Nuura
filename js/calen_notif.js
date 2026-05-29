// Solicitar permiso para notificaciones al cargar la página
if (Notification.permission !== "granted" && Notification.permission !== "denied") {
    Notification.requestPermission();
}

function mostrarNotificacion(planta) {
    if (Notification.permission === "granted") {
        new Notification("🌿 Recordatorio NUURA", {
            body: `💧 Es momento de regar tu ${planta}`,
            icon: "../img/Nuura.png", // Ajusta la ruta de tu ícono
            badge: "../img/Nuura.png"
        });
    }
}

function revisarRiegoHoy() {
    // Si no hay fechas de riego, no hacer nada
    if (typeof fechasRiego === 'undefined' || fechasRiego.length === 0) {
        console.log("No hay fechas de riego calculadas aún");
        return false;
    }
    
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0); // Normalizar hora para comparación
    
    const esHoy = fechasRiego.some(fecha => {
        const fechaRiego = new Date(fecha);
        fechaRiego.setHours(0, 0, 0, 0);
        return fechaRiego.getTime() === hoy.getTime();
    });
    
    if (esHoy) {
        const plantaSelect = document.getElementById("flor");
        const planta = plantaSelect.options[plantaSelect.selectedIndex]?.text || "tu planta";
        mostrarNotificacion(planta);
        return true;
    }
    return false;
}

// Función para programar verificaciones periódicas
function iniciarVerificadorRiego() {
    // Verificar al cargar la página
    setTimeout(() => revisarRiegoHoy(), 1000);
    
    // Verificar cada hora si hay que regar hoy (por si cambia el día)
    setInterval(() => revisarRiegoHoy(), 60 * 60 * 1000);
    
    // Verificar específicamente a las 9:00 AM, 12:00 PM y 6:00 PM
    const ahora = new Date();
    const horasRevision = [9, 12, 18]; // 9am, 12pm, 6pm
    
    horasRevision.forEach(hora => {
        let tiempoHastaHora = new Date();
        tiempoHastaHora.setHours(hora, 0, 0, 0);
        
        if (tiempoHastaHora < ahora) {
            tiempoHastaHora.setDate(tiempoHastaHora.getDate() + 1);
        }
        
        const tiempoEspera = tiempoHastaHora - ahora;
        setTimeout(() => {
            revisarRiegoHoy();
            // Programar para todos los días a esta hora
            setInterval(() => revisarRiegoHoy(), 24 * 60 * 60 * 1000);
        }, tiempoEspera);
    });
}

// Sobrescribir la función calcularRiego original para que también revise notificaciones
// Guardar referencia a la función original
const calcularRiegoOriginal = window.calcularRiego;

// Crear nueva función que incluya la verificación de notificaciones
window.calcularRiego = function() {
    if (calcularRiegoOriginal) {
        calcularRiegoOriginal();
    }
    // Después de calcular, revisar si hoy es día de riego
    revisarRiegoHoy();
};

// Iniciar verificador cuando la página carga
document.addEventListener("DOMContentLoaded", () => {
    iniciarVerificadorRiego();
});