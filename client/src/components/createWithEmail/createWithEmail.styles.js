import styled from 'styled-components'

const Styled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: 100vh;

  .header {
    svg {
      width: 1.3rem;
      height: 1.3rem;
      margin: 1.5rem 1rem 1.5rem 0;
    }
    span {
      font-size: large;
      font-weight: 600;
    }
  }
  main {
    display: flex;
    flex-direction: column;
    input,
    .sign-up {
      margin: 0.5rem 0;
      width: 100%;
      border-radius: 0.5rem;
      border: 1px solid #dadada;
      padding: 0.8rem;
      font-size: 0.9rem;
    }

    .sign-up {
      background: rgb(33, 150, 243);
      color: #fff;
      border: none;
      font-weight: 600;
      margin: 1.3rem 0;
      padding: 1rem;
    }
  }
`

export default Styled
