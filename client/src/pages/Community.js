// import { useMediaQuery } from "react-responsive";
import Recommendation from "../components/Recommendation";
import SearchBar from "../components/Searchbar";
import CommunityPost from "../components/Communitypost";
import MobileSearchBar from "../components/Mobilesearchbar";
import { useMediaQuery } from "react-responsive";

const Community = () => {
  const isPc = useMediaQuery({ query: "(min-width: 768px)" });

  return isPc ? (
    <>
      <Recommendation />
      <SearchBar />
      <CommunityPost />
    </>
  ) : (
    <>
      <MobileSearchBar></MobileSearchBar>
      <Recommendation />
    </>
  );
};

export default Community;
