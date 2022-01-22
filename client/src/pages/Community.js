import Recommendation from "../components/Community/Recommendation";
import SearchBar from "../components/Community/Searchbar";
import CommunityPost from "../components/Community/Communitypost";
import MobileSearchBar from "../components/Community/Mobilesearchbar";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import { getContent } from "../api";

const Community = () => {
  const isPc = useMediaQuery({ query: "(min-width: 768px)" });
  const [allContent, setAllContent] = useState({});
  const [rankContent, setRankContent] = useState({});

  useEffect(() => {
    const { allContent, rankContent } = getContent();
    setAllContent(allContent);
    setRankContent(rankContent);
    console.log(rankContent);
  }, []);

  return isPc ? (
    <>
      <Recommendation allContent={rankContent} />
      <SearchBar />
      <CommunityPost rankContent={allContent} />
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
