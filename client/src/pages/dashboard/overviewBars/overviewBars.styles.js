import styled from 'styled-components'

export const StyledOverviewBars = styled.div`
  background: white;
  padding-bottom: 1rem;
  border-bottom: 1px solid #edecec;
  .overviewbars-msg {
    display: block;
    font-weight: normal;
    font-size: large;
    padding: 1rem 1.3rem;
    line-height: 1.2;
  }
  .bars {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
`

export const StyledBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .bar {
    background: #ebe9f6;
    border-radius: 1.3rem;
    width: 0.8rem;
    height: 4rem;
    border: 1px solid transparent;
    transform: rotate(180deg);
    align-self: center;
  }
  svg {
    height: 2rem;
    width: 2rem;
    margin-top: 1rem;
  }

  .count {
    margin-bottom: 0.5rem;
  }
`

export const StyledFiller = styled.div`
  background: #2676ff;
  border-radius: inherit;
  height: ${({ count }) => count * (100 / 7) + '%'};
`
