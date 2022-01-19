// import { useMediaQuery } from "react-responsive";
import Recommendation from "../components/Recommendation";
import SearchBar from "../components/Searchbar";
import CommunityPost from "../components/Communitypost";

const Community = () => {
  // const isPc = useMediaQuery({ query: "(min-width: 768px)" });
  return (
    <>
      <Recommendation />
      <SearchBar />
      <CommunityPost />
    </>
  );
};

export default Community;
