export default function NewAppointmentPage() {
  return (
    <div>
        <h2>New Appointment</h2>
        <form>
            <div className="htmlForm-group">
                <label htmlFor="name">Full Name:</label>
                <input type="text" id="name" name="name" required/>
            </div>
            <div className="htmlForm-group">
                <label htmlFor="make">Vehicle Make:</label>
                <input type="text" id="make" name="make" required/>
            </div>
            <div className="htmlForm-group">
                <label htmlFor="model">Vehicle Model:</label>
                <input type="text" id="model" name="model" required/>
            </div>

            <div className="htmlForm-group">
                <label htmlFor="appointment_date">Preferred Appointment Date:</label>
                <input type="date" id="appointment_date" name="appointment_date" required/>
            </div>
            <div className="htmlForm-group">
                <label htmlFor="appointment_time">Preferred Appointment Time:</label>
                <input type="time" id="appointment_time" name="appointment_time" required/>
            </div>

            <div className="htmlForm-group">
                <button type="submit">Schedule Appointment</button>
            </div>
        </form>
    </div>
  )
}