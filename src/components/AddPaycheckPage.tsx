import { MouseEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useLoaderData, useNavigate } from "react-router";
import { Employee } from "../types";

export const employeesLoader = async () => {
  const response = await fetch("http://localhost:3000/employees")
  return await response.json()
}

export default function AddPaycheckPage() {
  const [employeeIdValue, setEmployeeIdValue] = useState("")
  const [amountValue, setAmountValue] = useState("100")
  const [dateValue, setDateValue] = useState("1/13/26")

  const employees = useLoaderData() as Employee[]

  const navigate = useNavigate()

  const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()

    // Collecting the data from the form
    const newPaycheck = {
      employeeId: parseInt(employeeIdValue) || 0,
      amount: parseInt(amountValue),
      date: dateValue
    }

    // Sending it to the backend
    fetch("http://localhost:3000/paychecks", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPaycheck)
    })

    // For this exact setup, we don't need to change any state on the frontend

    // Navigate to the Paychecks Page
    navigate("/paychecks")
  }

  return (
    <div className="w-50">
      <h2>New Paycheck</h2>
      <form>
        <Form.Group className="mb-3" controlId="employee-dropdown">
          <Form.Label>Employee</Form.Label>
          <Form.Control 
            as="select" 
            className="form-select"
            value={employeeIdValue}
            onChange={(event) => setEmployeeIdValue(event.target.value)}
          >
            { employees.map(employee => <option key={employee.id} value={employee.id}>{employee.name}</option>)}
          </Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="amount-text">
          <Form.Label>Amount</Form.Label>
          <Form.Control type="number"
            value={amountValue}
            onChange={(event) => setAmountValue(event.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="date-text">
          <Form.Label>Date</Form.Label>
          <Form.Control type="text"
            value={dateValue}
            onChange={(event) => setDateValue(event.target.value)}/>
        </Form.Group>
        <Button onClick={handleSubmit}>Create</Button>
      </form>
    </div>
  )
}