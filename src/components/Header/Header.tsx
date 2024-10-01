import {
  ButtonSocial,
  IconInstagram,
  IconTelegram,
  IconVK,
  IconWA,
  Row,
  TextUI,
} from '../../shared';
import * as Styled from './styles';

export const Header = () => {
  return (
    <>
      <Styled.Line />
      <Styled.WrapperHeader>
        <Row  ml={50} gap={16}>
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
          <a href="tel:+79631626238">
            <TextUI family="Regular" color="white" size={24} hover>
              +7 963 162 6238
            </TextUI>
          </a>
        </Row>

        <Row gap={16} mr={50}>
          <a href="#footer">
            <TextUI family="Regular" color="white" size={24} spacing="2px" hover>
              о нас
            </TextUI>
          </a>

          <a href="#newYear">
            <TextUI family="Regular" color="white" size={24} spacing="2px" hover>
              фестиваль
            </TextUI>
          </a>

          <a href="#programmFestival">
            <TextUI family="Regular" color="white" size={24} spacing="2px" hover>
              программа
            </TextUI>
          </a>
        </Row>
      </Styled.WrapperHeader>
    </>
  );
};
