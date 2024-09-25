import { useParams } from "react-router-dom"

export default function ColorPage() {

    const { colorList } = useParams()

    const colors = colorList?.split("-")

    return (
        <div>
            { colors?.map(color => (
                <div style={{ backgroundColor: "#" + color, width: "50px", height: "50px"}}></div>
            ))}
        </div>
    )
}