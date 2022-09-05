import { useEffect, useState } from 'react';
import api from '../services/api';
import ProductCard from './ProductCard';
import styled from 'styled-components';

const FeedWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  & > div {
    border-top: 1px solid #828282;
  }
  & > div:nth-child(2n + 1) {
    padding-right: 2px;
  }
  & > div:nth-child(2n) {
    padding-left: 2px;
  }
`;

const ProductsFeed = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.getProducts().then((res) => {
      setProducts(res.data);
      setLoading(false);
    });
  }, []);
  return (
    <FeedWrapper>
      {loading ? (
        <p>Loading...</p>
      ) : (
        products.map((p) => <ProductCard key={p.id} product={p} />)
      )}
    </FeedWrapper>
  );
};

export default ProductsFeed;
