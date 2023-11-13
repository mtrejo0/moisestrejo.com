import React, { useState } from "react";

import education from "../information/education.json";
import leadership from "../information/leadership.json";
import projects from "../information/projects.json";
import skills from "../information/skills.json";
import work from "../information/work.json";
import awards from "../information/awards.json";
import press from "../information/press.json";
import { Box } from "@mui/material";
import { P5App } from "./p5art";

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
    <Box display={"flex"} mb={"100px"}>
      <Box width={"20%"}>
        {tabs.map((tab) => {
          return (
            <div
              className="nav-li"
              style={{
                textAlign: "left",
                width: "fit-content",
                marginLeft: "64px",
                textDecoration: tab == activeTab ? "underline" : "none",
                cursor: "pointer",
              }}
              onMouseEnter={() => selectTab(tab.tag)}
            >
              <b>
                <p style={{ width: "fit-content", textAlign: "left" }}>
                  {tab.name}
                </p>
              </b>
            </div>
          );
        })}
      </Box>
      <Box width={"80%"} mr={"64px"} ml={"16px"}>
        {all
          .filter((each) => each.tags.includes(activeTab.tag))
          .map((each) => (
            <ResumeItem item={each}></ResumeItem>
          ))}
      </Box>
    </Box>
  );
};
const ResumeItem = ({ item, type }: { item: any; type?: any }) => {
  let title = (
    <div>
      {type === "sub-item" ? <h5>{item.name}</h5> : <h3>{item.name}</h3>}
    </div>
  );
  return (
    <div className={type === "sub-item" ? "sub-item-border" : "nice-border"}>
      <div>
        <div>
          <Box display={"flex"} justifyContent={"space-between"}>
            {title}
            <strong>
              <p>{item.year}</p>
            </strong>
          </Box>
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
          {item.img ? (
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
          ) : null}
          {item.icon ? (
            <img
              className="resume-icon"
              src={process.env.PUBLIC_URL + `/images/${item.icon}`}
              alt={item.icon}
            />
          ) : null}
        </div>

        {item.sub_items ? (
          <div>
            {item.sub_items.map((each: any) => (
              <ResumeItem item={each} type="sub-item"></ResumeItem>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ResumePlusPlus;
