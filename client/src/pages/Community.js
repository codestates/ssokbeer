// import { useMediaQuery } from "react-responsive";
import Recommendation from "../Components/Community/Recommendation";
import SearchBar from "../Components/Community/Searchbar";
import CommunityPost from "../Components/Community/Communitypost";
import MobileSearchBar from "../Components/Community/Mobilesearchbar";
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
