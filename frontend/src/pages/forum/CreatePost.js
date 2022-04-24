import ProBuddyAPI from "../../api/ProBuddyAPI"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import {Form, Button, Stack} from 'react-bootstrap'

function CreatePost(props) {
  const navigate = useNavigate()

  // states
  const [forumLists, setForumLists] = useState([])

  // effects
  useEffect(()=>{
    loadForumLists()
  }, []) // Change once we add authentication features for admin

  const loadForumLists = async () =>{
    const item = "forums"
    const data = await ProBuddyAPI.getAllItems(item)
    setForumLists(data ? data : [] )
  }

  // event handlers
  const handleCreatePost = async (event) => {
    event.preventDefault()
    const item = "posts"
    const postData = {
      post_title: event.target.elements["post-title"].value,
      post_description: event.target.elements["post-description"].value,
      forum: event.target.elements["forum-selection"].value, 
      user: props.username.user_id
    }
    console.log("SENDING POST DATA...", postData)
    const data = await ProBuddyAPI.createItems(item, postData)
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
    <Form onSubmit={ handleCreatePost} method="POST">
      <Form.Group className="mb-3" controlId="formTitle">
        <Form.Label>Title Your Post:</Form.Label>
        <Form.Control name="post-title" placeholder="Enter Title Here" />
      </Form.Group>
      <Form.Group controlId="formDescription">
        <Form.Label>Post description:</Form.Label>
        <Form.Control name="post-description" as="textarea" rows={6} placeholder="Start typing here..."/>
      </Form.Group>
      <Form.Label>Select Forum:</Form.Label>
      <Form.Group>
      <Form.Select name="forum-selection">
        { renderForumNames() }
      </Form.Select>
      </Form.Group>
      <Stack gap={2} className="col-md-5 mx-auto">
      <Button variant="secondary" type="submit">Submit Post</Button>
      <Button variant="outline-secondary" onClick={() => navigate(-1)} >Cancel</Button>
      </Stack>
    </Form>
  )
}

export default CreatePost;