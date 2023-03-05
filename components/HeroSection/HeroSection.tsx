import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Slide from './Slide/Slide';
import BoothImage from '../../public/images/Booth.jpg';
import PaxImage from '../../public/images/Pax.jpg';
import BigButton from '../_Atomic/BigButton/BigButton';
import { ButtonContainer } from './HeroSection.style';

const HeroSection = () => {
  const items = [
    {
      name: 'Random Name #1',
      description: 'Probably the most random thing you have ever seen!',
      image: PaxImage,
    },
    {
      name: 'Random Name #2',
      description: 'Hello World!',
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
        <BigButton copy='Games'></BigButton>
        <BigButton copy='PAX East'></BigButton>
      </ButtonContainer>
    </div>
  );
};

export default HeroSection;
