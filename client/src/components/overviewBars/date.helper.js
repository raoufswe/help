import moment from 'moment'

export function getRange(startDate, endDate, type) {
  let diff = moment(endDate).diff(moment(startDate), type)
  let range = []
  for (let i = 0; i < diff; i++) {
    range.push({
      _id: moment(startDate)
        .add(i, type)
        .format('YYYY-MM-DD'),
      feeling: '0'
    })
  }

  return range
}

export function evaluateRange(range, lastSevenDates) {
  if (range.length) {
    return [...range, ...lastSevenDates].sort(
      (a, b) => new Date(a._id) - new Date(b._id)
    )
  } else if (lastSevenDates.length) {
    return lastSevenDates
  } else {
    return []
  }
}
