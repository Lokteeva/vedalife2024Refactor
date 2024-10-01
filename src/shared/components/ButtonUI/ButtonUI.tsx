import * as Styled from './styles';

type Props = {
  link: string;
}

export const ButtonUI = (props: Props) => {
  const { link } = props;
  return <Styled.ButtonUI {...props} onClick={() => (window.location.href = `${link}`)} />;
};
