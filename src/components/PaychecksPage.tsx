import { useLoaderData } from "react-router"
import { Paycheck } from "../types"

export const paychecksLoader = async () => {
  const response = await fetch("http://localhost:3000/paychecks")
  return await response.json()
}

export default function PaychecksPage() {
  const paychecks = useLoaderData() as Paycheck[]

  return (
    <div>
      <h2>Paychecks</h2>
      { paychecks.map(paycheck => (
        <div key={paycheck.id}>
          {paycheck.date} - {paycheck.amount}
        </div>
      ))}
    </div>
  )
}