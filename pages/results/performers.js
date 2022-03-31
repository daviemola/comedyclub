import Banner from "../../components/Home/Banner";
import Perfomers from "../../components/Results/Peformers";
import SearchForm from "../../components/Home/SearchForm";
import Layout from "../../components/Layout/Layout";

const Home = ({ featuredShows }) => {
  const title = "Give the world more emotions";
  const desc =
    "Shop millions of live events and discover cant-miss concerts, games, theater and more.";
  return (
    <>
      <Layout>
        <Banner title={title} desc={desc} />
        <SearchForm />
        <Perfomers shows={featuredShows} title="Performers" />
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  //fetch for featured shows
  const results = await fetch(
    "https://my-json-server.typicode.com/daviemola/fakecomedyjson/performers?_limit=5"
  );
  const featuredShows = await results.json();

  //return props
  return {
    props: { featuredShows },
    revalidate: 1,
  };
}

export default Home;