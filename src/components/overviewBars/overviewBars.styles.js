import styled from 'styled-components'

export const StyledOverviewBars = styled.div`
  background: white;
  padding-bottom: 50px;
  border-bottom: 1px solid #edecec;

  span {
    display: block;
    font-weight: normal;
    font-size: 18px;
    padding: 20px 50px 20px 30px;
  }

  .bars {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
`

export const StyledBar = styled.div`
  background: #ebe9f6;
  border-radius: 20px;
  width: 10px;
  height: 64px;
  border: 1px solid transparent;
  transform: rotate(180deg);
`

export const StyledFiller = styled.div`
  background: #2676ff;
  height: 100%;
  border-radius: inherit;
  height: ${({ value }) => value};
`
