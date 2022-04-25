import './HomePageStyle.css'
import {Container, Button, CardGroup, Card, Row } from 'react-bootstrap'
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <header>
        <Container as="section" className="header-div" fluid>
          <div className="header-items">
            <div className='text-div'>
              <h1 className="header-text">Connect and learn with other programmers.</h1>
            </div>
            <Link to="/signup"><Button variant="outline-light" size="lg" className="header-btn">Join For Free</Button></Link>
          </div>
        </Container>
      </header>

      <Container as="section" className="feature-div mt-5 mb-5 p-5" fluid>
        <h1 className="feature-title">How It Works</h1>
        <CardGroup as={Row} className="justify-content-md-center" sm='auto' md='auto' lg='auto'>
          <Card className="m-5">
            <Card.Img variant="top" src={require("../../images/Page1.png")}/>
            <Card.Body>
              <Card.Title>Sign up</Card.Title>
              <Card.Text>
                Sign up for a free account today. Simple and easy.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="m-5">
            <Card.Img variant="top" src={require("../../images/Page2.png")} style={{height: 230}}/>
            <Card.Body>
              <Card.Title>Set up your profile</Card.Title>
              <Card.Text>
                Select your preferred programming language and proficiency. 
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="m-5">
            <Card.Img variant="top" src={require("../../images/Page3.png")}/>
            <Card.Body>
              <Card.Title>Check out the forums</Card.Title>
              <Card.Text>
                Find other programmers to collaborate on a project with. 
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="m-5">
            <Card.Img variant="top" src={require("../../images/Page4.png")} style={{height: 225}}/>
            <Card.Body>
              <Card.Title>Participate in a contest</Card.Title>
              <Card.Text>
                Want to challenge yourself? Find out what contests are going on now.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
    </div>
  )
}

export default HomePage;
