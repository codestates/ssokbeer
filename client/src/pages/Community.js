import Recommendation from "../components/Community/Recommendation";
import SearchBar from "../components/Community/Searchbar";
import CommunityPost from "../components/Community/Communitypost";
import { useEffect, useState } from "react";
import { getContent, search } from "../api";
import { useDispatch, useSelector } from "react-redux";
import { setChange } from "../action";

const Community = () => {
  const [allContent, setAllContent] = useState([]);
  const [rankContent, setRankContent] = useState([]);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.allReducer);
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
      <SearchBar setChoice={setChoice} setTextSearch={setTextSearch} handleSearchClick={handleSearchClick} />
      <CommunityPost allContent={allContent} />
    </>
  );
};

export default Community;
