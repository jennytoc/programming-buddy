import { Card } from "react-bootstrap";
import { Link } from "react-router-dom"
import ProBuddyAPI from "../../api/ProBuddyAPI"

// Might change forum-div to ul
function ForumRender(props) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>
          <Link key={ props.forum.id } to={ `/forum/${ props.forum.value }` }>{ props.forum.forum_title }
          </Link>
        </Card.Title>
        <Card.Text>
          <p>{ props.forum.forum_description }</p>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default ForumRender;