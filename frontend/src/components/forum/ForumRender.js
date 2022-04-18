import { Link } from "react-router-dom"
import ProBuddyAPI from "../../api/ProBuddyAPI"

// Might change forum-div to ul
function ForumRender(props) {
  return (
    <div className="forum-div">
      { console.log("forum list:", props.forum.title)}
      <Link key={ props.forum.id } to={ `/forum/${ props.forum.value }` }><h5>{ props.forum.title }</h5>
      </Link>
      <p>{ props.forum.description }</p>
    </div>
  )
}

export default ForumRender;