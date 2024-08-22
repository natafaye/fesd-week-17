import { useEffect, useState } from "react"
import { Dropdown, DropdownButton } from "react-bootstrap"

type Appointment = {
    id: string
    customerName: string
    carMake: string
    carModel: string
    repairType: string
    appointmentDate: string
    appointmentTime: string
    status: "Scheduled" | "Cancelled" | "Completed"
}

export default function Dashboard() {
    const [appointmentList, setAppointmentList] = useState<Appointment[]>([])

    // Hey don't do this right now that would freeze up the page for 2 seconds
    useEffect(() => {
        const fetchAppointments = async () => {
            const response = await fetch("http://localhost:3000/appointments")
            const data = await response.json()
            setAppointmentList(data)
        }
        fetchAppointments()
    }, []) // run only once when the component is loaded in

    const updateStatus = (appointmentId: string, newStatus: "Scheduled" | "Cancelled" | "Completed") => {
        // update on the backend
        fetch("http://localhost:3000/appointments/" + appointmentId, {
            method: "PATCH", // PATCH = fancy update
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ status: newStatus }) // the updated data
        })
        // update on the frontend
        const nextAppointmentList = appointmentList.map((appointment) => {
            if (appointment.id === appointmentId) {
                return { ...appointment, status: newStatus }
            } else {
                return appointment
            }
        });
        setAppointmentList(nextAppointmentList)
    }

    return (
        <div>
            <h2>Appointments</h2>
            <table className="table table-striped">
                <tbody>
                    {appointmentList.map(appointment => (
                        <tr key={appointment.id}>
                            <td>{appointment.customerName}</td>
                            <td>{appointment.appointmentDate} {appointment.appointmentTime}</td>
                            <td>{appointment.status}</td>
                            <td>
                                <DropdownButton id="dropdown-basic-button" title="Update Status">
                                    <Dropdown.Item
                                        as="button"
                                        onClick={() => updateStatus(appointment.id, "Completed")}
                                    >
                                        Mark Completed
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        as="button"
                                        onClick={() => updateStatus(appointment.id, "Cancelled")}
                                    >
                                        Mark Cancelled
                                    </Dropdown.Item>
                                </DropdownButton>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}