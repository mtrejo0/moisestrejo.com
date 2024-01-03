import education from "../information/education.json";
import leadership from "../information/leadership.json";
import projects from "../information/projects.json";
import skills from "../information/skills.json";
import work from "../information/work.json";
import awards from "../information/awards.json";
import press from "../information/press.json";
import { Box } from "@mui/material";
import AppListDisplay from "../components/AppListDisplay";

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
    id: "work",
  },
  {
    name: "Education",
    id: "education",
  },
  {
    name: "Projects",
    id: "projects",
  },
  {
    name: "Leadership",
    id: "leadership",
  },
  {
    name: "Skills",
    id: "skills",
  },
  {
    name: "Research",
    id: "research",
  },
  {
    name: "Hackathons",
    id: "hackathon",
  },
  {
    name: "Awards & Honors",
    id: "award",
  },
  {
    name: "Press",
    id: "press",
  },
];

const ResumePlusPlus = () => {
  return (
    <AppListDisplay
      apps={tabs}
      displayApp={(app: any) => (
        <div>
          {all
            .filter((each) => each.tags.includes(app.id))
            .map((each) => (
              <ResumeItem item={each}></ResumeItem>
            ))}
        </div>
      )}
      subRoute="resume++"
    />
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
