import React from "react";
import { GridLoader } from "react-spinners";

import * as Styled from "./styles";

export const Spinner = () => {
  return (
    <Styled.Wrapper>
      <GridLoader color="#4532FF" />
    </Styled.Wrapper>
  );
};
