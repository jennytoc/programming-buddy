function ContestRender(props) {
  const renderContests = () => {
    return props.contests.map((contest) => {
      return (
        <div>
          <h2>{contest && contest.name}</h2>
          <p>{contest && contest.start_time}</p>
          <p>{contest && contest.end_time}</p>
          <p>{contest && contest.status}</p>
          <a href={contest && contest.url}>CLick Here</a>
        </div>
      )
    })
  }

  return (
    <div>
      {renderContests()}
    </div>
  )
}

export default ContestRender;