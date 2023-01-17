import React, { ButtonHTMLAttributes, useContext } from 'react';
import { IconBaseProps } from 'react-icons';
import { ThemeContext } from 'styled-components';

import { Container, Text } from './styles';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  ref?: any;
  style?: object;
  icon?: React.ComponentType<IconBaseProps>;
  iconSize?: number;
  iconColor?: any;
  text?: string;
}

function Button({
  ref,
  style,
  icon: Icon,
  iconSize,
  iconColor,
  text,
  children,
  ...rest
}: IButton) {
  const { palette } = useContext(ThemeContext);

  return (
    <Container type="button" ref={ref} style={style} {...rest}>
      {Icon && (
        <Icon size={iconSize} color={iconColor || palette.TEXT.CONTRAST_TWO} />
      )}
      <Text>{text}</Text>
      {children}
    </Container>
  );
}

export { Button };
