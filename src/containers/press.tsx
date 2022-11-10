import React from "react";

import blog_items from "../information/press.json";

const PressItem = ({ item }: { item: any }) => {
  return (
    <div className="nice-border blog-item">
      <p>
        <strong>{item.name}</strong>
      </p>

      <a href={item.link} target="_blank" rel="noopener noreferrer">
        {item.link}
      </a>
    </div>
  );
};

class Press extends React.Component {
  render() {
    return (
      <div className="center">
        {blog_items.map((item) => (
          <PressItem item={item}></PressItem>
        ))}
      </div>
    );
  }
}

export default Press;
