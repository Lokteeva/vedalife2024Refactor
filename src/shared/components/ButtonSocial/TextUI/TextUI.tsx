import { ReactNode } from 'react';
import * as Styled from './styles';

type Props = {
  children: ReactNode;
  color?: string;
  size?: number;
  family?: string;
  uppercase?: string;
  spacing?: string | boolean;
  hover?: string | boolean;
  bold?: boolean;
};

export const TextUI = (props: Props) => {
  const {
    children,
    color = 'black',
    size = 16,
    family = '',
    uppercase = false,
    spacing = false,
    hover = false,
    bold = false,
  } = props;
  return (
    <Styled.Text color={color} size={size} family={family} uppercase={uppercase} spacing={spacing} hover={hover} bold={bold}>
      {children}
    </Styled.Text>
  );
};
