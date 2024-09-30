import { ComponentProps, FC, ReactNode } from "react";

import * as Styled from "./styles";

type LineTrimProps = {
  children: ReactNode;
  clamp?: number;
} & ComponentProps<typeof Styled.Text>;

export const LineTrim: FC<LineTrimProps> = (props) => {
  const { children, clamp = 1 } = props;
  return (
    <Styled.Text clamp={clamp} {...props}>
      {children}
    </Styled.Text>
  );
};
