import React, { useState } from "react";

import education from "../information/education.json";
import leadership from "../information/leadership.json";
import projects from "../information/projects.json";
import skills from "../information/skills.json";
import work from "../information/work.json";
import awards from "../information/awards.json";
import press from "../information/press.json";

let all = [
  ...work,
  ...education,
  ...leadership,
  ...projects,
  ...skills,
  ...awards,
  ...press,
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
  {
    name: "Press",
    tag: "press",
  },
];

const ResumePlusPlus = () => {
  const [activeTab, setActiveTab] = useState<{ name: string; tag: string }>({
    name: "Work Experience",
    tag: "work",
  });

  const selectTab = (tag: string) => {
    setActiveTab(tabs.filter((each) => each.tag === tag)[0]);
  };

  return (
    <div>
      <br></br>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textDecoration: "none",
        }}
      >
        {tabs.map((tab) => (
          <div
            className={
              tab === activeTab ? "resume-li active-resume-tab" : "resume-li"
            }
            onClick={() => selectTab(tab.tag)}
          >
            {tab.name}
          </div>
        ))}
      </div>
      {all
        .filter((each) => each.tags.includes(activeTab.tag))
        .map((each) => (
          <ResumeItem item={each}></ResumeItem>
        ))}
    </div>
  );
};
const ResumeItem = ({ item, type }: { item: any; type?: any }) => {
  let title = (
    <div>
      {type === "sub-item" ? <h5>{item.name}</h5> : <h3>{item.name}</h3>}
    </div>
  );
  let text = (
    <div>
      <div className="resume-top">
        <div>
          {title}
          <ul>
            {item.description.map((each: any) => {
              if (!each.length) return null;
              return <li>{each}</li>;
            })}
            {item.links?.map((each: any) => {
              return (
                <li>
                  <a href={each.link} target="_blank" rel="noopener noreferrer">
                    {each.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="resume-item-right">
          <strong>
            <p>{item.year}</p>
          </strong>
          {item.icon ? (
            <img
              className="resume-icon"
              src={process.env.PUBLIC_URL + `/images/${item.icon}`}
              alt={item.icon}
            />
          ) : null}
        </div>
      </div>

      {item.sub_items ? (
        <div>
          {item.sub_items.map((each: any) => (
            <ResumeItem item={each} type="sub-item"></ResumeItem>
          ))}
        </div>
      ) : null}
    </div>
  );
  return (
    <div className={type === "sub-item" ? "sub-item-border" : "nice-border"}>
      {item.img ? (
        <div className="resume-item-image">
          <div className="resume-item-image-left">{text}</div>
          <div className="resume-item-image-right">
            <a href={item.link}>
              {item.img.startsWith("https") ? (
                <img className="resume-image" src={item.img} alt={item.img} />
              ) : (
                <img
                  className="resume-image"
                  src={process.env.PUBLIC_URL + `/images/${item.img}`}
                  alt={item.img}
                />
              )}
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
