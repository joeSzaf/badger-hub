import { Button } from '@mui/material';
import { MailingListWrapper } from './MailingListSection.style';

const MailingListSection = () => {
  return (
    <MailingListWrapper>
      <div className='sectionContent'>
        <h2>Let us tell you about all the cool stuff we are working on!</h2>
        <Button variant='outlined'>Sign up for a cool mailing list</Button>
      </div>
    </MailingListWrapper>
  );
};

export default MailingListSection;
