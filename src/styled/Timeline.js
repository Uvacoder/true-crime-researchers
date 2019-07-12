import styled from "@emotion/styled"

export const List = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;

  .item {
    padding-left: 40px;
    position: relative;

    &:last-of-type {
      padding-bottom: 0;
    }
  }

  .info {
    color: ${props => props.theme.colors.mute};
    margin-bottom: 8px;
    text-transform: uppercase;
    white-space: nowrap;
  }

  .time {
    display: block;
  }

  .title {
    font-weight: 600;
    margin-bottom: 8px;
  }

  .marker {
    bottom: 0;
    position: absolute;
    left: 0;
    top: 0;
    width: 15px;

    &::before {
      background: ${props => props.theme.colors.detail};
      border: 1px solid transparent;
      border-radius: 100%;
      content: "";
      display: block;
      height: 15px;
      left: 0;
      position: absolute;
      top: 4px;
      transition: background 0.3s ease-in-out, border 0.3s ease-in-out;
      width: 15px;
    }

    &:after {
      background: ${props => props.theme.colors.detail};
      content: "";
      display: block;
      left: 6px;
      position: absolute;
      top: 24px;
      bottom: 0;
      width: 1px;
    }

    .item:last-child &:after {
      content: none;
    }
  }

  .content {
    padding-bottom: 40px;

    p {
      margin: 0;
    }
  }

  .period {
    padding: 0;

    .info {
      display: none;
    }

    .marker {
      &:before {
        background: transparent;
        content: "";
        width: 15px;
        height: auto;
        border: none;
        border-radius: 0;
        top: 0;
        bottom: 30px;
        position: absolute;
        border-top: 3px solid #ccd5db;
        border-bottom: 3px solid #ccd5db;
      }

      &:after {
        content: "";
        height: 32px;
        top: auto;
      }
    }

    .content {
      padding: 40px 0 70px;
    }

    .title {
      margin: 0;
    }
  }

  .marker-outline {
    .marker {
      &:before {
        background: transparent;
        border-color: pink;
      }
    }
    .item:hover .marker:before {
      background: pink;
    }
  }

  @media (min-width: 768px) {
    display: table;

    .item {
      display: table-row;
      padding: 0;
    }
    .info,
    .marker,
    .content,
    .period .info {
      display: table-cell;
      vertical-align: top;
    }
    .marker {
      position: relative;
    }
    .content {
      padding-left: 30px;
    }
    .info {
      padding-right: 30px;
    }
    .period .title {
      position: relative;
      left: -45px;
    }
  }

  @media (min-width: 992px) {
    &,
    .item,
    .info,
    .marker,
    .content {
      display: block;
      margin: 0;
      padding: 0;
    }
    .item {
      padding-bottom: 40px;
      overflow: hidden;
    }
    .marker {
      position: absolute;
      left: 50%;
      margin-left: -7.5px;
    }
    .title {
      margin-top: -8px;
    }
    .info {
      font-size: 80%;
      margin-top: -2px;
    }
    .info,
    .content {
      width: 50%;
    }
    > .item:nth-child(odd) .info {
      float: left;
      text-align: right;
      padding-right: 30px;
    }
    > .item:nth-child(odd) .content {
      float: right;
      text-align: left;
      padding-left: 30px;
    }
    > .item:nth-child(even) .info {
      float: right;
      padding-left: 30px;
    }
    > .item:nth-child(even) .content {
      float: left;
      padding-right: 30px;
      text-align: right;
    }
    > .item.period .content {
      float: none;
      padding: 0;
      width: 100%;
      text-align: center;
    }
    .item.period {
      padding: 50px 0 90px;
    }
    .period .marker:after {
      height: 30px;
      bottom: 0;
      top: auto;
    }
    .period .title {
      left: auto;
    }
  }
`
