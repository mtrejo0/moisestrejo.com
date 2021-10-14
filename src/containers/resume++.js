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
      activeTab: tabs[(Math.random() * tabs.length) | 0],
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
                onMouseOver={() => this.selectTab(tab.tag)}
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
class ResumeItem extends React.Component {
  render() {
    let title = (
      <div>
        {this.props.type === "sub-item" ? (
          <h5>{this.props.item.name}</h5>
        ) : (
          <h3>{this.props.item.name}</h3>
        )}
      </div>
    );
    let text = (
      <div>
        <div className="resume-top">
          <div>
            {title}
            <ul>
              {this.props.item.description.map((each) => {
                return <li>{each}</li>;
              })}
              {this.props.item.links?.map((each) => {
                return (
                  <li>
                    <a
                      href={each.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {each.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="resume-item-right">
            <strong>
              <p>{this.props.item.year}</p>
            </strong>
            {this.props.item.icon ? (
              <img
                class="resume-icon"
                src={process.env.PUBLIC_URL + `/images/${this.props.item.icon}`}
                alt={this.props.item.icon}
              />
            ) : null}
          </div>
        </div>

        {this.props.item.sub_items ? (
          <div>
            {this.props.item.sub_items.map((each) => (
              <ResumeItem item={each} type="sub-item"></ResumeItem>
            ))}
          </div>
        ) : null}
      </div>
    );
    return (
      <div className="nice-border">
        {this.props.item.img ? (
          <div className="resume-item-image">
            <div className="resume-item-image-left">{text}</div>
            <div className="resume-item-image-right">
              <a href={this.props.item.link}>
                <img
                  class="resume-image"
                  src={
                    process.env.PUBLIC_URL + `/images/${this.props.item.img}`
                  }
                  alt={this.props.item.img}
                />
              </a>
            </div>
          </div>
        ) : (
          <div className="resume-item">{text}</div>
        )}
      </div>
    );
  }
};

export default ResumePlusPlus;
