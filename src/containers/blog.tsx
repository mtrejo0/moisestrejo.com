import React from "react";

class Blog extends React.Component {
  render() {
    return (
      <div className="center">
        <iframe
          src="https://v2-embednotion.com/Blog-ee4152ffaabd44738af540ca292b1adf"
          style={{
            width: "90%",
            height: "100vh",
            border: "2px solid black",
            margin: "32px",
          }}
          title="blog"
        ></iframe>
        {/* {blog_items.map((item) => (
          <BlogItem item={item}></BlogItem>
        ))} */}
      </div>
    );
  }
}

export default Blog;
