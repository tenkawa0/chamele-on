import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { Card } from 'semantic-ui-react';
import { CardHeaderProps } from 'semantic-ui-react/dist/commonjs/views/Card/CardHeader';
import { ThemeContext } from 'contexts';

const CardTitle: React.FC<CardHeaderProps> = ({ children, ...props }) => {
  const theme = useContext(ThemeContext);
  const Title = styled(Card.Header)`
    color: ${theme.color.black};
    font-weight: bold;
  `;

  return <Title {...props}>{children}</Title>;
};

export default CardTitle;
