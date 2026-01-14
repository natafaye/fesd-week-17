import { Params, useLoaderData } from "react-router"
import { Employee, Paycheck } from "../types"

export const employeeDetailsLoader = async ({ params }: { params: Params<"employeeId"> }) => {
    const response = await fetch("http://localhost:3000/employees/" + params.employeeId)
    const employee = await response.json()

    const responsePaychecks = await fetch("http://localhost:3000/paychecks")
    const allPaychecks = await responsePaychecks.json() as Paycheck[]
    const employeePaychecks = allPaychecks.filter(paycheck => paycheck.employeeId === employee.id)

    return {
        employee: employee,
        paychecks: employeePaychecks
    }
}

export default function EmployeeDetailsPage() {
    const { employee, paychecks } = useLoaderData() as { employee: Employee, paychecks: Paycheck[] }

    return (
        <div>
            <h2>{employee.name}</h2>
            <p>{employee.title}</p>
            <h6>Paychecks</h6>
            {paychecks.map(paycheck => <div key={paycheck.id}>{paycheck.amount}</div>)}
        </div>
    )
}