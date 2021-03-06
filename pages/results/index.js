import Banner from "../../components/Results/Banner";
import Layout from "../../components/Layout/Layout";
import SearchForm from "../../components/Home/SearchForm";
import ResultsWrapper from "../../components/Results/ResultsWrapper";
import SingleResult from "../../components/Results/SingleResult";
import { motion } from "framer-motion";
const https = require("https");

const Home = ({ shows }) => {
  // console.log(shows);
  const title = "";
  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <Layout>
        <Banner title={title} />
        <SearchForm />
        <ResultsWrapper>
          <SingleResult shows={shows.success.slice(0, 25)} />
        </ResultsWrapper>
      </Layout>
    </motion.div>
  );
};

export async function getStaticProps() {
  //Fetch for shows
  const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
  });

  const res = await fetch(
    `https://doingtimeapp.com/api/v1/show/getupcomingshows`,
    {
      method: "GET",
      headers: {
        doingtimeid: "dYQdSFt23XRnLJLFFwkYN66JGQw5xWhXg7Rbksdg",
      },
      agent: httpsAgent,
    }
  );

  const shows = await res.json();

  //return props
  return {
    props: { shows },
  };
}

export default Home;
