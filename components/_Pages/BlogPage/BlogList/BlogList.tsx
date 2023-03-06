import PageSection from 'components/_Atomic/PageSection/PageSection';
import BlogListWrapper from './BlogList.style';
import Link from 'next/link';

const BlogList = () => {
  return (
    <PageSection>
      <BlogListWrapper>
        <h2>Hello, world!</h2>
        <p>
          This is our new website! The paint is still drying and the blog robot
          needs to wake up from it's deep slumber.
        </p>
        <p>
          In the meantime,{' '}
          <Link href={'https://twitter.com/BadgerHub'}>
            checkout our twitter
          </Link>{' '}
          to get the latest Badger Hub news!
        </p>
      </BlogListWrapper>
    </PageSection>
  );
};

export default BlogList;
