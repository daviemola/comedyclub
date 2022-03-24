import Banner from "../components/Home/Banner";
import FeaturedShows from "../components/Home/FeaturedShows";
import SearchForm from "../components/Home/SearchForm";
import UpcomingShow from "../components/Home/UpcomingShow";
import Layout from "../components/Layout/Layout";

const Home: React.FC<{ shows: any; featuredShows: any }> = ({
  shows = [],
  featuredShows = [],
}) => {
  const title = "Give the world more emotions";
  const desc =
    "Shop millions of live events and discover cant-miss concerts, games, theater and more.";
  return (
    <>
      <Layout>
        <Banner title={title} desc={desc} />
        <SearchForm />
        <UpcomingShow shows={shows} title="Upcoming Shows" />
        <FeaturedShows shows={featuredShows} title="Featured Shows" />
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  //Fetch for shows
  const res = await fetch(
    "https://my-json-server.typicode.com/daviemola/fakecomedyjson/upcoming_shows?_limit=3"
  );
  const shows = await res.json();

  //fetch for featured shows
  const results = await fetch(
    "https://my-json-server.typicode.com/daviemola/fakecomedyjson/upcoming_shows?_limit=5"
  );
  const featuredShows = await results.json();

  //return props
  return {
    props: { shows, featuredShows },
  };
}

export default Home;
