import { useEffect, useState } from "react"
import type { Doctor } from "../types"
import { useNavigate } from "react-router-dom"

export default function SchedulePage() {
    const [doctorList, setDoctorList] = useState<Doctor[]>([])
    const [values, setValues] = useState({
        doctorId: undefined,
        start: (new Date).toISOString().split('.')[0]
    })

    const navigate = useNavigate()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
        setValues({ ...values, [event.target.name]: event.target.value })

    useEffect(() => {
        const fetchAppointments = async () => {
            const response = await fetch("http://localhost:3005/doctors")
            const data = await response.json()
            setDoctorList(data)
        }
        fetchAppointments()
    }, [])

    const onCreateClick = async (event: React.MouseEvent) => {
        event.preventDefault() // prevent refresh

        if(values.doctorId === undefined) {
            // Nice validation here
            return
        }

        const newAppointment = {
            start: values.start,
            doctorId: parseInt(values.doctorId)
        }

        await fetch("http://localhost:3005/appointments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newAppointment)
        })

        navigate("/appointments")
    }

    return (
        <div>
            <h3>New Appointment</h3>
            <form>
                <label className="form-label">Doctor:</label>
                <select name="doctorId" onChange={handleChange} value={values.doctorId} className="form-select">
                    {doctorList.map(doctor =>
                        <option key={doctor.id} value={doctor.id}>{doctor.name}</option>
                    )}
                </select>
                <label className="form-label mt-3">Date & Time:</label>
                <input name="start" onChange={handleChange} value={values.start} type="datetime-local" className="form-control" />
                <button
                    type="submit"
                    className="btn btn-success btn-lg mt-3"
                    onClick={onCreateClick}
                >
                    Create
                </button>
            </form>
        </div>
    )
}