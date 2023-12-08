function DateTimePicker() {
  return (
    <>
      {/* DateTime Picker */}
      <div className="col-md-6">
        <form>
          {/* PICK-UP LOCATION */}
          <div className="form-group">
            <label htmlFor="pickupLocation">PICK-UP LOCATION</label>
            <input
              type="text"
              className="form-control"
              id="pickupLocation"
              placeholder="City, Airport, Station, etc"
            />
          </div>

          {/* DROP-OFF LOCATION */}
          <div className="form-group">
            <label htmlFor="dropoffLocation">DROP-OFF LOCATION</label>
            <input
              type="text"
              className="form-control"
              id="dropoffLocation"
              placeholder="City, Airport, Station, etc"
            />
          </div>

          {/* PICK-UP DATE */}
          <div className="form-group">
            <label htmlFor="pickupDate">PICK-UP DATE</label>
            <input type="date" className="form-control" id="pickupDate" />
          </div>

          {/* DROP-OFF DATE */}
          <div className="form-group">
            <label htmlFor="dropoffDate">DROP-OFF DATE</label>
            <input type="date" className="form-control" id="dropoffDate" />
          </div>

          {/* PICK-UP TIME */}
          <div className="form-group">
            <label htmlFor="pickupTime">PICK-UP TIME</label>
            <input type="time" className="form-control" id="pickupTime" />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary">
            Book Now
          </button>
        </form>
      </div>
    </>
  );
}

export default DateTimePicker;
