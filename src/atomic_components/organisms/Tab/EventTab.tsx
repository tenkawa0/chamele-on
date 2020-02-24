import React from 'react';
// import styled from '@emotion/styled';
import { Tab } from 'semantic-ui-react';
import { TabPaneProps } from 'semantic-ui-react/dist/commonjs/modules/Tab/TabPane';
import { SemanticShorthandItem } from 'semantic-ui-react/dist/commonjs/generic.d';

const EventTab: React.FC<{
  panes: {
    pane: SemanticShorthandItem<TabPaneProps>;
    menuItem: string;
  }[];
}> = ({ panes }) => {
  return <Tab panes={panes} renderActiveOnly={false} />;
};

export default EventTab;
