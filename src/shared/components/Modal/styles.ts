import styled from "styled-components";

import { IconClose as IconCloseUI } from "../Icon/components";

type TransitionState = "entering" | "entered" | "exited";

export const Wrapper = styled.div<{ state: TransitionState }>((props) => {
  const { state } = props;
  const fadeIn = state === "entering" || state === "entered";
  const opacity = fadeIn ? 1 : 0;
  const pointerEvents = fadeIn ? "auto" : "none";

  return `
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease-in-out;
    overflow: hidden;
    // z-index: 999;
    opacity: ${opacity};
    pointer-events: ${pointerEvents};
    `;
});

export const Close = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;

  svg {
    width: 12px;
    height: 12px;
  }
`;

export const Content = styled.div<{ state: TransitionState; width?: string }>(
  (props) => {
    const { state, width = "auto" } = props;
    const fadeIn = state === "entering" || state === "entered";
    const transform = fadeIn ? "scale(1)" : "scale(0.5)";

    return `
      border-radius: 10px;
      box-shadow: 0px 6.4px 28px 0px rgba(0, 0, 0, 0.12), 0px 1.2px 18px 0px rgba(0, 0, 0, 0.08);
      background: #fff;
      padding: 24px;
      max-width: ${width};
      width: auto;
      transform: ${transform};
      transition: all 0.4s ease-in-out;
      position: relative;
  `;
  },
);

export const Title = styled.h2`
  font-size: 18px;
  font-style: normal;
  font-weight: 550;
  line-height: 24px;
  padding-right: 40px;
  margin-top: 0;
  margin-bottom: 16px;
`;

export const IconClose = styled(IconCloseUI)`
  color: #7e808f;
`;
