const convertRuntime = runtime => {
  if (runtime < 60) {
    return `${runtime} minutes`
  } else {
    const quotient = Math.floor(runtime / 60)
    const remainder = runtime % 60
    return `${quotient} hour, ${remainder} minutes`
  }
}

export default convertRuntime
