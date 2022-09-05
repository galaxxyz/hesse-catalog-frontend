/* eslint-disable react/prop-types */
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

const ProductsFeed = ({ activeTypes }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getFiltredFeed = () => {
    let filtred = [...products];
    if (activeTypes.length !== 0)
      filtred = products.filter((p) =>
        p.attributes.product_types.data.some((t) =>
          activeTypes.includes(t.attributes.name)
        )
      );
    return filtred.map((p) => <ProductCard key={p.id} product={p} />);
  };

  useEffect(() => {
    api.getProducts().then((res) => {
      setProducts(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <FeedWrapper>{loading ? <p>Loading...</p> : getFiltredFeed()}</FeedWrapper>
  );
};

export default ProductsFeed;
