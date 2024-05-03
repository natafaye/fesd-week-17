import { useEffect, useState } from "react"
import type { Appointment } from "../types"

export default function AppointmentsPage() {
    const [appointmentList, setAppointmentList] = useState<Appointment[]>([])

    useEffect(() => {
        const fetchAppointments = async () => {
            const response = await fetch("http://localhost:3005/appointments")
            const data = await response.json()
            setAppointmentList(data)
        }
        fetchAppointments()
    }, [])

    return (
        <div>
            <h3>Appointments</h3>
            <ul className="list-group">
                {appointmentList.map(appointment => (
                    <li key={appointment.id} className="list-group-item">
                        {appointment.start} {appointment.doctorId}
                    </li>
                ))}
            </ul>
        </div>
    )
}