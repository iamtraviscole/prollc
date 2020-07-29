const formatDate = date => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December']

  const formatHour = () => {
    const hour = date.getHours() % 12
    return hour ? hour : 12
  }

  const formatMinutes = () => {
    const minutes = date.getMinutes()
    return minutes < 10 ? '0' + minutes : minutes
  }

  const month = months[date.getMonth()]
  const day = date.getDate()
  const hour = formatHour()
  const minutes = formatMinutes()
  const ampm = date.getHours() >= 12 ? 'pm' : 'am'
  const year = date.getFullYear()

  return `${month} ${day}, ${year} ${hour}:${minutes}${ampm}`
}

export default formatDate
