import styled from 'styled-components';

const colorMap = {
  pink: 'var(--pink)',
  blue: 'var(--darkBlue)',
  white: 'var(--white)',
  black: 'black',
};

export const Text = styled.span<{
  color?: keyof typeof colorMap;
  size?: number;
  family: string;
  uppercase?: string;
  spacing?: string;
  hover?: boolean;
  bold?: boolean;
}>`
  color: ${(props) => props.color && colorMap[props.color]};
  font-family: ${(props) => props.family};
  font-size: ${(props) => props.size && `${props.size}px`};
  text-transform: ${(props) => props.uppercase && 'uppercase'};
  letter-spacing: ${(props) => props.spacing};
  font-weight: ${(props) => props.bold && "bold"};
  text-align: center;

  &:hover {
    cursor: ${(props) => props.hover && 'pointer'};
    text-shadow:  ${(props) => props.hover && "1px 1px 10px var(--white)"};
  }
`;
