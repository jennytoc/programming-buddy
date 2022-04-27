import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap"
import ProBuddyAPI from "../../api/ProBuddyAPI";
import PostRender from "../../components/forum/PostRender";
import './ForumStyles.css'

function PostDetailsPage(props) {
  const itemComment = "comments"
  // params
  const { section, postId } = useParams()

  // state
  const [postDetails, setPostDetails] = useState(null) // When expecting an object, initialize with null
  const [commentsList, setCommentsList] = useState([]) // When expecting an array, initialize with empty array
 
  // effects
  useEffect(() => {
    loadPost()
  }, [])

  const loadPost = async () => {
    const item = "posts"
    const data = await ProBuddyAPI.getItemById(item, postId)
    setPostDetails(data ? data : null)
  }

  useEffect(() => {
    loadComments()
  }, [])

  const loadComments = async () => {
    const comments = []
    const data = await ProBuddyAPI.getAllItems(itemComment)
    for (let i=0; i < data.length; i++) {
      if(data[i].post.id == postId) {
        comments.push(data[i])
      }
    }
    setCommentsList(comments ? comments : [])
  }

  const removeComment = (deletedCommentId) => {
    const newCommentsList = commentsList.filter((comment) => {
      return comment.id !== deletedCommentId
    })
    setCommentsList(newCommentsList)
  }

  // event handlers
  const handleCreateComment = async (event) => {
    event.preventDefault()

    const commentData = {
      comment_description: event.target.elements["comment-description"].value,
      post: postId,
      user: props.username.user_id
    }
    console.log("SENDING POST DATA...", commentData)

    const data = await ProBuddyAPI.createItems(itemComment, commentData)

    if (data) {
      console.log("RECEIVED DATA", data)
      setCommentsList([...commentsList, commentData])
      loadComments()
    }

  }

  const ableToComment = () => {
    if (props.username === "") {
      return <h5 className="mb-5">You must be logged in to make a comment. If you don't have an account, sign up <Link to="/signup">here</Link> or <Link to="/login">login.</Link></h5>
    }
    return (
      <Form onSubmit={ handleCreateComment } method="POST" className="form-cont">
        <Form.Label>Post a comment:</Form.Label>
        <Form.Control as="textarea" rows={5} name="comment-description" />
        <Button type="submit" variant="secondary" className="mt-3 mb-3">Submit Comment</Button>
      </Form>
    )
  }
  

  return (
    <div>
        <PostRender {...postDetails} commentsList={commentsList} removeComment={removeComment} section={section} postId={postId} username={props.username}/>
      { ableToComment()}
    </div>
  )
}

export default PostDetailsPage;