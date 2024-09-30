import { FC, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { Text } from "@consta/uikit/Text";
import { presetGpnDefault, Theme } from "@consta/uikit/Theme";

import { Row } from "../Grid";
import { ReactPortal } from "../ReactPortal";

import * as Styled from "./styles";
import type { ModalProps } from "./types";
export const Modal: FC<ModalProps> = (props) => {
  const { title, isOpen, onClose, onAfterOpen, onAfterClose, children, width } =
    props;

  useEffect(() => {
    if (isOpen && onAfterOpen) {
      onAfterOpen();
    }
    const rootEl = document.querySelector("#root");
    const className = "open-modal";
    if (isOpen) {
      rootEl?.classList.add(className);
    } else {
      rootEl?.classList.remove(className);
    }
  }, [isOpen]);

  useEffect(() => {
    const closeOnEscapeKey = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [onClose]);

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <CSSTransition
        in={isOpen}
        timeout={{ entry: 0, exit: 300 }}
        unmountOnExit
        onExited={onAfterClose}>
        {(state) => {
          return (
            <Theme preset={presetGpnDefault}>
              <Styled.Wrapper state={state} onClick={onClose}>
                <Styled.Content
                  width={width}
                  state={state}
                  onClick={(event) => {
                    event.stopPropagation();
                  }}>
                  <Styled.Close onClick={onClose}>
                    <Styled.IconClose />
                  </Styled.Close>
                  <Row justify="between">
                    <Text size="m" weight="bold">
                      {title}
                    </Text>
                  </Row>
                  <div>{children}</div>
                </Styled.Content>
              </Styled.Wrapper>
            </Theme>
          );
        }}
      </CSSTransition>
    </ReactPortal>
  );
};
