import React from 'react';
import styled from '@emotion/styled';
import { Label } from 'semantic-ui-react';
import { LabelProps } from 'semantic-ui-react/dist/commonjs/elements/Label';
// import { ThemeContext } from 'contexts';

const CardDate: React.FC<LabelProps> = ({ children, ...props }) => {
  const Date = styled(Label)`
    opacity: 0.8;
  `;

  return (
    <Date {...props} ribbon color="blue">
      {children}
    </Date>
  );
};

export default CardDate;
