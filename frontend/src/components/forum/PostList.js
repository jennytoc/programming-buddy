import { Card } from "react-bootstrap";
import { Link } from "react-router-dom"
import ProBuddyAPI from "../../api/ProBuddyAPI"

// Might change forum-div to ul
function PostList(props) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>
          <Link key={ props.post.id } to={ `/forum/${props.post.forum_value}/${props.post.id}` }>{ props.post.post_title }</Link>
        </Card.Title>
        <Card.Text>
          Posted by: {props.post.user.username}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default PostList;