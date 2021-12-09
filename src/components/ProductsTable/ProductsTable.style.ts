import styled from "styled-components";

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th {
    font-weight: bold;
  }

  th, td {
    text-align: left;
    padding: 8px;
  }

  thead tr, tr:nth-child(even) {
    background: ${({theme}) => theme.colors.grey};
  }
`;