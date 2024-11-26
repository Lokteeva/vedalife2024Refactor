import { DateBlueUI, DateUI, TextUI } from '../../shared';
import * as Styled from './styles';

export const NewYear = () => {
  return (
    <Styled.Wrapper>
      <DateUI />

      <TextUI color="white" family="Book" spacing="2px" size={50}>
        Новогодний фестиваль
        <br /> в ашраме!
      </TextUI>
    </Styled.Wrapper>
  );
};

export const NewYearBlue = () => {
  return (
    <Styled.WrapperBlue>
      <TextUI color="white" family="Book" spacing="2px" size={50}>
        Спикеры фестиваля
      </TextUI>
      <DateBlueUI />
    </Styled.WrapperBlue>
  );
};
