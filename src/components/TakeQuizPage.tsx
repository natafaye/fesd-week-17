import { useEffect, useState } from "react"
import { Question } from "../types"
import QuizFormList from "./QuizFormList"
import { Button, Container } from "react-bootstrap"

export default function TakeQuizPage() {
  const [quizList, setQuizList] = useState<Question[]>([])

  useEffect(() => {
    const load = async () => {
      // Load in the data
      const response = await fetch("http://localhost:3000/questions")
      const data = await response.json()
      setQuizList(data)
    }
    load()
  }, [])

  return (
    <Container>
      <h1>Take My Quiz!</h1>
      { quizList.length > 0 && <QuizFormList questions={quizList}/>}
      <Button variant="success" size="lg" className="mt-5">Submit Answers</Button>
    </Container>
  )
}