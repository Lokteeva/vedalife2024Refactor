import { Col, ImageCircle, Row, TextUI } from '../../shared';
import IMG from '../../../public/image/10.jpg';
import * as Styled from './styles';

export const Festival = () => {
  return (
    <Styled.Wrapper>
      <Row direction="column" gap={16} mb={24}>
        <TextUI family="Regular" spacing="1.8px" size={32} color="pink" bold>
          Фестиваль и новый год
        </TextUI>
          <Col span={10}>
            Фестиваль Ведалайф проходит уже <strong>больше 10 лет</strong>. За это время было
            проведено почти <strong>40 фестивалей!</strong>
          </Col>

          <Col span={10}>
            Ведалайф проходит в комфортабельных условиях действующего ашрама в 15 минутах ходьбы до
            моря и под чутким руководством заботливых администраторов. Вы будете обогреты теплотой
            нашего коллектива в это прохладное время года.
          </Col>
          <Col span={10}>
            <strong>
              У нас уже были и рекомендуют: Сатья, Владимир Древс, Сагара Свами, Бхакти Чайтанья
              Свами, Бхагават
            </strong>
          </Col>
      </Row>
      <ImageCircle src={IMG} alt="photo" size={450} />
    </Styled.Wrapper>
  );
};
