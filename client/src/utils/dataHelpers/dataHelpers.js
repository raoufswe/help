export const getDate = date => {
  return new Date(date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    weekday: 'long'
  })
}

export const getTime = date => {
  return new Date(date).toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  })
}

export const getDay = date => {
  return new Date().toLocaleString('en-us', { weekday: 'short' })
}
