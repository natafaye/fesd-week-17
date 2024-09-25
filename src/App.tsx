import { Link, Outlet } from "react-router-dom"

export default function App() {
    return (
        <div>
            <h4>Carl's Car Site</h4>

            <Link to="/">Home</Link>{" "}
            <Link to="/appointments">Appointments</Link>
            
            <Outlet/>

            <footer>
                Copyright 2024
            </footer>
        </div>
    )
}