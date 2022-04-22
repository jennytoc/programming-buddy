import './HomePageStyle.css'
import React from 'react';
import Container from 'react-bootstrap/Container'

function HomePage() {
  return (
    <div>
      <header>
      <Container as="div" className="header-div" fluid>
        <div className="header-items">
          <div className='text-div'>
            <h2 className="header-text">Connect with other programmers for FREE!</h2>
          </div>
          <button className="btn btn-primary btn-lg" type="button">Join Now</button>
        </div>
    </Container>
      </header>
    </div>
  )
}

export default HomePage;