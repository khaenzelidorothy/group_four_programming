data class Flight(val id: String, val priority: Int, val type: String)
fun scheduleFlights(flights: List<Flight>) {
    val queue = PriorityQueue(compareBy<Flight> { it.priority })
    queue.addAll(flights)
    while (queue.isNotEmpty()) {
        val flight = queue.poll()
        println("Processing flight ${flight.id} (${flight.type}) with priority ${flight.priority}")
    }
}
fun main() {
    val flights = listOf(
        Flight("VIP001", 1, "landing"),
        Flight("EMG002", 0, "landing"),
        Flight("REG003", 3, "takeoff"),
        Flight("REG004", 2, "landing")
    )
    scheduleFlights(flights)
}