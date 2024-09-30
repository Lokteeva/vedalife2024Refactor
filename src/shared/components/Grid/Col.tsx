import { FC, PropsWithChildren } from "react";

import type { ColProps } from "./Grid.types";
import * as Styled from "./styles";

export const Col: FC<PropsWithChildren<ColProps>> = (props) => {
  return <Styled.Col {...props}>{props.children}</Styled.Col>;
};
