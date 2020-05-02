import moment from 'moment'

export function getRange(lastDate, lastSevenDates) {
  const filledInDates = lastSevenDates.reduce(
    (newArray, currentModel, index, originalArray) => {
      const nextModel = originalArray[index + 1]

      if (nextModel) {
        const currentDate = moment(currentModel._id)
        const daysBetween = moment(nextModel._id).diff(currentDate, 'days')

        const fillerDates = Array.from(
          { length: daysBetween - 1 },
          (value, dayIndex) => {
            return {
              _id: moment(currentDate)
                .add(dayIndex + 1, 'days')
                .format('YYYY-MM-DD'),
              feeling: 0
            }
          }
        )

        newArray.push(currentModel, ...fillerDates)
      } else {
        newArray.push(currentModel)
      }

      return newArray
    },
    []
  )

  return filledInDates
}
