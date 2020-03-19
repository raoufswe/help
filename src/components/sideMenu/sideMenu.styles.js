import styled from 'styled-components'

const Styled = styled.div`
  .header {
    padding: 10px;
    background: transparent;
  }

  .burger-icon {
    padding: 20px;
    svg {
      width: 30px;
      height: 30px;
    }
  }

  .side-menu {
    z-index: 1;
    background: #2676ff;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 70%;
    padding: 20px;
    color: #ffffff;
    font-size: 18px;
    position: fixed;
    top: 0;
    left: 0;
    transition: 0.5s ease;
    transform: ${({ isOpen }) =>
      isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  }

  .side-menu-content {
    display: flex;
    flex-direction: column;
  }

  .close-side-menu {
    margin-left: auto;
    margin-bottom: 60px;
    svg {
      width: 31px;
      height: 31px;
      color: white;
    }
  }

  .nav-item {
    padding: 20px 0;
    border-bottom: 1px solid white;
    a {
      display: flex;
      align-items: center;
      justify-content: flex-start;

      font-size: 18px;
      font-weight: 500;
      color: #ffff;
      text-decoration: none;
      svg {
        margin-right: 20px;
      }
    }
  }
`

export default Styled
