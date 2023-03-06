import { Button } from '@mui/material';
import PageSection from 'components/_Atomic/PageSection/PageSection';
import { MailingListWrapper } from './MailingListSection.style';

const MailingListSection = () => {
  return (
    <PageSection backgroundColor='2b2b2b' textColor='ffffff'>
      <MailingListWrapper>
        <h2>Let us tell you about all the cool stuff we are working on!</h2>
        <Button variant='outlined'>Sign up for a cool mailing list</Button>
      </MailingListWrapper>
    </PageSection>
  );
};

export default MailingListSection;
