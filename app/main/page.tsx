import Banner from '../components/main/Banner';
import Category from '../components/main/Category';
import Row from '../components/main/Row';
import { fetchNowPlaying, fetchData } from '../api/fetchMovies';
import PageLayout from '../components/common/PageLayout';

const Page = async () => {
  const BannerData = await fetchNowPlaying();
  const Trending = await fetchData('Trending');
  const TopRated = await fetchData('TopRated');
  const ActionMovies = await fetchData('ActionMovies');
  const ComedyMovies = await fetchData('ComedyMovies');
  const HorrorMovies = await fetchData('HorrorMovies');
  const RomanceMovies = await fetchData('RomanceMovies');
  const Documentaries = await fetchData('Documentaries');

  const categoryNames = ['disney', 'marvel', 'national', 'pixar', 'starwars'];
  return (
    <PageLayout>
      <div className="pr-12">
        <Banner fetchNowPlaying={BannerData} />
        <div className="mt-[2rem] grid grid-cols-5 gap-[2.5rem]  ">
          {categoryNames.map(name => (
            <Category key={name} name={name} />
          ))}
        </div>
      </div>
      <Row RowData={Trending} Sub={'Trending'} />
      <Row RowData={TopRated} Sub={'TopRated'} />
      <Row RowData={ActionMovies} Sub={'ActionMovies'} />

      <Row RowData={ComedyMovies} Sub={'ComedyMovies'} />
      <Row RowData={HorrorMovies} Sub={'HorrorMovies'} />
      <Row RowData={RomanceMovies} Sub={'RomanceMovies'} />
      <Row RowData={Documentaries} Sub={'Documentaries'} />
    </PageLayout>
  );
};

export default Page;
