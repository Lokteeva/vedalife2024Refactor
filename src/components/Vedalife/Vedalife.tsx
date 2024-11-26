import IMG from '../../../public/image/img01.jpg';
import NewDjPuri from '../../../public/image/NewDjPuri.png';
import { Col, ImageCircle, Row, TextUI } from '../../shared';
import * as Styled from './styles';

export const Vedalife = () => {
  return (
    <Styled.Wrapper>
      <ImageCircle src={IMG} alt="photo" size={450} />
      <Row direction="column">
        <Row mb={16}>
          <TextUI color="pink" size={32} family="Regular" bold spacing="2px">
            Что такое Ведалайф?
          </TextUI>
        </Row>
        <Row direction="column" gap={16}>
          <Col span={9}>
            <strong>Новогодний Ведалайф</strong> - это ежегодный фестиваль в Сочи, посвященный
            ведическим наукам, искусствам и знаниям. Ашрам Сочи "Нью Джаганнатха Пури" является
            домом фестиваля, а также самым уютным домом для гостей. Зимний Ведалайф раскрывает
            многие секреты ведического мировоззрения для искушенных и начинающих в формате
            новогоднего праздника, релакса и счастья.
          </Col>
          <img src={NewDjPuri} style={{ width: 400, height: 35 }} />
        </Row>
      </Row>
    </Styled.Wrapper>
  );
};
