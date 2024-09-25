import { useEffect, useState } from "react"

type Appointment = {
    id: string
    repairType: string
}

export default function AppointmentsPage() {
    const [appointmentList, setAppointmentList] = useState<Appointment[]>([])
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const response = await fetch("http://localhost:3000/appointments")

                if (!response.ok) {
                    setError("Error: " + response.statusText)
                }
                else {

                    const data = await response.json()
                    setAppointmentList(data)
                    setError("")
                }
            } catch (error: any) {
                setError("Error: " + error.message)
            }
            setLoading(false)
        }

        fetchData() // is it a little silly? probably
    }, []) // empty means it runs once (or twice in development mode) after the first render

    return (
        <div>
            My Appointments
            {loading && <div>Loading...</div>}
            {error && <div>Error</div>}
            {appointmentList.map(appointment => (
                <div key={appointment.id}>
                    {appointment.repairType}
                </div>
            ))}
        </div>
    )
}