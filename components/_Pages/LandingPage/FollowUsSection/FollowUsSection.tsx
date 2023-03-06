import SocialIcon from 'components/_Atomic/SocialIcon/SocialIcon';
import { SocialGroup } from 'components/_Atomic/SocialIcon/SocialIcon.style';
import { FollowUsSectionWrapper } from './FollowUsSection.style';
import DiscordIcon from 'public/icons/DiscordIcon.svg';
import PageSection from 'components/_Atomic/PageSection/PageSection';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

const FollowUsSection = () => {
  return (
    <PageSection>
      <FollowUsSectionWrapper>
        <div>
          <h2>Follow us</h2>
          <p>Connect with us. We love to hear from you!</p>
        </div>
        <SocialGroup>
          <SocialIcon Icon={<TwitterIcon />} url='test'></SocialIcon>
          <SocialIcon Icon={<DiscordIcon />} url='test'></SocialIcon>
          <SocialIcon Icon={<YouTubeIcon />} url='test'></SocialIcon>
          <SocialIcon Icon={<InstagramIcon />} url='test'></SocialIcon>
        </SocialGroup>
      </FollowUsSectionWrapper>
    </PageSection>
  );
};

export default FollowUsSection;
