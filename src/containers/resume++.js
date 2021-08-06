import React from "react";

import education from "../information/education.json";
import leadership from "../information/leadership.json";
import projects from "../information/projects.json";
import skills from "../information/skills.json";
import work from "../information/work.json";
import awards from "../information/awards.json";

let all = [
  ...work,
  ...education,
  ...leadership,
  ...projects,
  ...skills,
  ...awards,
];

let tabs = [
  {
    name: "Work Experience",
    tag: "work",
  },
  {
    name: "Education",
    tag: "education",
  },
  {
    name: "Projects",
    tag: "projects",
  },
  {
    name: "Leadership",
    tag: "leadership",
  },
  {
    name: "Skills",
    tag: "skills",
  },
  {
    name: "Research",
    tag: "research",
  },
  {
    name: "Hackathons",
    tag: "hackathon",
  },
  {
    name: "Awards & Honors",
    tag: "award",
  },
];

class ResumePlusPlus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: tabs[0],
    };
    this.selectTab = this.selectTab.bind(this);
  }

  selectTab(tag) {
    this.setState({
      activeTab: tabs.filter((each) => each.tag === tag)[0],
    });
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="center">
          <ul className="resume-ul">
            {tabs.map((tab) => (
              <li
                className={
                  tab === this.state.activeTab
                    ? "resume-li active-resume-tab"
                    : "resume-li"
                }
                onClick={() => this.selectTab(tab.tag)}
              >
                {tab.name}
              </li>
            ))}
          </ul>
        </div>
        {all
          .filter((each) => each.tags.includes(this.state.activeTab.tag))
          .map((each) => (
            <ResumeItem item={each}></ResumeItem>
          ))}
      </div>
    );
  }
}

const ResumeItem = ({ item }) => {
  let text = (
    <div>
      <div className="resume-top">
        <div>
          {item.link ? (
            <a href={item.link} target='_blank' rel="noopener noreferrer">
              <h3>{item.name}</h3>
            </a>
          ) : (
            <h3>{item.name}</h3>
          )}
          <ul>
            {item.description.map((each) => {
              return <li>{each}</li>;
            })}
          </ul>
          <a href={item?.pdf?.link}>{item?.pdf?.name}</a>
        </div>
        <div className="resume-item-right">
          <strong>
            <p>{item.year}</p>
          </strong>
          {item.icon ? (
            <img
              class="resume-icon"
              src={process.env.PUBLIC_URL + `/images/${item.icon}`}
              alt={item.icon}
            />
          ) : null}
        </div>
      </div>
      {item.sub_items
        ? item.sub_items.map((each) => <ResumeItem item={each}></ResumeItem>)
        : null}
    </div>
  );
  return (
    <div className="nice-border">
      {item.img ? (
        <div className="resume-item-image">
          <div className="resume-item-image-left">{text}</div>
          <div className="resume-item-image-right">
            <a href={item.link}>
              <img
                class="resume-image"
                src={process.env.PUBLIC_URL + `/images/${item.img}`}
                alt={item.img}
              />
            </a>
          </div>
        </div>
      ) : (
        <div className="resume-item">{text}</div>
      )}
    </div>
  );
};

export default ResumePlusPlus;
