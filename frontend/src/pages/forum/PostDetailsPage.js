import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProBuddyAPI from "../../api/ProBuddyAPI";
import PostRender from "../../components/forum/PostRender";

function PostDetailsPage(props) {
  // params
  const { postId } = useParams()

  // state
  const [postDetails, setPostDetails] = useState([])
  const [commentsList, setCommentsList] = useState([])
 
  // effects
  useEffect(() => {
    loadPost()
  }, [])

  const loadPost = async () => {
    const data = await ProBuddyAPI.getPostById(postId)
    setPostDetails(data ? data : [])
  }

  useEffect(() => {
    loadComments()
  }, [])

  const loadComments = async () => {
    const comments = []
    const data = await ProBuddyAPI.getAllComments()
    for (let i=0; i < data.length; i++) {
      if(data[i].post.id == postId) {
        comments.push(data[i])
      }
    }
    setCommentsList(comments ? comments : [])
  }
  console.log("postdetails", postDetails)
  console.log("commentsList", commentsList)

  return (
    <div>
      <PostRender {...postDetails} commentsList={commentsList} />
    </div>
  )
}

export default PostDetailsPage;