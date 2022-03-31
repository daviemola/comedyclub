import Banner from "../../components/Results/Banner";
import Layout from "../../components/Layout/Layout";
import SearchForm from "../../components/Home/SearchForm";
import ResultsWrapper from "../../components/Results/ResultsWrapper";
import qs from "qs";
import SearchResult from "../../components/Results/SearchResult";

const Home = ({ shows, featuredShows }) => {
  //   console.log(shows);
  //   shows.data.map((show) => console.log(show));
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
  query: { performers, zipcode, start, end },
}) {
  //Fetch for shows using queries
  //include performers start and end in the query based on the backend url
  const query = qs.stringify({
    populate: "*",
    filters: {
      zipcode: {
        $contains: zipcode,
      },
    },
    encodeValuesOnly: true,
  });

  const res = await fetch(`http://localhost:1337/api/shows?${query}`);
  const shows = await res.json();

  //return props
  return {
    props: { shows },
  };
}

export default Home;
