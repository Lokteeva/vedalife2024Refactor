import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 16px;
  height: 20vh;
  background-color: var(--litePink);
  justify-content: space-around;
  align-items: center;
  margin-bottom: 16px;
`;

export const WrapperBlue = styled(Wrapper)`
  background-color: var(--liteBlue);
`