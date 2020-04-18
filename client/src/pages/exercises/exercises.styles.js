import styled from 'styled-components'
import maxmin from 'utils/maxmin.js'

const Styled = styled.div`
  height: 100vh;
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

  .grid-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 210px);
    overflow: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  a {
    text-decoration: none;
    color: #000000;
  }
`

export default Styled
