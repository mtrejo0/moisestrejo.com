import React from "react";

import contact from "../information/contact.json";

import links from "../information/links.json";

class Contact extends React.Component {
  render() {
    return (
      <div className="center">
        <h1 className="title">Lets talk!</h1>

        <div className="nice-border">
          <a
            href={"https://forms.gle/yJRmC6x1C7oq1sVu8"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Send me a message!
          </a>
        </div>
        <div className="contact-grid">
          {contact.map((item) => {
            return (
              <div className="nice-border">
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                ) : (
                  <p>{item.name}</p>
                )}
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
        <h1 className="title">Quick Links</h1>
        <ul>
          {links.map((link) =>
            link.ids.map((id) => {
              return (
                <li>
                  <a href={link.link} target="_blank" rel="noopener noreferrer">
                    moisestrejo.com/{id}
                  </a>
                </li>
              );
            })
          )}
        </ul>
      </div>
    );
  }
}
export default Contact;
