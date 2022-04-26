import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom"

function PostList(props) {
  return (
    <div className="topic-cont">
      <Row className="topic-div">
        <Col>
          <h5><Link key={ props.post.id } to={ `/forum/${props.post.forum_value}/${props.post.id}` }>{ props.post.post_title }</Link></h5>
        </Col>
        <Col>
          {props.post.user.username}
        </Col>
      </Row>
    </div>
  )
}

export default PostList;