import { useEffect, useState } from 'react';
import api from '../services/api';
import styled from 'styled-components';
import ProductTypeButton from './ProductTypeButton';

const ProductTypeFilter = ({ activeTypes, setActiveTypes }) => {
  const [types, setTypes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.getProductTypes().then((res) => {
      setTypes(res.data);
      setLoading(false);
    });
  }, []);

  const handleClick = (type) => {
    if (activeTypes.includes(type)) {
      let filtered = activeTypes.filter((t) => t !== type);
      setActiveTypes(filtered);
    } else setActiveTypes([...activeTypes, type]);
  };

  return (
    <FilterWrapper>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <ProductTypeButton
            active={activeTypes.length === 0}
            onClick={() => setActiveTypes([])}
          >
            All
          </ProductTypeButton>
          {types.map((t) => (
            <ProductTypeButton
              key={t.id}
              active={activeTypes.includes(t.attributes.name)}
              onClick={() => handleClick(t.attributes.name)}
            >
              {t.attributes.name}
            </ProductTypeButton>
          ))}
        </>
      )}
    </FilterWrapper>
  );
};

const FilterWrapper = styled.div`
  padding: 10px 14px;
  border-top: 1px solid #828282;
  display: flex;
  column-gap: 10px;
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default ProductTypeFilter;
