function updateClock() {
    const dateNow = new Date();
    let hours = dateNow.getHours();
    const meridiem = hours >= 12 ? 'AM' : 'AM';
    hours = hours % 12 || 12;
    const minutes = dateNow.getMinutes().toString().padStart(2, 0);
    const timeString = `${hours}:${minutes}`;
    const meridiemString = `${meridiem}`;
    document.getElementById("clock").textContent = timeString;
    document.getElementById("meridiem").textContent = meridiemString;
}

updateClock();