import React, { FC } from 'react';

import styled from '@emotion/styled';
import { Image } from 'semantic-ui-react';
import { ImageProps } from 'semantic-ui-react/dist/commonjs/elements/Image';

const CardThumnail: FC<ImageProps> = ({ children, ...props }) => {
  const Thumnail = styled(Image)`
    background-size: contain;
    filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.1));
    margin-bottom: 0 !important;
    width: 250px;
  `;

  return (
    <Thumnail {...props} loading="lazy">
      {children}
    </Thumnail>
  );
};
export default CardThumnail;
