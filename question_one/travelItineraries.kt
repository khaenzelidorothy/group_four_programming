data class Attraction(val name: String, val category: String)
data class Event(val name: String, val date: String)
data class DailyPlan(val date: String, val activities: MutableList<String> = mutableListOf())

fun main() {
    val attractions = listOf(
        Attraction("Music", "Music Competition"),
        Attraction("Dancing", "Dancing Competition"),

        )

    val events = listOf(
        Event("Music Competition", "2025-06-11"),
        Event("Dance Competition", "2025-07-18")
    )


    val userInterests = listOf("Music Competition", "Dance Competition")
    val travelDates = listOf("2025-06-11", "2025-06-18")

    val itinerary = generateItinerary(userInterests, travelDates, attractions, events)

    for (day in itinerary) {
        println("Date: ${day.date}")
        println("Activities: ${day.activities.joinToString(", ")}")
        println()
    }
}

fun generateItinerary(interests: List<String>, dates: List<String>, attractions: List<Attraction>, events: List<Event>): List<DailyPlan> {
    val itinerary = mutableListOf<DailyPlan>()

    for (date in dates) {
        val dailyPlan = DailyPlan(date)
        for (event in events) {
            if (event.date == date) {
                dailyPlan.activities.add(event.name)
            }
        }

        for (attraction in attractions) {
            if (attraction.category in interests) {
                dailyPlan.activities.add(attraction.name)
            }
        }

        itinerary.add(dailyPlan)
    }

    return itinerary
}