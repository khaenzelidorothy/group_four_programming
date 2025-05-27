
const attractions = [
    { id: 1, name: " Nairobi GamePark", category: "Park", crowdLevel: "low" },
    { id: 2, name: "Nairobi Museam", category: "Art", crowdLevel: "medium" },
    { id: 3, name: "Bomas of Kenya", category: "Historical", crowdLevel: "high" }
];

const events = [
    { date: "2025-08-12", name: "Art Exhibition", location: "Nairobi Museum" },
    { date: "2025-02-22", name: "Concert", location: "Uhuru Park" }
];

const weatherForecast = {
    "2025-05-21": { condition: "sunny", temperature: 70 },
    "2025-05-22": { condition: "rainy", temperature: 48 }
};

function fetchAttractions(userPreferences) {
    return attractions.filter(attraction => 
        userPreferences.interests.includes(attraction.category)
    );
}
function fetchLocalEvents(date) {
    return events.filter(event => event.date === date);
}
function fetchWeather(date) {
    return weatherForecast[date];
}
function generateItinerary(userPreferences, travelDates) {
    let itinerary = [];
    travelDates.forEach(date => {
        let dailyPlan = {
            date: date,
            activities: []
        };
        const availableAttractions = fetchAttractions(userPreferences);
        const localEvents = fetchLocalEvents(date);
        const weather = fetchWeather(date);
        if (localEvents.length > 0) {
            dailyPlan.activities.push(...localEvents);
        }
        availableAttractions.forEach(attraction => {
            if (isAttractionAvailable(attraction, weather)) {
                dailyPlan.activities.push(attraction);
            }
        });
        dailyPlan.route = optimizeRoute(dailyPlan.activities);
        itinerary.push(dailyPlan);
    });

    return itinerary;
}
function isAttractionAvailable(attraction, weather) {
    return (attraction.crowdLevel !== "high" || weather.condition !== "rainy");
}
function optimizeRoute(activities) {
    let activities = ["dance","biking","skiing"]
    return activities; 
}
const userPreferences = {
    interests: ["Art", "Nature"],
    budget: 100
};

// const travelDates = ["2025-05-21", "2025-05-22"];
// const itinerary = generateItinerary(userPreferences, travelDates);
// console.log(itinerary);

