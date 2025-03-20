import type { ListItem } from "../../types"

type Props = {
    listItem: ListItem
    onDelete: (item: ListItem) => void
}

export default function PlanItem({ listItem, onDelete }: Props) {
    return (
        <li>
            <label>{listItem.name}</label>
            <button className="btn btn-danger ms-3" onClick={() => onDelete(listItem)}>Delete</button>
        </li>
    )
}