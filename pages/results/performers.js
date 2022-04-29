import Banner from "../../components/Home/Banner";
import Perfomers from "../../components/Results/Peformers";
import SearchForm from "../../components/Home/SearchForm";
import Layout from "../../components/Layout/Layout";
import { motion } from "framer-motion";
const https = require("https");

const Home = ({ perfomers }) => {
  const title = "Give the world more emotions";
  const desc =
    "Shop millions of live events and discover cant-miss concerts, games, theater and more.";

  console.log(perfomers);
  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <Layout>
        <Banner title={title} desc={desc} />
        <SearchForm />
        <Perfomers perfomers={perfomers} title="Performers" />
      </Layout>
    </motion.div>
  );
};

export async function getStaticProps() {
  const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
  });

  const res = await fetch(
    `https://doingtimeapp.com/api/v1/profile/get_profile_random`,
    {
      method: "GET",
      headers: {
        doingtimeid: "dYQdSFt23XRnLJLFFwkYN66JGQw5xWhXg7Rbksdg",
      },
      agent: httpsAgent,
    }
  );

  const perfomers = await res.json();

  //return props
  return {
    props: { perfomers },
    revalidate: 1,
  };
}

export default Home;
