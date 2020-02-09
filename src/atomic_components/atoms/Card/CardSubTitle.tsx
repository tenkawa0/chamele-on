import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { Card } from 'semantic-ui-react';
import { CardMetaProps } from 'semantic-ui-react/dist/commonjs/views/Card/CardMeta';
import { ThemeContext } from 'contexts';

const CardSubTitle: React.FC<CardMetaProps> = ({ children, ...props }) => {
  const theme = useContext(ThemeContext);
  const SubTitle = styled(Card.Meta)`
    && {
      color: ${theme.color.ultraLightGray};
      font-size: 0.5rem;
    }
  `;

  return <SubTitle {...props}>{children}</SubTitle>;
};

export default CardSubTitle;
