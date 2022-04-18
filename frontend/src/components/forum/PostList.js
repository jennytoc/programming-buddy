import { Link } from "react-router-dom"
import ProBuddyAPI from "../../api/ProBuddyAPI"

// Might change forum-div to ul
function PostList(props) {
  return (
    <div className="post-div"> 
      <h5>{ props.posts.title }</h5>
      <p>{ props.posts.description }</p>
    </div>
  )
}

export default PostList;