import IMG from '../../../public/image/12.jpg';
import { linkTelega, linkWA } from '../../constants';
import { ButtonUI, ImageCircle, Row, TextUI } from '../../shared';
import * as Styled from './styles';

export const ProgrammFestival = () => {
  return (
    <Styled.Wrapper>
      <ImageCircle src={IMG} alt="photo" size={450} />
      <Row direction="column" gap={16}>
        <TextUI family="Regular" spacing="1.8px" size={32} color="pink" bold>
          программа фестиваля
        </TextUI>
        <p>Встретьте Новый 2025 год в кругу светлых и приятных людей!</p>
        <strong>В программе фестиваля:</strong>
        <Styled.ul>
          <li>🔹 Самый трезвый Новый год</li>
          <li>🔸 Без глупых шоу из телевизора</li>
          <li>🔹 Только вегетарианское кулинарное разнообразие</li>
          <li>🔸 Совместные медитации</li>
          <li>🔹 Церемонии коррекции судьбы (ягьи)</li>
          <li>🔸 Взрывной новогодний огонек со спектаклем</li>
          <li>🔹 Семинары и тренинги для прокачки себя</li>
        </Styled.ul>
        <strong>И бонусом для вас будет:</strong>
        <Styled.ul>
          <li>🔹 Йога каждое утро</li>
          <li>🔸 Абхазия за 1 день (тур за доп плату)</li>
          <li>🔹 Море, горы и солнце среди зимы</li>
        </Styled.ul>
        <strong>
          Почетный гость фестиваля - Бхакти Расаяна Сагара Свами <br />
          (настоящий монах, который практикует более 30-ти лет)
        </strong>
        <p>Есть вопросы? Напишите нам по кнопкам ниже</p>
        <Row justify="center" gap={16} mt={24}>
          <ButtonUI link={linkWA}>Написать в Whatsapp</ButtonUI>
          <ButtonUI link={linkTelega}>Написать в Telegram</ButtonUI>
        </Row>
      </Row>
    </Styled.Wrapper>
  );
};
