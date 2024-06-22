import React, { useEffect, useState } from "react";

const Blog = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@moises.trejo0"
    )
      .then((res) => res.json())
      .then((data) => setArticles(data.items));
  }, []);

  return (
    <div className="center">
      {articles.map((article: any, index) => (
        <div
          key={index}
          style={{ width: "100%", maxWidth: "50%", margin: "0 auto" }}
        >
          <h2 style={{ marginBottom: "0.5rem" }}>{article.title}</h2>
          <p style={{ marginBottom: "1rem" }}>
            Published: {new Date(article.pubDate).toLocaleDateString()}
          </p>
          <a href={article.link} target="_blank" rel="noopener noreferrer">
            Read More
          </a>
        </div>
      ))}
    </div>
  );
};

export default Blog;
