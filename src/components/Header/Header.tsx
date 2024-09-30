import { ButtonSocial, IconInstagram, IconTelegram, IconVK, IconWA, Row } from '../../shared';
import * as Styled from './styles';

export const Header = () => {
  return (
    <>
      <Styled.Line />
      <Styled.WrapperHeader>
        <Row cg={16}>
          <ButtonSocial link="https://vk.com/vedalife_sochi">
            <IconVK />
          </ButtonSocial>
          <ButtonSocial link="https://instagram.com/vedalife">
            <IconInstagram />
          </ButtonSocial>
          <ButtonSocial>
            <IconWA />
          </ButtonSocial>
          <ButtonSocial>
            <IconTelegram />
          </ButtonSocial>
          <a href="tel:+79631626238">+7 963 162 6238</a>
          <Styled.Nav>
            <ul>
              <li>
                <a href="#footer">о нас</a>
              </li>
              <li>
                <a href="#newYear">фестиваль</a>
              </li>
              <li>
                <a href="#programmFestival">программа</a>
              </li>
            </ul>
          </Styled.Nav>
        </Row>
      </Styled.WrapperHeader>
    </>
  );
};
