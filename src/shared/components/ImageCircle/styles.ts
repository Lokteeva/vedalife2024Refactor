import styled from 'styled-components';

export const ImgUI = styled.img<{size?: number}>`
  width: ${props => props.size + "px"};
  border-radius: 50%;
  box-shadow: 5px 7px 20px rgba(0, 0, 0, 0.3);
`;
