import { useEffect, useState } from "react"
import type { ListItem } from "../../types"
import PlanItem from "./PlanItem"

export default function PlanningPage() {
  const [groceryList, setGroceryList] = useState<ListItem[]>([])
  const [deletedList, setDeletedList] = useState<ListItem[]>([])

  useEffect(() => { // Option 1 for data fetching
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/grocery")
      const data = await response.json()
      setGroceryList(data)
    }
    fetchData()
  })

  const handleDelete = async (listItem: ListItem) => {
    // delete from the frontend
    setGroceryList(groceryList.filter(item => item.id !== listItem.id))
    // add to that temporary deleted list
    setDeletedList([...deletedList, listItem])
    // delete from the backend
    await fetch("http://localhost:3000/grocery/" + listItem.id, { method: "DELETE" })
  }

  return (
    <div>
      <h4>Planning</h4>
      <ul className="list-unstyled">
        {groceryList.map(listItem => (
          <PlanItem key={listItem.id} listItem={listItem} onDelete={handleDelete} />
        ))}
      </ul>
      <h6>Deleted</h6>
      <ul className="list-unstyled text-secondary">
        {deletedList.map(listItem => (
          <li key={listItem.id}>
            <label>{listItem.name}</label>
          </li>
        ))}
      </ul>
    </div>
  )
}