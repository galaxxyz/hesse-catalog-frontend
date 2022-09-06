import styled from 'styled-components';

const Header = ({ modal, setModal }) => {
  return (
    <HeaderWrapper>
      <Filter onClick={() => setModal(!modal)}>Filtra</Filter>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  padding: 12px;
  display: flex;
  justify-content: end;
`;

const Filter = styled.p`
  margin: 0;
  font-family: 'Arial';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 21px;
  letter-spacing: 0.02em;
  color: #171717;
`;

export default Header;
