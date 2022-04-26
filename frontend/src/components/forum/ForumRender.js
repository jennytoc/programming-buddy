import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom"

function ForumRender(props) {

  return (
    <Row className="post-items">
      <Col>
        <h4 className="item-title"><Link key={ props.forum.id } to={ `/forum/${ props.forum.value }` }>{ props.forum.forum_title }</Link></h4>
        <p className="item-text">{ props.forum.forum_description }</p>
      </Col>
    </Row>
  )
}

export default ForumRender;