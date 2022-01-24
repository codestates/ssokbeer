import Recommendation from "../components/Community/Recommendation";
import SearchBar from "../components/Community/Searchbar";
import CommunityPost from "../components/Community/Communitypost";
import MobileSearchBar from "../components/Community/Mobilesearchbar";
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
      <CommunityPost />
    </>
  );
};

export default Community;
