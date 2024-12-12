import React from "react";

const Post = ({username, content,time}) => {
  return (
    <div style={styles.post}>
      <h4 style={styles.username}>{username}</h4>
      <p style={styles.content}>{content}</p>
      <span style={styles.time}>{time}</span>
    </div>
  );
};

const styles = {
  post: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "10px",
    margin: "10px 0",
    backgroundColor: "#f9f9f9",
  },
  username: {
    margin: "0 0 5px 0",
    color: "#333",
  },
  content: {
    margin: "0 0 10px 0",
    color: "#555",
  },
  time: {
    fontSize: "12px",
    color: "#aaa",
  },
};

export default Post;
