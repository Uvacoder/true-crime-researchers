import styled from "@emotion/styled"

export const MetaTable = styled.table`
  tr:not(:first-child) td {
    border-top: 1px solid ${props => props.theme.colors.detail};
  }

  td:first-of-type {
    font-size: 80%;
    text-transform: uppercase;
  }

  td:last-of-type {
    padding: 4px 0 4px 16px;
  }
`
