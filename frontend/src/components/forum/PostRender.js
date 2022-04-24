import ProBuddyAPI from "../../api/ProBuddyAPI"
import { useNavigate, Link } from "react-router-dom"

function PostRender(props) {
  const navigate = useNavigate()

  // event handlers
  const renderComments = () => {
    const item = "comments"
    return props.commentsList.map((comment)=> {
      const handleDeleteComment = async () => {
        const data = await ProBuddyAPI.deleteItem(item, comment.id)
        if (data) {
          props.removeComment(comment.id)
        }
      }
      return <div className="comment">
        <p>{comment.comment_description}</p>
        <p>{comment.user && comment.user.username}</p>
        <button className="delete-btn" onClick={ handleDeleteComment }>Delete Comment</button>
        </div>
    })
  }

  const handleDeletePost = async () => {
    const item = "posts"
    const data = await ProBuddyAPI.deleteItem(item, props.id)
    if (data) {
      navigate(`/forum/${props.forum_value}`)
    }
  }

  return (
    <div>
      <div className="original-post">
        <p>{ props.post_title }</p>
        <p>{props.post_description}</p>
        <p>{ props.user && props.user.username}</p>
        <p>{props.post_date_created}</p>
        <button onClick={handleDeletePost}>Delete Post</button>
        <Link to={`/forum/${props.forum_value}/${props.id}/edit-post`}>
          <button>Edit Post</button>
        </Link>
      </div>
      {renderComments()}
    </div>
  )
}

export default PostRender;