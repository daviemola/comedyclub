import Banner from "../../components/Results/Banner";
import Layout from "../../components/Layout/Layout";
import SearchForm from "../../components/Home/SearchForm";
import ResultsWrapper from "../../components/Results/ResultsWrapper";
import SearchResult from "../../components/Results/SearchResult";

const Home = ({ shows, featuredShows }) => {
  const title = "";
  return (
    <>
      <Layout>
        <Banner title={title} />
        <SearchForm />
        <ResultsWrapper>
          <SearchResult shows={shows} />
        </ResultsWrapper>
      </Layout>
    </>
  );
};

export async function getServerSideProps({
  query: { performers, zipcode, city, start, end },
}) {
  //Fetch for shows using queries
  //include performers startDate endDate, zipcode, performers etc in the query based on the backend url

  const res = await fetch(
    `https://my-json-server.typicode.com/daviemola/fakecomedyjson/upcoming_shows?zipcode=${zipcode}`
  );

  const shows = await res.json();

  //return props
  return {
    props: { shows },
  };
}

export default Home;
