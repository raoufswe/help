import moment from 'moment'

export const getDate = date => {
  return new Date(date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    weekday: 'long'
  })
}

export const getReminderDate = date => {
  return new Date(date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    weekday: 'short'
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

export const getDaysMonth = () => {
  let count = moment().daysInMonth()
  let days = []
  for (let i = 1; i < count + 1; i++) {
    days.push(i)
  }
  return days
}

export const getDayNumber = () => {
  return new Date().toLocaleDateString('en-GB', {
    day: 'numeric'
  })
}
