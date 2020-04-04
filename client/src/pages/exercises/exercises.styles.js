import styled from 'styled-components'
import maxmin from 'utils/maxmin.js'

const Styled = styled.div`
  height: 100vh;
  font-family: Fira Sans;
  padding: 0 20px;

  .page-title {
    padding-bottom: ${maxmin(20, 10)};
    font-weight: 600;
    font-size: ${maxmin(36, 30)};
  }

  .sub-title {
    font-weight: 600;
    font-size: 24px;
  }
`

export default Styled
