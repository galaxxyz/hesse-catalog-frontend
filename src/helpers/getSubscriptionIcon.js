import { GoldIcon, PlatinumIcon, SilverIcon } from '../assets';

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

export default getSubscriptionIcon;
