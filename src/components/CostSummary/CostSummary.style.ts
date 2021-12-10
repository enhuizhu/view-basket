import styled from "styled-components";

export const StyledFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const StyledLabel: any = styled.label`
  color: ${(props: any) => props?.bold ? props.theme.colors.black : props.theme.colors.darkGrey};
  font-weight: ${(props: any) => props?.bold ? 'bold' : 'normal'};
`;