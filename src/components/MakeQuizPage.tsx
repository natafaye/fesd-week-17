import { Button, Container } from "react-bootstrap";
import QuestionList from "./QuestionList";
import { useEffect, useState } from "react";
import { Question } from "../types";
import QuestionForm from "./QuestionForm";

export default function MakeQuizPage() {
    const [quizList, setQuizList] = useState<Question[]>([])
    const [showForm, setShowForm] = useState(false)

    useEffect(() => {
        const load = async () => {
            // Load in the data
            const response = await fetch("http://localhost:3000/questions")
            const data = await response.json()
            setQuizList(data)
        }
        load()
    }, []) // This will run once (twice in Strict Mode) when the page first loads in and never again

    const handleAddSubmit = async (formData: Omit<Question, "id">) => {
        setShowForm(false)

        // Add to the backend database first (and it will give you the new id for that question)
        const response = await fetch("http://localhost:3000/questions", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        })
        const newlyCreatedQuestion = await response.json()

        // Add it to the frontend state
        // const [quizList, setQuizList] = useState<Question[]>([])
        // quizList.push(newlyCreatedQuestion) // REACT POLICE ARE COMING FOR US
        setQuizList([...quizList, newlyCreatedQuestion])

    }

    return (
        <Container>
            <h3>Make Your Quiz</h3>
            <Button variant="primary" size="lg" onClick={() => setShowForm(true)}>Add Question</Button>
            { showForm ? <QuestionForm onSubmit={handleAddSubmit}/> : null }
            <QuestionList questions={quizList}/>
        </Container>
    )
}