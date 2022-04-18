import { Link } from "react-router-dom"
import ProBuddyAPI from "../../api/ProBuddyAPI"
import PostListPage from "../../pages/PostListPage";

// Might change forum-div to ul
function ForumList(props) {
  return (
    <div className="forum-div">
      <PostListPage key={ props.forumList.id } />
      <Link key={ props.forumList.id } to={ `/forum/${ props.forumList.value }` }><h5>{ props.forumList.title }</h5></Link>
      <p>{ props.forumList.description }</p>
    </div>
  )
}

export default ForumList;