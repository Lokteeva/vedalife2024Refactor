import styled from 'styled-components';

export const Line = styled.div`
  position: sticky;
  top: 0;
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
  justify-content: space-between;
`;

export const Nav = styled.nav``;
