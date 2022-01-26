import Recommendation from "../components/Community/Recommendation";
import SearchBar from "../components/Community/Searchbar";
import CommunityPost from "../components/Community/Communitypost";
import { useEffect, useState } from "react";
import { getContent, search } from "../api";

const Community = () => {
  const [allContent, setAllContent] = useState([]);
  const [rankContent, setRankContent] = useState([]);

  const [choice, setChoice] = useState("title");
  const [textSearch, setTextSearch] = useState("");

  const getData = async () => {
    const { allContent, rankContent } = await getContent();

    setRankContent(rankContent.slice(0, 4));
    setAllContent(allContent);
  };
  const handleSearchClick = async () => {
    const data = await search(choice, textSearch);
    setAllContent(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Recommendation rankContent={rankContent} />
      <SearchBar
        setChoice={setChoice}
        setTextSearch={setTextSearch}
        handleSearchClick={handleSearchClick}
      />
      <CommunityPost allContent={allContent} />
    </>
  );
};

export default Community;
