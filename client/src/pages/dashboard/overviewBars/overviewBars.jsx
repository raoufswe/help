import React from 'react'
import Cookies from 'js-cookie'
import { StyledOverviewBars } from './overviewBars.styles'
import Bar from './bar'
import NoData from './noData'
import ErrorUI from 'components/errorUI.jsx'
import Loader from 'assets/loader.jsx'
import useGetFeelings from '../hooks/useGetFeelings'

export default function OverviewBars() {
  const { data, status } = useGetFeelings()

  let unique = [...new Set(data?.map(({ feeling }) => feeling))]
  let weekFeelings = unique
    .map(value => ({
      feeling: value,
      count: data?.filter(({ feeling }) => feeling === value).length
    }))
    .sort((a, b) => b.count - a.count)

  return (
    <>
      {status === 'loading' ? (
        <Loader />
      ) : status === 'error' ? (
        <ErrorUI />
      ) : weekFeelings.length ? (
        <StyledOverviewBars>
          <span className="overviewbars-msg">
            Here’s an overview of how your week has been so far. You’re doing
            great!
          </span>

          <div className="bars">
            {weekFeelings.map(({ feeling, count }, key) => (
              <Bar key={key} feeling={feeling} count={count} />
            ))}
          </div>
        </StyledOverviewBars>
      ) : (
        <NoData />
      )}
    </>
  )
}
