import { AboutBlock, WhoWeAreSectionWrapper } from './WhoWeAreSection.style';
import PageSection from 'components/_Atomic/PageSection/PageSection';

const WhoWeAreSection = () => {
  return (
    <PageSection>
      <WhoWeAreSectionWrapper>
        <AboutBlock>
          <h2>What the Heck is this company?</h2>
          <p>
            Badger Hub is a game development studio dedicated to making charming
            video games.
          </p>
          <p>
            Badger Hub is an independent game studio based in Boston, MA founded
            in 2021.
          </p>
        </AboutBlock>
        <AboutBlock>
          <h2>Why "Badger?"</h2>
          <p>
            Badger Hub was co-founded by actor and streamer Joey T Badger. Also
            Badgers are cool, thus "Badger."
          </p>
        </AboutBlock>
        <AboutBlock>
          <h2>Why "Hub?"</h2>
          <p>
            One of Boston, Massachusetts's nick names is "The Hub" which is
            derrived from "The Hub of the Solar System" and "The Hub of the
            Universe" origionally by{' '}
            <a href='http://www.celebrateboston.com/culture/the-hub-origin.htm'>
              Oliver Wendell Holmes in 1858
            </a>
            . Since Badger Hub is Bostonian, thus "Hub."
          </p>
        </AboutBlock>
      </WhoWeAreSectionWrapper>
    </PageSection>
  );
};

export default WhoWeAreSection;
