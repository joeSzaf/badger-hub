import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Slide from './Slide/Slide';
import BoothImage from 'public/images/Booth.jpg';
import PaxImage from 'public/images/Pax.jpg';
import BigButton from 'components/_Atomic/BigButton/BigButton';
import { ButtonContainer } from './HeroSection.style';

const HeroSection = () => {
  const items = [
    {
      name: 'Pax East',
      description: 'See us at PAX East!',
      image: PaxImage,
    },
    {
      name: 'Me, My Mech and I',
      description:
        'Stop by out booth to play the latest demo of My, My Mech and I',
      image: BoothImage,
    },
  ];

  return (
    <div>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        interval={6000}
      >
        {items.map((item, i) => (
          <Slide key={i} image={item.image} />
        ))}
      </Carousel>
      <ButtonContainer>
        <BigButton copy='Games' href='/games'></BigButton>
        <BigButton
          copy='PAX East'
          href='https://east.paxsite.com/en-us/expo-hall/exhibitor-listing.html?gtID=561181&exhibitor-name=Badger-Hub'
        ></BigButton>
      </ButtonContainer>
    </div>
  );
};

export default HeroSection;
