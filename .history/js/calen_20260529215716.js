
//es como decir, regar cada X días
const flores = {
    rosa: 5,
    jazmin: 1,

    corona: 3,
    duranta: 2,

    pervinca: 1,
    capuchina: 1,
    ruda: 2,
    trompillo: 1,

    pascua: 2,
    bigotillo: 2
};

// Variable para guardar las fechas de riego actuales
let fechasRiego = [];

function calcularRiego() {
    const flor = document.getElementById("flor").value;
    const diasRiego = flores[flor];
    
    if (!diasRiego) {
        document.getElementById("resultado").innerHTML = "<p style='color:red'>Flor no encontrada</p>";
        return;
    }
    
    let hoy = new Date();
    let resultado = "";
    fechasRiego = []; // Limpiar fechas anteriores
    
    for(let i = 0; i <= 5; i++) {
        let fecha = new Date();
        fecha.setDate(hoy.getDate() + (diasRiego * i));
        fechasRiego.push(fecha);
        
        resultado += `
        <p>💧 Riego ${i}: ${fecha.toLocaleDateString()}</p>
        `;
    }
    
    document.getElementById("resultado").innerHTML = resultado;
    
    // Actualizar el calendario con los días de riego
    actualizarCalendarioRiegos();

    //prueba de notificacion:
    alert("Prueba de recordatorio de riego");
}

// Variables globales para el calendario
let fechaActual = new Date();
let currentMonth = fechaActual.getMonth();
let currentYear = fechaActual.getFullYear();

function actualizarCalendario() {
    const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const monthYearHeader = document.getElementById("monthYear");
    
    if (monthYearHeader) {
        monthYearHeader.textContent = `${monthNames[currentMonth]} ${currentYear}`;
    }
    
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const startDay = firstDayOfMonth.getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    
    const calendarDates = document.getElementById("calendarDates");
    if (!calendarDates) return;
    
    calendarDates.innerHTML = "";
    
    // Agregar días vacíos antes del primer día del mes
    for (let i = 0; i < startDay; i++) {
        const emptyDiv = document.createElement("div");
        calendarDates.appendChild(emptyDiv);
    }
    
    // Agregar los días del mes
    const today = new Date();
    const isCurrentMonth = (today.getMonth() === currentMonth && today.getFullYear() === currentYear);
    
    for (let day = 1; day <= daysInMonth; day++) {
        const dayDiv = document.createElement("div");
        dayDiv.textContent = day;
        
        // Marcar el día actual
        if (isCurrentMonth && day === today.getDate()) {
            dayDiv.classList.add("today");
        }
        
        // Marcar días de riego
        if (fechasRiego.length > 0) {
            const fechaComparar = new Date(currentYear, currentMonth, day);
            const esDiaRiego = fechasRiego.some(fechaRiego => 
                fechaRiego.getDate() === fechaComparar.getDate() &&
                fechaRiego.getMonth() === fechaComparar.getMonth() &&
                fechaRiego.getFullYear() === fechaComparar.getFullYear()
            );
            
            if (esDiaRiego) {
                dayDiv.classList.add("riego-day");
                dayDiv.title = "💧 Día de regar";
            }
        }
        
        calendarDates.appendChild(dayDiv);
    }
}

function mesAnterior() {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    actualizarCalendario();
}

function mesSiguiente() {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    actualizarCalendario();
}

function actualizarCalendarioRiegos() {
    actualizarCalendario();
}

// Inicializar cuando la página carga
document.addEventListener("DOMContentLoaded", () => {
    actualizarCalendario();
});


// Asegurar que las funciones sean globales
window.calcularRiego = calcularRiego;
window.mesAnterior = mesAnterior;
window.mesSiguiente = mesSiguiente;
window.fechasRiego = fechasRiego;