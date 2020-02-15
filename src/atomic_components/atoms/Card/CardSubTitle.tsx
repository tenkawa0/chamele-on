import React from 'react';
import styled from '@emotion/styled';
import { Card } from 'semantic-ui-react';
import { CardMetaProps } from 'semantic-ui-react/dist/commonjs/views/Card/CardMeta';

const CardSubTitle: React.FC<CardMetaProps> = ({ children, ...props }) => {
  const SubTitle = styled(Card.Meta)`
    &&& {
      font-size: 0.8rem;
    }
  `;

  return <SubTitle {...props}>{children}</SubTitle>;
};

export default CardSubTitle;
