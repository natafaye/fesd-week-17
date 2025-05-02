import { Button, Container } from "react-bootstrap";
import QuestionList from "./QuestionList";
import { useEffect, useState } from "react";

export default function MakeQuizPage() {
    const [quizList, setQuizList] = useState([])

    useEffect(() => {
        const load = async () => {
            // Load in the data
            const response = await fetch("http://localhost:3000/questions")
            const data = await response.json()
            setQuizList(data)
        }
        load()
    }, []) // This will run once (twice in Strict Mode) when the page first loads in and never again

    return (
        <Container>
            <h3>Make Your Quiz</h3>
            <Button variant="primary" size="lg">Add Question</Button>
            <QuestionList questions={quizList}/>
        </Container>
    )
}