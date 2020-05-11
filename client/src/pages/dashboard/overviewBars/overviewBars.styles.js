import styled from 'styled-components'

export const StyledOverviewBars = styled.div`
  background: white;

  span {
    display: block;
    font-size: large;
    padding: 0 1.3rem 1.3rem 1.3rem;
    line-height: 1.1;
    letter-spacing: 0.2px;
  }

  .recharts-layer.recharts-cartesian-axis.recharts-yAxis.yAxis {
    font-size: large;
  }
  .recharts-layer.recharts-cartesian-axis.recharts-xAxis.xAxis {
    font-family: Fira Sans;
    color: black;
  }
`
