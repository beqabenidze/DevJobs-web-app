import React from "react";
import { useContext } from "react";
import { Context } from "../context";

function MobileFilter() {
  const { visible, setVisible } = useContext(Context);
  const { setSearchTitle } = useContext(Context);
  const { clickTitle, setClickTitle } = useContext(Context);

  const handleFilter = () => {
    setSearchTitle(clickTitle);
  };

  const handChange = (e) => {
    setClickTitle(e.target.value);
  };

  return (
    <div className="filter">
      <input
        onChange={handChange}
        className="title-filter"
        type="text"
        placeholder="Filter by title…"
        required
      />
      <div className="filter-icons">
        <svg
          className="icon-filter"
          viewBox="0 0 25 25"
          width="50"
          height="35"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            onClick={() => setVisible(!visible)}
            d="M19.108 0H.86a.86.86 0 00-.764.455.833.833 0 00.068.884l6.685 9.202.007.01c.242.32.374.708.375 1.107v7.502a.825.825 0 00.248.594.865.865 0 00.942.18l3.756-1.4c.337-.1.56-.41.56-.784v-6.092c0-.399.132-.787.375-1.108l.007-.009 6.685-9.202c.19-.26.217-.6.068-.884A.86.86 0 0019.108 0z"
            fillRule="nonzero"
          />
        </svg>
        <svg
          onClick={handleFilter}
          className="icon-search"
          viewBox="0 0 25 25"
          width="40"
          height="40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z" />
        </svg>
      </div>
    </div>
  );
}

export default MobileFilter;
