import styled from 'styled-components';

export const December = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4vh;
  width: 12vh;
  background-color: var(--pink);
  border-radius: 20px;
  color: white;
  font-size: 20px;
  z-index: 1;
`;

export const January = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 0 12px 0 0;
  height: 4vh;
  width: 12vh;
  background-color: var(--white);
  border-radius: 20px;
  color: var(--pink);
  font-size: 20px;
  margin-left: -35px;
`;

export const DecBlue = styled(December)`
  background-color: var(--darkBlue);
`;

export const JanBlue = styled(January)`
  color: var(--darkBlue);
`;
