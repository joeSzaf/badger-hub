import FooterWrapper, { FooterSection, FooterSections } from './Footer.style';
import SocialIcon from 'components/_Atomic/SocialIcon/SocialIcon';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import DiscordIcon from 'public/icons/DiscordIcon.svg';
import { SocialGroup } from 'components/_Atomic/SocialIcon/SocialIcon.style';
import PageSection from 'components/_Atomic/PageSection/PageSection';
import Link from 'next/link';

const directoryData = [
  { displayName: 'Home', url: '/' },
  { displayName: 'About us', url: '/about' },
  { displayName: 'Games', url: '/games' },
  { displayName: 'Blog', url: '/blog' },
];

const Footer = () => {
  return (
    <PageSection backgroundColor='5c5c5c'>
      <FooterWrapper>
        <FooterSections>
          <FooterSection>
            <h1>Contact</h1>
            <p>For business inquiries:</p>
            <p>BadgerHubStudio@gmail.com</p>
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
            {directoryData.map((directoryItem) => {
              return (
                <Link href={directoryItem.url}>
                  <h2>{directoryItem.displayName}</h2>
                </Link>
              );
            })}
          </FooterSection>
        </FooterSections>
        <p className='copywright'>© Badger Hub 2023</p>
      </FooterWrapper>
    </PageSection>
  );
};

export default Footer;
