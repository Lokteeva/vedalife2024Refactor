import { ImageCircle, Row, TextUI } from "../../shared";
import IMG from '../../../public/image/10.jpg';
import * as Styled from "./styles";

export const Festival = () => {
  return <Styled.Wrapper>
  <Row direction="column" gap={16} mb={24}>
  <TextUI family="Book" spacing="1.8px" size={32} color="pink" bold>Фестиваль и новый год</TextUI>
  <p>
              Фестиваль Ведалайф проходит уже <strong>больше 10 лет</strong>. За это время было проведено почти <strong>40
              фестивалей!</strong>
            </p>
            <p>
              Ведалайф проходит в комфортабельных условиях действующего ашрама в 15 минутах ходьбы
              до моря и под чутким руководством заботливых администраторов. Вы будете обогреты
              теплотой нашего коллектива в это прохладное время года.
            </p>
            <p>
             <strong> У нас уже были и рекомендуют: Сатья, Владимир Древс, Сагара Свами, Бхакти Чайтанья
              Свами, Бхагават</strong>
            </p>
  </Row>
  <ImageCircle src={IMG} alt="photo" size={450} />

  </Styled.Wrapper>;
};