/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { GoldIcon, PlatinumIcon, SilverIcon } from '../assets';

const CardWrapper = styled.div``;

const CardImage = styled.img`
  max-width: 100%;
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  padding: 12px;
`;

const CardHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Designer = styled.p`
  font-family: 'Arial';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  color: #393838;
  margin: 0;
`;

const PriceContainer = styled.div`
  display: flex;
  column-gap: 10px;
`;

const RetailPrice = styled.p`
  font-family: 'Arial';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: #a3a3a3;
  text-decoration: line-through;
  margin: 0;
`;

const Subscription = styled.p`
  font-family: 'Arial';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: #171717;
  margin: 0;
`;

const getSubscriptionIcon = (subscription) => {
  switch (subscription) {
    case 'silver':
      return <SilverIcon />;
    case 'gold':
      return <GoldIcon />;
    case 'platinum':
      return <PlatinumIcon />;
    default:
      return null;
  }
};

const ProductCard = ({ product }) => {
  return (
    <CardWrapper>
      <CardImage
        src={`http://localhost:1337${product.attributes.image.data[0].attributes.url}`}
        alt=""
      />
      <CardInfo>
        <CardHeading>
          <Designer>{product.attributes.designer}</Designer>
          {getSubscriptionIcon(
            product.attributes.subscription_type.data.attributes.name
          )}
        </CardHeading>
        <PriceContainer>
          <Subscription>
            {product.attributes.subscription_type.data.attributes.monthly_price}
            € / mese
          </Subscription>
          <RetailPrice>{product.attributes.retail_price}€</RetailPrice>
        </PriceContainer>
      </CardInfo>
    </CardWrapper>
  );
};

export default ProductCard;
