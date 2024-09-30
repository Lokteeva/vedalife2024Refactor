import {
  FC,
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import { Col, Row } from "../Grid";

import { ArrowButton } from "./components";
import * as Styled from "./styles";
import type { AccordionProps } from "./types";

export const Accordion: FC<PropsWithChildren<AccordionProps>> = (props) => {
  const { children, title, isOpen: isOpenProp } = props;

  const colapsableElement = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(isOpenProp ?? false);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    if (colapsableElement.current) {
      setHeight(colapsableElement.current.offsetHeight!);
    }
  }, [children, colapsableElement.current]);

  const handleOpenToggle = useCallback(() => {
    setIsOpen(!isOpen);
  }, [setIsOpen, isOpen]);

  return (
    <Styled.Wrapper>
      <Row gutter={12}>
        <Col>{title}</Col>
        <Col>
          <ArrowButton isOpen={isOpen} onClick={handleOpenToggle} />
        </Col>
      </Row>
      <Styled.CollapsableWrapper isOpen={isOpen} height={height}>
        <Styled.Collapsable ref={colapsableElement}>
          {children}
        </Styled.Collapsable>
      </Styled.CollapsableWrapper>
    </Styled.Wrapper>
  );
};
