import React from "react"
import Header, { Footer, Navbar } from '../Theme';
import { Container } from "react-bootstrap"

export default function NotFound() {

  return (

    
    <div>
    <Navbar />

    <div className='right-container'>

        <Header headingText='404' />
        
        <div className="w3-row-padding w3-padding-64 w3-container d-flex align-items-center justify-content-center"
            style={{ minHeight: "350px", height: "calc(100vh - 204.8px - 188.8px)" }}>
            <div className="w3-content">
                <div className="w-100">
                  {/* <h2 className="text-center mb-4">404</h2> */}
                  <p className="text-center mb-4">Requested page not found.</p>
                </div>
            </div>
        </div>

        <Footer />
    </div>
</div>
  )
}
