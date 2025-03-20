import { useState } from "react"
import { useLoaderData, useRevalidator } from "react-router-dom"
import ShopItem from "./ShopItem"
import type { ListItem } from "../../types"

// HOW TO HANDLE COMPLETING ITEMS

// Option 1
// Things don't actually deleted, they just get marked as complete with a boolean
// If you refresh the page, you always see the completed ones down at the bottom

// Option 2 (WE PICK THIS ONE)
// Things do get deleted from the backend, and they get temporarily stored on the frontend just for visual cue or undo possibly
// If you refresh the page, they're gone for good


// DATA FETCHING OPTIONS

// Option 1
// useEffect hook - fetch the data after the first render (render once with no data, render again with data)

// Option 2
// react router data loader - fetch the data when the link is clicked (don't render the page until the data is loaded in)


// DATA CHANGING OPTIONS

// Option 1 (no wait time)
// Make the change on the frontend (optimistic update)
// Also make the change the backend
// have to be careful because what if the change on the backend doesn't go through? 
// then you need to roll back the change on the frontend

// Option 1.5 (single wait time)
// Also make the change the backend
// Make the change on the frontend (not quite optimistic update)

// Option 2 (double wait time)
// Make the change on the backend
// refresh from the backend (slower, but potentially easier because you don't have to do a state update)

export const shoppingLoader = async () => {
    const response = await fetch("http://localhost:3000/grocery")
    return await response.json()
}

export default function ShoppingPage() {
    // Comes from backend
    const groceryList = useLoaderData<ListItem[]>()
    // Only stored on the frontend and will clear if the page is refreshed
    const [completedList, setCompletedList] = useState<ListItem[]>([])

    const revalidator = useRevalidator() // Not the greatest

    const handleCompleteItem = async (listItem: ListItem) => {
        // add this item to the completed list on the frontend (happening optimistically)
        setCompletedList([...completedList, listItem])
        // delete this item from the backend
        await fetch("http://localhost:3000/grocery/" + listItem.id, { method: "DELETE" })
        // remove this item from the groceryList on the frontend (or option 2 refresh the grocery list from the backend)
        revalidator.revalidate() // I have to do this AFTER awaiting the change that I want to get refreshed in my data
    }

    return (
        <div>
            <h4>Shopping</h4>
            <ul className="list-unstyled">
                {groceryList.map(listItem => (
                    <ShopItem key={listItem.id} listItem={listItem} onComplete={handleCompleteItem}/>
                ))}
            </ul>
            <h6>Completed</h6>
            <ul className="list-unstyled text-secondary">
                {completedList.map(listItem => (
                    <li key={listItem.id}>
                        <label>{listItem.name}</label>
                    </li>
                ))}
            </ul>
        </div>
    )
}