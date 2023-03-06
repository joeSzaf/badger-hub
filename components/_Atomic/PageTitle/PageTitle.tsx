import PageSection from 'components/_Atomic/PageSection/PageSection';
import PageTitleWrapper from './PageTitle.style';

interface PageTitleProps {
  copy: string;
}

const PageTitle = ({ copy }: PageTitleProps) => {
  return (
    <PageSection backgroundColor='2b2b2b' textColor='ffffff'>
      <PageTitleWrapper>
        <h1>{copy}</h1>
      </PageTitleWrapper>
    </PageSection>
  );
};

export default PageTitle;
