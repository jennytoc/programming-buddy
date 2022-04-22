import ProBuddyAPI from "../../api/ProBuddyAPI"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function CreatePost(props) {
  const navigate = useNavigate()

  // states
  const [forumLists, setForumLists] = useState([])

  // effects
  useEffect(()=>{
    loadForumLists()
  }, []) // Change once we add authentication features for admin

  const loadForumLists = async () =>{
    const data = await ProBuddyAPI.getAllForums()
    setForumLists(data ? data : [] )
  }

  // event handlers
  const handleCreatePost = async (event) => {
    event.preventDefault()

    const postData = {
      post_title: event.target.elements["post-title"].value,
      post_description: event.target.elements["post-description"].value,
      forum: event.target.elements["forum-selection"].value, 
      user: props.username.user_id
    }
    console.log("SENDING POST DATA...", postData)
    const data = await ProBuddyAPI.createPost(postData)
    if (data) {
      console.log("RECEIVED DATA", data)
      navigate(`/forum/${data.forum_value}/${data.id}`)
    }
  }

  const renderForumNames = () => {
    return forumLists.map((forum) =>{
      return <option value={forum.id}>{forum.forum_title}</option>
    })
  }

  return (
    <div className="add-post">
      <form onSubmit={ handleCreatePost }>
        <label>Post Title</label>
        <input name="post-title" />
        <label>Description</label>
        <textarea id="post-description" name="post-description" rows="10" cols="90"></textarea>
        <label>Forum</label>
        <select name="forum-selection">
          { renderForumNames() }
        </select>
        <button type="submit">Create Post</button>
      </form>
    </div>
  )
}

export default CreatePost;