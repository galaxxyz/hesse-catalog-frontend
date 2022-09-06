import { useState } from 'react';
import styled from 'styled-components';
import {
  ProductsFeed,
  ProductTypeFilter,
  Header,
  ModalFilter,
} from './components';
import GlobalStyle from './globalStyles';

function App() {
  const [activeTypes, setActiveTypes] = useState([]);
  const [activeSubscriptions, setActiveSubscriptions] = useState([]);

  const [modal, setModal] = useState(false);
  if (modal) {
    document.body.classList.add('active');
  } else {
    document.body.classList.remove('active');
  }

  return (
    <AppContainer>
      <GlobalStyle />
      {modal && (
        <ModalFilter
          modal={modal}
          setModal={setModal}
          activeSubscriptions={activeSubscriptions}
          setActiveSubscriptions={setActiveSubscriptions}
        />
      )}
      <Header modal={modal} setModal={setModal} />
      <ProductTypeFilter
        activeTypes={activeTypes}
        setActiveTypes={setActiveTypes}
      />
      <ProductsFeed
        activeTypes={activeTypes}
        activeSubscriptions={activeSubscriptions}
      />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  margin: 0 auto;
  max-width: 600px;
`;

export default App;
