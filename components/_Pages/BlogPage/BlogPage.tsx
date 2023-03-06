import PageTitle from 'components/_Atomic/PageTitle/PageTitle';
import BlogList from './BlogList/BlogList';

const BlogPage = () => {
  return (
    <main>
      <PageTitle copy='Badger blog' />
      <BlogList />
    </main>
  );
};

export default BlogPage;
