import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin-bottom: 16px;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
`;
