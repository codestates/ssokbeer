import Recommendation from "../components/Community/Recommendation";
import SearchBar from "../components/Community/Searchbar";
import CommunityPost from "../components/Community/Communitypost";
import { useEffect, useState } from "react";
import { getContent } from "../api";

const Community = () => {
  const [allContent, setAllContent] = useState([]);
  const [rankContent, setRankContent] = useState([]);

  const getData = async () => {
    const { allContent, rankContent } = await getContent();

    setRankContent(rankContent);
    setAllContent(allContent);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Recommendation rankContent={rankContent} />
      <SearchBar />
      <CommunityPost allContent={allContent} />
    </>
  );
};

export default Community;
