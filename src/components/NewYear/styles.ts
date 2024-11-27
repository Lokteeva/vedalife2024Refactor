import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 100px;
  height: 22vh;
  background-color: var(--litePink);
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;

  @media (max-width: 900px) {
    gap: 30px;
  }
`;

export const WrapperBlue = styled(Wrapper)`
  background-color: var(--liteBlue);
`;
