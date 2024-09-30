import styled from "styled-components";

export const Wrapper = styled.div``;

export const CollapsableWrapper = styled.div<{
  isOpen: boolean;
  height: number;
}>`
  overflow: hidden;
  height: ${(props) => (props.isOpen ? (props) => props.height : 0)}px;
  transition: 0.333s;
`;

export const Collapsable = styled.div``;
