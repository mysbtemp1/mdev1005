import React from "react"
import { Container } from "react-bootstrap"

export default function NotFound() {

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <h2 className="text-center mb-4">404</h2>
        <p className="text-center mb-4">Requested page not found.</p>
      </div>
    </Container>
  )
}
