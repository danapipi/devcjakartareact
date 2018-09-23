import React from "react";

const BlogListing = props => {
  return (
    <div style={styles.container}>
      <h2 style={styles.h2}>{props.title}</h2>
      <p style={styles.p}>
        {props.author} - {props.date}
      </p>
      <p style={styles.p}>{props.content}</p>
    </div>
  );
};
const styles = {
  h2: { color: "#2980b9", fontStyle: "italic" },
  p: { color: "#95a5a6" },
  container: { border: "5px solid #3498db", padding: 10 }
};

export default BlogListing;
