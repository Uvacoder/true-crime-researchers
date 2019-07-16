const statusColor = status => {
  switch (status) {
    case "Open":
      return "open"
    case "Pending Trial":
      return "pending"
    case "Solved":
      return "solved"
    default:
      return null
  }
}

export default statusColor
