import { sail } from '../../constants';
import { Row, TextUI } from '../../shared';
import * as Styled from './styles';

export const HomeBaner = () => {
  return (
    <>
      <Styled.Image src="./image/1920-768.jpg" alt="banner" />
      <Styled.ImageMobile src="./image/1000-700.jpg" alt="banner" />

      <Row justify="center" mt={24} direction="column" gap={10} >
        <TextUI color="pink" family="Book" size={36} spacing="2px" bold>
          Первые 10 мест по скидке {sail}
        </TextUI>
        <TextUI family="Book" size={24} spacing="2px">
          +1 день отдыха бесплатно
        </TextUI>
        <TextUI family="Book" size={24} spacing="2px">
          Успейте занять одно из 10-ти первых мест по скидке {sail}
        </TextUI>
      </Row>

      <a className="baner__button" href="https://wa.me/79631626238 ">
          Написать в Whatsapp
        </a>
        <a className="baner__button" href="https://t.me/aana_ambika">
          Написать в Telegram
        </a>
    </>
  );
};
