import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { Card } from 'semantic-ui-react';
import { CardDescriptionProps } from 'semantic-ui-react/dist/commonjs/views/Card/CardDescription';
import { ThemeContext } from 'contexts';

const CardDescription: React.FC<CardDescriptionProps> = ({
  children,
  ...props
}) => {
  const theme = useContext(ThemeContext);
  const Description = styled(Card.Description)`
    &&& {
      color: ${theme.color.black};
      font-size: 0.8rem;
      margin-top: 0.3rem;
    }
  `;

  return <Description {...props}>{children}</Description>;
};

export default CardDescription;
