import { Link } from "react-router-dom"
import ProBuddyAPI from "../../api/ProBuddyAPI"

// Might change forum-div to ul
function ForumRender(props) {
  return (
    <div className="forum-div">
      <Link key={ props.forum.id } to={ `/forum/${ props.forum.value }` }><h5>{ props.forum.forum_title }</h5>
      </Link>
      <p>{ props.forum.forum_description }</p>
    </div>
  )
}

export default ForumRender;