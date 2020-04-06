import styled from 'styled-components'
import maxmin from 'utils/maxmin.js'

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
    background: #0056ea;
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
    height: 100%;
  }

  .close-side-menu {
    margin-left: auto;
    margin-bottom: ${maxmin(60, 30)};
    svg {
      width: ${maxmin(31, 20)};
      height: ${maxmin(31, 20)};
      color: white;
    }
  }

  .nav-item {
    padding: ${maxmin(20, 10)} 0;
    a {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      font-size: ${maxmin(18, 16)};
      font-weight: 500;
      color: #ffff;
      text-decoration: none;
      svg {
        margin-right: 20px;
      }
    }
  }

  .logout {
    margin: auto 0 60px;
    display: flex;
    place-items: center;
    svg {
      margin-right: 20px;
    }
  }
`

export default Styled
