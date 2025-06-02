class Flight {
    constructor(id, priority, type) {
        this.id = id;
        this.priority = priority;
        this.type = type;
    }
}
function scheduleFlights(flights) {
    flights.sort((a, b) => a.priority - b.priority);
    flights.forEach(flight => {
        console.log(`Processing flight ${flight.id} (${flight.type}) with priority ${flight.priority}`);
    });
}
const flights = [
    new Flight("VIP001", 1, "landing"),
    new Flight("EMG002", 0, "landing"),
    new Flight("REG003", 3, "takeoff"),
    new Flight("REG004", 2, "landing")
];
scheduleFlights(flights);