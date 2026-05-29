if (Notification.permission !== "granted") {
    Notification.requestPermission();
}

function mostrarNotificacion(planta) {

    if (Notification.permission === "granted") {

        new Notification("🌿 Recordatorio NUURA", {
            body: `Es momento de regar tu ${planta} 💧`,
            icon: "img/planta.png"
        });

    }

}

function revisarRiegoHoy() {

    const hoy = new Date();

    const esHoy = fechasRiego.some(fecha =>

        fecha.getDate() === hoy.getDate() &&
        fecha.getMonth() === hoy.getMonth() &&
        fecha.getFullYear() === hoy.getFullYear()

    );

    if (esHoy) {

        const planta = document.getElementById("flor").value;

        mostrarNotificacion(planta);

    }

}