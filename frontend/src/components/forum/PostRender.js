import ProBuddyAPI from "../../api/ProBuddyAPI"
import { useNavigate, Link } from "react-router-dom"
import { Row, Col, Button } from "react-bootstrap";

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
    <div className="main-cont">
      <div className="post-cont">
        <Row className="detail-title align-items-center">
          <Col style={{color: "white"}}>{props.post_date_created}</Col>
          <Col xs={7}><h4 className="main-title">{ props.post_title }</h4></Col>
          <Col><Link to={`/forum/${props.forum_value}/${props.id}/edit-post`}>
          <Button>Edit Post</Button></Link></Col>
          <Col><Button onClick={handleDeletePost}>Delete Post</Button></Col>
        </Row>
        <Row className="detail-cont">
          <Col>
          <img className="profile-pic" src="https://res.cloudinary.com/dbi5z0la5/image/upload/v1650772943/my-uploads/kkievty6jz98l7pg7sez.png" />
          <p>{ props.user && props.user.username}</p></Col>
          <Col xs={9} className="description">{props.post_description}</Col>
        </Row>
      </div>
      {renderComments()}
    </div>
  )
}

export default PostRender;