import { FC, PropsWithChildren } from "react";

import type { RowProps } from "./Grid.types";
import * as Styled from "./styles";

export const Row: FC<PropsWithChildren<RowProps>> = (props) => {
  return <Styled.Row {...props}>{props.children}</Styled.Row>;
};
