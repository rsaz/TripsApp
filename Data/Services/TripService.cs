using System.Collections.Generic;
using System.Linq;

namespace tripsApp.Data
{
    public class TripService : ITripService
    {
        List<Trip> ITripService.GetAllTrips() => Data.Trips.ToList();
        Trip ITripService.GetTripById(int tripId) => Data.Trips.FirstOrDefault(n => n.Id == tripId);

        void ITripService.AddTrip(Trip trip)
        {
            Data.Trips.Add(trip);
        }

        void ITripService.DeleteTrip(int tripId)
        {
            var trip = Data.Trips.FirstOrDefault(n => n.Id == tripId);

            if (trip != null)
            {
                Data.Trips.Remove(trip);
            }
        }

        void ITripService.UpdateTrip(int tripId, Trip trip)
        {
            var oldTrip = Data.Trips.FirstOrDefault(n => n.Id == tripId);

            if (oldTrip != null)
            {
                oldTrip.Name = trip.Name;
                oldTrip.Description = trip.Description;
                oldTrip.DateStarted = trip.DateStarted;
                oldTrip.DateCompleted = trip.DateCompleted;
            }

        }
    }
}