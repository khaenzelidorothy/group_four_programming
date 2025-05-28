Attractions = [
    {"id": 1, "name": "Museum of Art", "category": "Art", "crowdLevel": "low"},
    {"id": 2, "name": "City Park", "category": "Nature", "crowdLevel": "medium"},
    {"id": 3, "name": "Historical Site", "category": "History", "crowdLevel": "high"}
]

events = [
    {"date": "2025-05-21", "name": "Art Exhibition", "location": "Museum of Art"},
    {"date": "2025-05-22", "name": "Outdoor Concert", "location": "City Park"}
]

weather_forecast = {
    "2025-05-21": {"condition": "sunny", "temperature": 75},
    "2025-05-22": {"condition": "rainy", "temperature": 68}
}

def attractions(user_preferences):
    for attraction in Attractions:
        if attraction["category"] in user_preferences["interests"]:
            print (attraction)
attractions(user_preferences = {
    "interests": ["Art", "Nature"],
    "budget": 100
})
def local_events(date):
    for event in events :
        if event["date"] == date:
            return [event]
def weather(date):
    return weather_forecast[date]

def is_attraction_available(attraction, weather):
        if attraction["crowdLevel"] == "high" and weather["condition"] == "rainy":
            return false

def itinerary(user_preferences, travel_dates):
    itinerary = []

    for date in travel_dates:
        daily_plan = {"date": date, "activities": []}
        available_attractions = attractions(user_preferences)
        local_events = local_events(date)
        weather = weather(date)

        if local_events:
            daily_plan["activities"].extend(local_events)

        for attraction in available_attractions:
            if is_attraction_available(attraction, weather):
                daily_plan["activities"].append(attraction)

        daily_plan["route"] = optimize_route(daily_plan["activities"])
        itinerary.append(daily_plan)

    return itinerary

def route_optimization(activities):
    return activities 