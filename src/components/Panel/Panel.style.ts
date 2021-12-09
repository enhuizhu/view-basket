import styled from "styled-components";

export const StyledPanelHeader = styled.div`
  padding: 8px;
  font-size: 16px;
  font-weight: bold;
  background: ${({theme}) => theme.colors.grey};
`;

export const StyledPanelBody = styled.div`
  padding: 20px;
  border: solid 1px ${({theme}) => theme.colors.grey};
  border-top: none;
  font-size: 15px;
`;