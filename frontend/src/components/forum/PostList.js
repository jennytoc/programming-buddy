import { Link } from "react-router-dom"
import ProBuddyAPI from "../../api/ProBuddyAPI"

// Might change forum-div to ul
function PostList(props) {
  return (
    <div className="post-div">
       
      <Link key={ props.post.id } to={ `/forum/${props.post.forum_value}/${props.post.id}` }><h5>{ props.post.post_title }</h5></Link>
      <p>Posted by: {props.post.user.username}</p>
    </div>
  )
}

export default PostList;