import * as Styled from './styles';

type Props = {
  size: number;
}

export const ImageCircle = (props: Props) => {
  const { size } = props;
  return <Styled.ImgUI {...props} size={size} />;
};
