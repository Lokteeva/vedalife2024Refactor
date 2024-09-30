import * as Styled from './styles';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  link?: string;
};

export const ButtonSocial = (props: Props) => {
  const { children, link } = props;

  return (
    <a href={link}>
      <Styled.Button>{children}</Styled.Button>
    </a>
  );
};
