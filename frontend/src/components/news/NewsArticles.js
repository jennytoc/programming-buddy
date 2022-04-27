import React from "react";
import { Card, Row, Col, Button, Container} from "react-bootstrap";

const NewsArticles = ({articles}) => {
  const getColumnsForRow = () => {
    let posts = articles.map((post)=> {
      return (
        <Col className="my-4">
          <Card key={post.id} className="news-card h-100">
            <Card.Img variant="top" src={post.media} />
              <Card.Body>
                <Card.Title>{post.title.replace(": programming", '')}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {post.author}
                  </Card.Subtitle>
                  <Card.Text>
                    Date Published: {post.published_date}
                  </Card.Text>
              <a href={post.link} className="button-17">Read More</a>
            </Card.Body>
          </Card>
        </Col>
      )
    });
    return posts
  }

  return (
    <Container>
      <Row xs={1} md={3}>
        {getColumnsForRow()}
      </Row>
    </Container>
  )
}

export default NewsArticles;