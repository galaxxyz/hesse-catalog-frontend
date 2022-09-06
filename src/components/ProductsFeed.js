import { useEffect, useState } from 'react';
import api from '../services/api';
import ProductCard from './ProductCard';
import styled from 'styled-components';

const ProductsFeed = ({ activeTypes, activeSubscriptions }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.getProducts().then((res) => {
      setProducts(res.data);
      setLoading(false);
    });
  }, []);

  const getFiltredFeed = () => {
    let filtred = [...products];
    if (activeTypes.length !== 0)
      filtred = products.filter((p) =>
        p.attributes.product_types.data.some((t) =>
          activeTypes.includes(t.attributes.name)
        )
      );
    if (activeSubscriptions.length !== 0)
      filtred = filtred.filter((p) =>
        activeSubscriptions.includes(
          p.attributes.subscription_type.data.attributes.name
        )
      );
    return filtred.map((p) => <ProductCard key={p.id} product={p} />);
  };

  return (
    <FeedWrapper>{loading ? <p>Loading...</p> : getFiltredFeed()}</FeedWrapper>
  );
};

const FeedWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  & > div {
    border-top: 1px solid #828282;
  }
  & > div:nth-child(2n + 3) {
    padding-right: 2px;
  }
  & > div:nth-child(2n + 4) {
    padding-left: 2px;
  }
`;

export default ProductsFeed;
