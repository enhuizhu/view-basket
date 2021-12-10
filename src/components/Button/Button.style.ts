import styled from "styled-components";

export const StyledButton: any = styled.span`
  background: ${(props: any) => props?.theme?.colors[`${props.type}`]};
  border-radius: ${(props: any) => props.round ? '20px' : '2px'};
  padding: ${(props: any) => props.size === 'small' ? '5px 10px' : '10px 25px'};
  font-size: ${(props: any) => props.size === 'small' ? '13px' : '16px'};
  display: inline-block;
  cursor: pointer;
  color: ${({theme}) => theme.colors.white};
`;
