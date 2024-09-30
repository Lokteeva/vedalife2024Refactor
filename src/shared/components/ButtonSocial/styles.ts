import styled from 'styled-components';
// import { Button as ButtonUI } from "@consta/uikit/Button";


export const Button = styled.button`
  height: calc(var(--index) * 1.2);
  width: calc(var(--index) * 1.2);
  background: none;
  border: none;

  &:hover {
    scale: 1.2;
    transition: scale 0.2s ease-in;
    cursor: pointer;
  }

  svg {
    color: var(--white);
  }
`;
