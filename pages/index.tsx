import Link from 'next/link';
import Layout from '../components/Layout/Layout';
import LandingPage from '../components/_Pages/LandingPage/LandingPage';

const IndexPage = () => (
  <Layout title='Badger'>
    <LandingPage />
  </Layout>
);

export default IndexPage;
