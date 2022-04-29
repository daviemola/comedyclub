import Banner from "../components/Home/Banner";
import FeaturedShows from "../components/Home/FeaturedShows";
import SearchForm from "../components/Home/SearchForm";
import UpcomingShow from "../components/Home/UpcomingShow";
import Layout from "../components/Layout/Layout";

const Home = ({ shows, featuredShows }) => {
  const title = "Give the world more emotions";
  const desc =
    "Shop millions of live events and discover cant-miss concerts, games, theater and more.";
  return (
    <>
      <Layout>
        <Banner title={title} desc={desc} />
        <SearchForm />
        <UpcomingShow shows={shows} title="Upcoming Shows" />
        <FeaturedShows shows={featuredShows} title="Featured Performers" />
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  // fetch users data
  const locResults = await fetch(
    "https://geolocation-db.com/json/0f761a30-fe14-11e9-b59f-e53803842572"
  );

  const location = await locResults.json();
  console.log(location);

  //Fetch for shows
  const res = await fetch(
    "https://my-json-server.typicode.com/daviemola/fakecomedyjson/upcoming_shows?_limit=5"
  );
  const shows = await res.json();

  //fetch for featured shows
  const results = await fetch(
    "https://my-json-server.typicode.com/daviemola/fakecomedyjson/performers?_limit=5"
  );
  const featuredShows = await results.json();

  //return props
  return {
    props: { shows, featuredShows },
    revalidate: 1,
  };
}

export default Home;
