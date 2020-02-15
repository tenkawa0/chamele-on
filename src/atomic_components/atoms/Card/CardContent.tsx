import React from 'react';
import Card from 'semantic-ui-react/dist/commonjs/views/Card';
import { CardContentProps } from 'semantic-ui-react/dist/commonjs/views/Card/CardContent';

const CardContent: React.FC<CardContentProps> = ({ children, ...props }) => {
  return <Card.Content {...props}>{children}</Card.Content>;
};

export default CardContent;
