
class Flight:
    def __init__(self, id, priority, type):
        self.id = id
        self.priority = priority
        self.type = type  
    def __lt__(self, other):
        return self.priority < other.priority
def schedule_flights(flights):
    heapq.heapify(flights)
    while flights:
        flight = heapq.heappop(flights)
        print(f"Processing flight {flight.id} ({flight.type}) with priority {flight.priority}")
flights = [
    Flight("VIP001", 1, "landing"),
    Flight("EMG002", 0, "landing"),
    Flight("REG003", 3, "takeoff"),
    Flight("REG004", 2, "landing")
]
schedule_flights(flights)