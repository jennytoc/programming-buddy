import { Link } from "react-router-dom"

function MembersList(props) {
  // const renderContents = () => {
  //   if (props.member.user.username) {
  //     return <p>{props.member.user.username}</p>
  //   } else if (props.member.username) {
  //     return <p>{props.member.username}</p>
  //   } 
  //   return <p>No results found</p>
  // }

  return (
    <div>
      <Link key={ props.member.id } to={ `/members/${props.member.id}` }>
        <p>{props.member.user.username ? props.member.user.username : props.member.username }</p>
        {/* { renderContents() } */}
      </Link>
    </div>
  )
}

export default MembersList