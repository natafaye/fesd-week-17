import type { ListItem } from "../../types"

type Props = {
    listItem: ListItem
    onComplete: (item: ListItem) => void
}

export default function ShopItem({ listItem, onComplete }: Props) {
    return (
        <li>
            <div className="form-check">
                <input type="checkbox" className="form-check-input" onChange={() => onComplete(listItem)} />
                <label className="form-check-label">{listItem.name}</label>
            </div>
        </li>
    )
}