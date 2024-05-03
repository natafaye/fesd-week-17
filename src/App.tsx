import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import HomePage from "./components/HomePage"
import SchedulePage from "./components/SchedulePage"
import AppointmentsPage from "./components/AppointmentsPage"
import TopBar from "./components/TopBar"
import { Container } from "react-bootstrap"

export default function App() {
  return (
    <div>
      <TopBar />
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/new" element={<SchedulePage />} />
          <Route path="/appointments" element={<AppointmentsPage />} />
        </Routes>
      </Container>
    </div>
  )
}