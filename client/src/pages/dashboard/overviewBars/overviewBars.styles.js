import styled from 'styled-components'

export const StyledOverviewBars = styled.div`
  background: white;

  span {
    display: block;
    font-size: 18px;
    padding: 20px 50px 20px 20px;
    line-height: 1.1;
    letter-spacing: 0.1px;
  }

  .recharts-layer.recharts-cartesian-axis.recharts-yAxis.yAxis {
    font-size: 20px;
  }
  .recharts-layer.recharts-cartesian-axis.recharts-xAxis.xAxis {
    font-family: Fira Sans;
    color: black;
  }
`
