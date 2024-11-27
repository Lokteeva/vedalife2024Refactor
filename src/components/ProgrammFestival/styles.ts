import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 150px;
  margin-bottom: 24px;

  @media (max-width: 1200px) {
    gap: 50px;
  }

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    align-items: center;
    gap: 24px;
  }
`;

export const ul = styled.ul`
  list-style: none;
`;
