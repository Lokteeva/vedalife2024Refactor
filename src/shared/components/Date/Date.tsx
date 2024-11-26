import { Row } from '../Grid';
import { TextUI } from '../TextUI';
import * as Styled from './styles';


export const DateUI = () => {
  return (
    <Row direction="column" mb={16}>
      <TextUI size={110} color="white" family="Book" bold>
        28–4
      </TextUI>

      <Row>
        <Styled.December >декабря</Styled.December>
        <Styled.January>января</Styled.January>
      </Row>
    </Row>
  );
};

export const DateBlueUI = () => {
  return (
    <Row direction="column" mb={16}>
      <TextUI size={110} color="white" family="Book" bold>
        28–4
      </TextUI>

      <Row>
        <Styled.DecBlue >декабря</Styled.DecBlue>
        <Styled.JanBlue>января</Styled.JanBlue>
      </Row>
    </Row>
  );
};
