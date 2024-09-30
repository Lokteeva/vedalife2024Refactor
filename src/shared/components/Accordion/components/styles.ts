import styled from "styled-components";

export const Arrow = styled.button<{ isOpen: boolean }>((props) => {
  const { isOpen } = props;
  const rotate = isOpen ? 180 : 0;

  return `
        width: 20px;
        height: 20px;
        background-color: transparent;
        outline: none;
        box-shadow: none;
        padding: 0;
        display: flex;
        border: none;
        transform: rotate(${rotate}deg);
        transition: 0.333s;
        cursor: pointer;
    `;
});

export const Text = styled.div``;
