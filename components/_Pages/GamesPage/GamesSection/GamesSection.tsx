import { GamesSectionWrapper } from './GamesSection.style';
import PageSection from 'components/_Atomic/PageSection/PageSection';
import Link from 'next/link';
import MeMyMechPicture from 'public/images/mmmai_logo_temp.png';

import Image from 'next/image';

const GamesSection = () => {
  return (
    <PageSection>
      <GamesSectionWrapper>
        <h2>Me, My Mech and I</h2>
        <Image
          alt='PAX East map'
          src={MeMyMechPicture}
          layout='responsive'
          style={{ objectFit: 'fill' }}
        />
        <p>
          The world ended, but that’s in the past. You have a mech and a dream
          to rebuild society.
        </p>

        <p>
          As part of the Reseeding programing, you and three experts are sent to
          a part of the broken world armed with the swiss-army tool of
          construction and farming – a Mech! The world finally knows peace, so
          you can explore and uncover the vast number of secrets and stories
          without need for combat. Use your mech to scavenge the endless ruins
          for useful material and help your settlement take root into a new
          town. Farm and manufacture at scale! Be forewarned, your mech’s power
          core only has three years left of life so you will have to say goodbye
          one day and start a new life with another mech.
        </p>

        <p>
          You don’t have much. But you have your best friend. Your only friend.
          Your mech.
        </p>
        <Link
          href={'https://store.steampowered.com/app/1977940/Me_My_Mech_and_I/'}
        >
          Wishlist us on Steam!
        </Link>
      </GamesSectionWrapper>
    </PageSection>
  );
};

export default GamesSection;
