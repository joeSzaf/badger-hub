import PageTitle from 'components/_Atomic/PageTitle/PageTitle';
import GamesSection from './GamesSection/GamesSection';

const GamesPage = () => {
  return (
    <main>
      <PageTitle copy='Badger games' />
      <GamesSection />
    </main>
  );
};

export default GamesPage;
