import styled from 'styled-components';
// import './App.css'

export const Line = styled.div`
  height: calc(var(--index) * 0.6);
  background: linear-gradient(to right, var(--ocean), var(--liteOcean));
`;

export const WrapperHeader = styled.div`
  position: fixed;
  top: calc(var(--index) * 0.6);
  width: 100vw;
  height: calc(var(--index) * 2);
  background-color: var(--pink);
  display: flex;
  align-items: center;
  font-size: calc(var(--index) * 0.9);
  /* font-family: 'BebasNeueRegular'; */


  a {
  text-decoration: none;
  color: var(--white);

}
`;

export const Nav = styled.nav`
  ul {
    display: flex;
    list-style: none;
    text-transform: uppercase;
    /* font-family: 'BebasNeueRegular'; */
    font-size: calc(var(--index) * 0.9);
    color: var(--white);
  }

  li {
    padding-right: calc(var(--index) * 2);
  }
  li a {
  text-decoration: none;
  color: var(--white);
}
`;
