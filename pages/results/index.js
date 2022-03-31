import Banner from "../../components/Results/Banner";
import Layout from "../../components/Layout/Layout";
import SearchForm from "../../components/Home/SearchForm";
import ResultsWrapper from "../../components/Results/ResultsWrapper";
import SingleResult from "../../components/Results/SingleResult";
import { motion } from "framer-motion";

const Home = ({ shows }) => {
  const title = "";
  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <Layout>
        <Banner title={title} />
        <SearchForm />
        <ResultsWrapper>
          {shows.map((show) => (
            <SingleResult show={show} key={show.id} />
          ))}
        </ResultsWrapper>
      </Layout>
    </motion.div>
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
