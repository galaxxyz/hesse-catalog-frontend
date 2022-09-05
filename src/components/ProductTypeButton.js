import styled, { css } from 'styled-components';

const ProductTypeButton = styled.button`
  color: #171717;
  background-color: #ffffff;
  padding: 6px 12px 2px 12px;
  border: 1px solid #171717;
  border-radius: 24px;
  font-family: 'Arial';
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.02em;
  text-transform: uppercase;

  ${(props) =>
    props.active &&
    css`
      color: #ffffff;
      background: #171717;
    `}
`;

export default ProductTypeButton;
