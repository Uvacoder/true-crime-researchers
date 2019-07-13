import styled from "@emotion/styled"

export const MetaTable = styled.table`
  tr:not(:first-of-type) td {
    border-top: 1px dashed ${props => props.theme.colors.detail};
  }

  td:first-of-type {
    color: ${props => props.theme.colors.mute};
    font-size: 80%;
    text-transform: uppercase;
  }

  td:last-of-type {
    padding: 4px 0 4px 16px;
  }
`
