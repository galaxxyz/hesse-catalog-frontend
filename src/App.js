import { useState } from 'react';
import styled from 'styled-components';
import { ProductsFeed, ProductTypeFilter } from './components';
import GlobalStyle from './globalStyles';

const AppContainer = styled.div`
  margin: 0 auto;
  max-width: 600px;
`;

function App() {
  const [activeTypes, setActiveTypes] = useState([]);

  return (
    <AppContainer>
      <GlobalStyle />
      <ProductTypeFilter
        activeTypes={activeTypes}
        setActiveTypes={setActiveTypes}
      />
      <ProductsFeed activeTypes={activeTypes} />
    </AppContainer>
  );
}

export default App;
