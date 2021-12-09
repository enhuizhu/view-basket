import React, { FC } from "react";
import { StyledPanelHeader, StyledPanelBody } from './Panel.style';

interface PanelProps {
  children: any
  title: any
}

export const Panel: FC<PanelProps> = ({children, title}) => {
  return <div>
    <StyledPanelHeader>{title}</StyledPanelHeader>
    <StyledPanelBody>
      {children}
    </StyledPanelBody>
  </div>;
}