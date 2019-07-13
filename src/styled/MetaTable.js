import styled from "@emotion/styled"

export const MetaTable = styled.table`
  tr:not(:first-of-type) td {
    border-top: 1px dashed
      ${props =>
        props.invert ? "rgba(255, 255, 255, 0.3)" : props.theme.colors.detail};
  }

  td:first-of-type {
    color: ${props =>
      props.invert ? props.theme.colors.textInvert : props.theme.colors.mute};
    font-size: 80%;
    text-transform: uppercase;
  }

  td:last-of-type {
    padding: 4px 0 4px 16px;
  }
`
