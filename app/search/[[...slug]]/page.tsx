import PageLayout from '../../components/common/PageLayout';
const SearchPage = ({ params }: { params: { slug: string } }) => {
  const decodedSlug = params.slug.length > 0 ? decodeURIComponent(params.slug[0]) : undefined;

  console.log(params);
  return (
    <PageLayout>
      {params && (
        <div className="h-[30rem] pt-5 text-lg text-slate-100">
          <h1 className="text-2xl font-bold"> {decodedSlug}의 검색결과</h1>
          <img src="" alt=""></img>
        </div>
      )}
    </PageLayout>
  );
};

export default SearchPage;
