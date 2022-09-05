import styled from 'styled-components';
import { ProductsFeed } from './components';
import GlobalStyle from './globalStyles';

const AppContainer = styled.div`
  margin: 0 auto;
  max-width: 600px;
`;

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <ProductsFeed />
    </AppContainer>
  );
}

export default App;
