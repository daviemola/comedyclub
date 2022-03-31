import Banner from "../../components/Results/Banner";
import Layout from "../../components/Layout/Layout";
import SearchForm from "../../components/Home/SearchForm";
import ResultsWrapper from "../../components/Results/ResultsWrapper";
import SingleResult from "../../components/Results/SingleResult";

const Home = ({ shows }) => {
  const title = "";
  return (
    <>
      <Layout>
        <Banner title={title} />
        <SearchForm />
        <ResultsWrapper>
          {shows.map((show) => (
            <SingleResult key={show.id} show={show} />
          ))}
          {/* <SingleResult shows={shows} /> */}
        </ResultsWrapper>
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  //Fetch for shows
  const res = await fetch(
    "https://my-json-server.typicode.com/daviemola/fakecomedyjson/upcoming_shows"
  );
  const shows = await res.json();

  //return props
  return {
    props: { shows },
  };
}

export default Home;
