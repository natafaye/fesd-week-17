import { FormEvent, useState } from "react"
import { Button } from "react-bootstrap"
import { Question } from "../types"

type Props = {
    onSubmit: (formData: Omit<Question, "id">) => void
}

export default function QuestionForm({ onSubmit }: Props) {
    const [questionValue, setQuestionValue] = useState("")
    const [correctValue, setCorrectValue] = useState("")

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault() // prevent page from refreshing
        const questionData = {
            question: questionValue,
            correctAnswer: correctValue,
            answers: [] // TODO: Allow adding answers
        }

        onSubmit(questionData)
    }

    return (
        <form>
            <label className="form-label">Question</label>
            <input
                type="text"
                className="form-control"
                value={questionValue}
                onChange={(event) => setQuestionValue(event.target.value)}
            />
            <label className="form-label">Correct Answer</label>
            <input
                type="text"
                className="form-control mb-3"
                value={correctValue}
                onChange={(event) => setCorrectValue(event.target.value)}
            />
            <Button variant="success" type="submit" onClick={handleSubmit}>Add</Button>
        </form>
    )
}