import "./style.css";

const SearchBar = () => (
  <div className="searchBarContainer">
    <form action="/" method="get">
      <label htmlFor="searchField"></label>
      <input
        className="searchField"
        type="text"
        id="header-search"
        placeholder="Search for a zodiac"
        name="searchField"
      />
      <button className="searchButton" type="submit">
        Search
      </button>
    </form>
  </div>
);

export default SearchBar;
