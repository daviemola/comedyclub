import Banner from "../components/Home/Banner";
import FeaturedPerformers from "../components/Home/FeaturedPerformers";
import SearchForm from "../components/Home/SearchForm";
import UpcomingShow from "../components/Home/UpcomingShow";
import Layout from "../components/Layout/Layout";
const https = require("https");

const Home = ({ shows, featuredPerformers }) => {
  const title = "Give the world more emotions";
  const desc =
    "Shop millions of live events and discover cant-miss concerts, games, theater and more.";
  return (
    <>
      <Layout>
        <Banner title={title} desc={desc} />
        <SearchForm />
        <UpcomingShow shows={shows} title="Upcoming Shows" />
        <FeaturedPerformers
          shows={featuredPerformers}
          title="Featured Performers"
        />
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  // // fetch location data
  // const locResults = await fetch(
  //   "https://geolocation-db.com/json/0f761a30-fe14-11e9-b59f-e53803842572"
  // );

  // const location = await locResults.json();
  // console.log(location);

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

  const perfomersResults = await fetch(
    `https://doingtimeapp.com/api/v1/profile/get_profile_random`,
    {
      method: "GET",
      headers: {
        doingtimeid: "dYQdSFt23XRnLJLFFwkYN66JGQw5xWhXg7Rbksdg",
      },
      agent: httpsAgent,
    }
  );

  const featuredPerformers = await perfomersResults.json();

  //return props
  return {
    props: { shows, featuredPerformers },
    revalidate: 1,
  };
}

export default Home;
