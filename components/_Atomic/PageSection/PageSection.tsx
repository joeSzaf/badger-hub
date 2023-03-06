import { ReactNode } from 'react';
import { PageSectionWrapper } from './PageSection.style';

interface PageSectionProps {
  children?: ReactNode;
  backgroundColor?: string;
  textColor?: string;
}

const PageSection = ({
  children,
  backgroundColor = 'ffffff',
  textColor = '2b2b2b',
}: PageSectionProps) => {
  return (
    <PageSectionWrapper textColor={textColor} backgroundColor={backgroundColor}>
      {children}
    </PageSectionWrapper>
  );
};

export default PageSection;
