import React from "react";

import blog_items from "../information/press.json";

const PressItem = ({ item }: { item: any }) => {
  return (
    <div className="nice-border blog-item">
      <p>
        <strong>
          {item.name}, {item.year}
        </strong>
      </p>

      <ul>
        {item.links.map((link: any, index: number) => (
          <li key={index}>
            <a href={link.link} target="_blank" rel="noopener noreferrer">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
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
