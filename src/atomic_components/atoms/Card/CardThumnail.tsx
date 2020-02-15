import React, { FC } from 'react';

import styled from '@emotion/styled';
import { Image } from 'semantic-ui-react';
import { ImageProps } from 'semantic-ui-react/dist/commonjs/elements/Image';

const CardThumnail: FC<ImageProps> = ({ children, ...props }) => {
  const Thumnail = styled.div`
    background-size: contain;
    margin-bottom: 10px;

    @media screen and (min-width: 1024px) {
      width: 30% !important;
    }
  `;

  return (
    <Thumnail>
      <Image {...props} loading="lazy" bordered>
        {children}
      </Image>
    </Thumnail>
  );
};
export default CardThumnail;
