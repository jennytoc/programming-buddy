import { Link } from "react-router-dom"

function MembersList(props) {
  console.log(props.member)
  return (
    <div className="list-cont">
      <Link key={ props.member.id } to={props?.member?.user?.id ? `/members/${props?.member?.user?.id}` : `/members/${props.member.id}`}  >
        <p>{props?.member?.user?.username ? props.member.user.username : props.member.username }</p>
      </Link>
    </div>
  )
}

export default MembersList
