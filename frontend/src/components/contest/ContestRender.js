import { Row, Card, Col, Container } from "react-bootstrap"

function ContestRender(props) {
  const renderContests = () => {
    return props.contests.map((contest) => {
      return (
        <Col className="my-4">
          <Card key={contest.id} className="news-card h-100">
            <Card.Body>
            <Card.Title>{contest && contest.name}</Card.Title>
            <Card.Subtitle>Start Time</Card.Subtitle>
            <Card.Text>{contest && contest.start_time}</Card.Text>
            <Card.Subtitle>End Time</Card.Subtitle>
            <Card.Text>{contest && contest.end_time}</Card.Text>
            <button href={contest && contest.url} className="button-17">CLick Here</button>
            </Card.Body>
          </Card>
        </Col>
      )
    })
  }

  return (
    <Container>
      <Row xs={1} md={3}>
        {renderContests()}
      </Row>
    </Container>
  )
}

export default ContestRender;