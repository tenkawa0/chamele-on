import React from 'react';
import styled from '@emotion/styled';
import { Label } from 'semantic-ui-react';
import { LabelProps } from 'semantic-ui-react/dist/commonjs/elements/Label';
// import { ThemeContext } from 'contexts';

const CardStatus: React.FC<LabelProps> = ({ children, ...props }) => {
  // const theme = useContext(ThemeContext);
  const Status = styled(Label)`
    &&& {
      font-size: 0.1rem;
    }
  `;

  return (
    <Status ribbon as="a" color="blue" {...props}>
      {children}
    </Status>
  );
};

export default CardStatus;
