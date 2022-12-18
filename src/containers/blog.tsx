import React from "react";

// import blog_items from "../information/blog.json";

// const BlogItem = ({
//   item,
// }: {
//   item: { text: string; tags: string[]; date: string };
// }) => {
//   return (
//     <div className="nice-border blog-item">
//       <p>
//         <strong>{item.text}</strong>
//       </p>
//       <div className="blog-bottom">
//         <p>tags: {item.tags.join(", ")}</p>
//         <p>{item.date}</p>
//       </div>
//     </div>
//   );
// };

class Blog extends React.Component {
  render() {
    return (
      <div className="center">
        <iframe src="https://v1.embednotion.com/embed/65425f137e6b4701bac1f84a7c99488a" style={{width: "90%", height: "100vh", border: "2px solid #ccc", borderRadius: "10px", margin: "32px"}} title="blog"></iframe> 
        {/* {blog_items.map((item) => (
          <BlogItem item={item}></BlogItem>
        ))} */}
      </div>
    );
  }
}

export default Blog;
