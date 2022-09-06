import { useEffect, useState } from 'react';
import api from '../services/api';
import styled from 'styled-components';
import { ArrowDown } from '../assets';
import SubscriptionButton from './SubscriptionButton';
import DefaultButton from './DefaultButton';
import getSubscriptionIcon from '../helpers/getSubscriptionIcon';

const ModalFilter = ({
  modal,
  setModal,
  activeSubscriptions,
  setActiveSubscriptions,
}) => {
  const [subscriptions, setSubscriptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newActiveSubs, setNewActiveSubs] = useState(activeSubscriptions);

  useEffect(() => {
    api.getSubscriptions().then((res) => {
      setSubscriptions(res.data);
      setLoading(false);
    });
  }, []);

  const handleClick = (subscription) => {
    if (newActiveSubs.includes(subscription)) {
      setNewActiveSubs(newActiveSubs.filter((s) => s !== subscription));
    } else {
      setNewActiveSubs([...newActiveSubs, subscription]);
    }
  };

  return (
    <ModalWraper>
      <Overlay>
        <ModalContent>
          <ModalControl>
            <ArrowDown
              onClick={() => {
                setNewActiveSubs(activeSubscriptions);
                setModal(!modal);
              }}
            />
          </ModalControl>
          <ModalTitle>Filtra la ricerca</ModalTitle>
          <FilterSection>
            <p>Abbonamento</p>
            <FilterOptions>
              {loading ? (
                <p>Loading...</p>
              ) : (
                subscriptions.map((t) => (
                  <SubscriptionButton
                    key={t.id}
                    active={newActiveSubs.includes(t.attributes.name)}
                    onClick={() => handleClick(t.attributes.name)}
                    color={t.attributes.color}
                  >
                    {getSubscriptionIcon(t.attributes.name)}
                    {t.attributes.monthly_price}€
                  </SubscriptionButton>
                ))
              )}
            </FilterOptions>
            <ConfirmButton
              onClick={() => {
                setActiveSubscriptions(newActiveSubs);
                setModal(!modal);
              }}
            >
              Conferma
            </ConfirmButton>
          </FilterSection>
        </ModalContent>
      </Overlay>
    </ModalWraper>
  );
};

const ModalWraper = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
`;

const Overlay = styled(ModalWraper)`
  background: rgba(0, 0, 0, 0.35);
`;

const ModalContent = styled.div`
  background: white;
  position: absolute;
  top: 3%;
  left: 0;
  right: 0;
  padding: 30px 35px;
  border-radius: 30px 30px 0 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const ModalControl = styled.div`
  display: flex;
  justify-content: end;
`;

const ModalTitle = styled.p`
  font-family: 'Arial';
  font-style: normal;
  font-weight: 700;
  font-size: 27px;
  line-height: 27px;
  letter-spacing: -0.02em;
  color: #000000;
`;

const FilterSection = styled.div`
  & p {
    font-family: 'Arial';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 18px;
    color: #393838;
  }
`;

const FilterOptions = styled.div`
  display: flex;
  column-gap: 20px;
`;

const ConfirmButton = styled(DefaultButton)`
  position: absolute;
  bottom: 62px;
  right: 32px;
`;

export default ModalFilter;
