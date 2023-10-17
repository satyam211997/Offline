import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const QueryExample = () => {
  const [search, setSearch] = useState("");
  const [searchParam, setSearchParam] = useSearchParams();
  useEffect(() => {
    let searchVal = searchParam.get("query");
    setSearch(searchVal);
  }, [searchParam]);
  //   console.log(search);
  function onUpdateClick() {
    setSearchParam({ query: search });
  }
  return (
    <>
      <input
        type="search"
        placeholder="search here"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <button onClick={onUpdateClick}>Update</button>
    </>
  );
};
export default QueryExample;
