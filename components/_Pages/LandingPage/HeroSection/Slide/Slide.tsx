import Image, { StaticImageData } from 'next/image';
import SlideWrapper from './Slide.style';

interface SlideProps {
  image: StaticImageData;
}

const Slide = ({ image }: SlideProps) => {
  return (
    <SlideWrapper>
      <Image
        alt='PAX East map'
        src={image}
        layout='responsive'
        style={{ objectFit: 'fill' }}
      />
    </SlideWrapper>
  );
};

export default Slide;
