import FooterWrapper, { FooterSection, FooterSections } from './Footer.style';
import SocialIcon from '../_Atomic/SocialIcon/SocialIcon';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import DiscordIcon from '../../public/icons/DiscordIcon.svg';
import { SocialGroup } from '../_Atomic/SocialIcon/SocialIcon.style';

const Footer = () => {
  return (
    <FooterWrapper>
      <div className='sectionContent'>
        <FooterSections>
          <FooterSection>
            <h1>Contact</h1>
            <p>For business inquiries:</p>
            <p>BadgerHubStudios@gmail.com</p>
          </FooterSection>
          <FooterSection>
            <h1>Socials</h1>
            <SocialGroup>
              <SocialIcon Icon={<TwitterIcon />} url='test'></SocialIcon>
              <SocialIcon Icon={<DiscordIcon />} url='test'></SocialIcon>
              <SocialIcon Icon={<YouTubeIcon />} url='test'></SocialIcon>
              <SocialIcon Icon={<InstagramIcon />} url='test'></SocialIcon>
            </SocialGroup>
          </FooterSection>
          <FooterSection>
            <h2>Home</h2>
            <h2>About us</h2>
            <h2>Games</h2>
            <h2>Blog</h2>
          </FooterSection>
        </FooterSections>
        <p className='copywright'>© Badger Hub 2023</p>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
