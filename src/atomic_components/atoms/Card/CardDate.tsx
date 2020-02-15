import React from 'react';
import { Label } from 'semantic-ui-react';
import { LabelProps } from 'semantic-ui-react/dist/commonjs/elements/Label';
// import { ThemeContext } from 'contexts';

const CardDate: React.FC<LabelProps> = ({ children, ...props }) => {
  return (
    <Label {...props} ribbon color="teal">
      {children}
    </Label>
  );
};

export default CardDate;
