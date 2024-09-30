import { Text as TextUI } from "@consta/uikit/Text";
import styled from "styled-components";

export const Text = styled(TextUI)<{ clamp?: number }>`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${(props) => props.clamp};
  overflow: hidden;
`;
