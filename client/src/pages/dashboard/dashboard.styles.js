import styled from 'styled-components'

const StyledDashboard = styled.div`
  height: 100%;
  .title {
    background: #f5f5fa;
    padding: 0.5rem 1.3rem 1.3rem 1.3rem;
    .sub-title {
      display: block;
      font-size: large;
      letter-spacing: 0.2px;
      line-height: 1.1;
    }
  }

  .relax {
    background: white;
  }

  ion-header {
    background: #f5f5fa;
  }

  ion-toolbar {
    --color: #ffffff;
    --background: #f5f5fa;
  }
`

export default StyledDashboard
