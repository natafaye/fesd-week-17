import { useEffect, useState } from "react"
import type { Employee } from "../types"
import { Link } from "react-router"

export default function EmployeesPage() {
    const [employees, setEmployees] = useState<Employee[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:3000/employees")
            const data = await response.json()
            setEmployees(data)
        }
        fetchData()
    }, []) // empty dependency array tells it to run once when the comoponent first loads in (twice in dev mode)

    return (
        <div>
            <h3>Employees</h3>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Title</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(employee =>
                        <tr key={employee.id}>
                            <td>{employee.name}</td>
                            <td>{employee.title}</td>
                            <td><Link to={"/employees/" + employee.id}>Details</Link></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}