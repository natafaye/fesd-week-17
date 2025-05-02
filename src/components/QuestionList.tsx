import type { Question } from "../types"

type Props = {
    questions: Question[]
}

export default function QuestionList({ questions }: Props) {
  return (
    <div>
        { questions.map(question => (
            <div key={question.id}>
                <h6>{question.question}</h6>
                <p>{question.correctAnswer}</p>
                <ul>
                    { question.answers.map(answer => <li key={answer}>{answer}</li>)}
                </ul>
            </div>
        )) }
    </div>
  )
}


// 7 Wonder of React
// Using client-side routing to make multiple pages
// Loading data from an API with useEffect
// Hooking up a form
// Making state
// Showing a list use .map() array method
// Passing props
// Making components




// Hook up the form to add questions (a little bit of fanciness for the possible answers)
// Create, edit, delete (with updating the backend)

// Loading and Error for the fetching

// Play with React Router pages and parameters
// Play around with React Router's data loading situation
// Set up React Router with a Layout page to share some parts of the page between pages