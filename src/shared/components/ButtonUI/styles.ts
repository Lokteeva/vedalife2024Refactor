import styled from 'styled-components';

export const ButtonUI = styled.button`
  text-decoration: none;
  color: var(--white);
  background-color: var(--pink);
  padding: calc(var(--index) * 0.5) calc(var(--index) * 1);
  border-radius: calc(var(--index) * 2);
  border: none;
  box-shadow: 1px 1px 25px var(--white);
  font-family: 'Regular';
  letter-spacing: 1.1px;
  font-size: calc(var(--index) * 1.2);
  transition: 0.3s ease-in;

  &:hover {
    color: var(--pink);
    background-color: var(--white);
    font-family: 'Regular';
  }
`;
