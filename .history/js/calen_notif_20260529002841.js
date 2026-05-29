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