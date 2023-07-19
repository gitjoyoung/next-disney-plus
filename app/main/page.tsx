import Banner from '../components/main/Banner';
import Category from '../components/main/Category';
import Row from '../components/main/Row';
import { fetchNowPlaying, fetchData } from '../api/fetchMovies';
import PageLayout from '../components/common/PageLayout';

const Page = async () => {
  const {
    bannerData,
    trending,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  } = await getData();

  const categoryNames = ['disney', 'marvel', 'national', 'pixar', 'starwars'];
  return (
    <PageLayout>
      <div className="pr-12">
        <Banner fetchNowPlaying={bannerData} />
        <div className="mt-[2rem] grid grid-cols-5 gap-[2.5rem]  ">
          {categoryNames.map(name => (
            <Category key={name} name={name} />
          ))}
        </div>
      </div>
      <Row RowData={trending} Sub={'Trending'} />
      <Row RowData={topRated} Sub={'TopRated'} />
      <Row RowData={actionMovies} Sub={'ActionMovies'} />
      <Row RowData={comedyMovies} Sub={'ComedyMovies'} />
      <Row RowData={horrorMovies} Sub={'HorrorMovies'} />
      <Row RowData={romanceMovies} Sub={'RomanceMovies'} />
      <Row RowData={documentaries} Sub={'Documentaries'} />
    </PageLayout>
  );
};

export async function getData() {
  const bannerData = await fetchNowPlaying();
  const trending = await fetchData('Trending');
  const topRated = await fetchData('TopRated');
  const actionMovies = await fetchData('ActionMovies');
  const comedyMovies = await fetchData('ComedyMovies');
  const horrorMovies = await fetchData('HorrorMovies');
  const romanceMovies = await fetchData('RomanceMovies');
  const documentaries = await fetchData('Documentaries');

  return {
    bannerData,
    trending,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  };
}
export default Page;
