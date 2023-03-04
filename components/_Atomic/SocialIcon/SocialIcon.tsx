import SocialIconWrapper from './SocialIcon.style';

interface SocialIconProps {
  Icon: React.ReactNode;
  url: string;
}

const SocialIcon = ({ Icon, url }: SocialIconProps) => {
  return <SocialIconWrapper>{Icon}</SocialIconWrapper>;
};

export default SocialIcon;
