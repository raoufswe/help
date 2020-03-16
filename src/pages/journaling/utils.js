export const getDate = new Date().toLocaleDateString('en-GB', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
  weekday: 'long'
})

export const getTime = new Date().toLocaleString('en-US', {
  hour: 'numeric',
  minute: 'numeric',
  hour12: true
})

export const Journals = [
  {
    date: getDate,
    time: getTime,
    content:
      'Sequi ratione reprehenderit atque. Est ut commodi quos fugiat quia. Minus repellat qui ea distinctio repellendus.'
  },
  {
    date: getDate,
    time: getTime,
    content:
      'Sequi ratione reprehenderit atque. Est ut commodi quos fugiat quia. Minus repellat qui ea distinctio repellendus.'
  },
  {
    date: getDate,
    time: getTime,
    content:
      'Sequi ratione reprehenderit atque. Est ut commodi quos fugiat quia. Minus repellat qui ea distinctio repellendus.'
  },
  {
    date: getDate,
    time: getTime,
    content:
      'Sequi ratione reprehenderit atque. Est ut commodi quos fugiat quia. Minus repellat qui ea distinctio repellendus.'
  }
]
