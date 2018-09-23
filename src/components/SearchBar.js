import React from "react";

const SearchBar = props => {
  return (
    <div style={styles.container}>
      <input
        style={styles.inputSearch}
        type="text"
        placeholder="Search here ..."
        onChange={props.onChange}
      />
    </div>
  );
};

const styles = {
  inputSearch: {
    width: 350,
    height: 50,
    marginVetical: 10,
    padding: 10
  },
  container: {
    justifyContent: "center",
    alignSelf: "center",
    display: "flex",
    backgroundColor: "#3498db"
  }
};

export default SearchBar;
