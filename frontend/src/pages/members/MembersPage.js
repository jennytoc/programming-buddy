import { useEffect, useState } from "react"
import ProBuddyAPI from "../../api/ProBuddyAPI";
import MembersList from "../../components/members/MembersList";

function MembersPage() {
  // states
  const [members, setMembers] = useState([])

  // effects
  useEffect(()=>{
    loadMembers()
  }, [])
  
  const loadMembers = async () =>{
    const item = "users"
    const data = await ProBuddyAPI.getAllItems(item)
    setMembers(data ? data : [] )
  }
  
  // render
  const renderMembers = () => {
    return members.map((member) => {
      return <MembersList key={ member.id } member={ member } />
    })
  }

  return (
    <div>
      <h1>Members Page</h1>
      { renderMembers() }
    </div>
  )
}

export default MembersPage;