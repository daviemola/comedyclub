import Banner from "../../components/Results/Banner";
import Layout from "../../components/Layout/Layout";
import SearchForm from "../../components/Home/SearchForm";
import ResultsWrapper from "../../components/Results/ResultsWrapper";
import SearchResult from "../../components/Results/SearchResult";
const https = require("https");

const Home = ({ shows, featuredShows }) => {
  const title = "";
  // console.log(shows);
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
  //include performers startDate endDate, zipcode, performers etc in the query based on the backend url
  // console.log(zipcode, start, end, performers);

  const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
  });

  const res = await fetch(
    // `https://doingtimeapp.com/api/v1/show/getshowswebform/${start}/${end}/${zipcode}/${performers}`,
    `https://doingtimeapp.com/api/v1/show/getshowswebform/2021-12-23/2022-04-23/0/Demetri`,
    {
      method: "GET",
      headers: {
        doingtimeid: "dYQdSFt23XRnLJLFFwkYN66JGQw5xWhXg7Rbksdg",
      },
      agent: httpsAgent,
    }
  );

  console.log(await res);
  const shows = await res.json();
  // console.log(shows.success.length);

  //return props
  return {
    props: { shows },
  };
}

export default Home;
