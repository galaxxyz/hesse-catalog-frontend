import styled, { css } from 'styled-components';

const SubscriptionButton = styled.button`
  color: ${(props) => props.color};
  background-color: #ffffff;
  padding: 4px 12px 2px;
  border: 2px solid ${(props) => props.color};
  border-radius: 7px;
  font-family: 'Arial';
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.02em;
  text-transform: capitalize;
  svg path {
    color: ${(props) => props.color};
    fill: currentcolor;
  }

  ${(props) =>
    props.active &&
    css`
      color: #ffffff;
      background: ${(props) => props.color};
      svg path {
        color: #ffffff;
        fill: currentcolor;
      }
    `}
`;

export default SubscriptionButton;
