import * as Styled from './styles';

type Props = {
  text: string;
  color?: string;
  size?: number;
  family?: string;
  uppercase?: string;
  spacing?: string | boolean;
  hover?: boolean;
};

export const TextUI = (props: Props) => {
  const {
    text,
    color = 'black',
    size = 16,
    family = '',
    uppercase = false,
    spacing = false,
    hover = false,
  } = props;
  return (
    <Styled.Text color={color} size={size} family={family} uppercase={uppercase} spacing={spacing} hover={hover}>
      {text}
    </Styled.Text>
  );
};
