import { Form } from "react-bootstrap"
import { Question } from "../types"
import { useState } from "react"

type Props = {
    questions: Question[]
}

export default function QuizFormList({ questions }: Props) {
    const [answerValues, setAnswerValues] = useState(questions.map(q => ""))
    return (
        <div>
            {questions.map((question, questionIndex) => (
                <div key={question.id} className="my-3">
                    <p>{question.question}</p>
                    {question.answers.map((answer, answerIndex) => (
                        <Form.Check
                            key={answerIndex}
                            type="radio"
                            name={question.id.toString()}
                            label={answer}
                            value={answer}
                            checked={answerValues[questionIndex] === answer}
                            onChange={(event) => setAnswerValues(
                                answerValues.map((a, i) => i === questionIndex ? event.target.value : a)
                            )}
                        />
                    ))}
                </div>
            ))}
        </div>
    )
}