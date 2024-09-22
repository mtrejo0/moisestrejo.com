import education from "../information/education.json";
import leadership from "../information/leadership.json";
import projects from "../information/projects.json";
import skills from "../information/skills.json";
import work from "../information/work.json";
import awards from "../information/awards.json";
import press from "../information/press.json";

const sections = [
  { name: "Work Experience", id: "work", data: work },
  { name: "Education", id: "education", data: education },
  { name: "Projects", id: "projects", data: projects },
  { name: "Leadership", id: "leadership", data: leadership },
  { name: "Skills", id: "skills", data: skills },
  { name: "Awards & Honors", id: "award", data: awards },
  { name: "Press", id: "press", data: press }
];

const ResumePlusPlus = () => {
  return (
    <div>
      {sections.map((section) => (
        <Section key={section.id} section={section} />
      ))}
    </div>
  );
};

const Section = ({ section }: { section: any }) => {
  return (
    <div>
      <h2>{section.name}</h2>
      <ul>
        {section.data.map((item: any) => (
          <ResumeItem key={item.name} item={item} />
        ))}
      </ul>
    </div>
  );
};

const ResumeItem = ({ item }: { item: any }) => {
  return (
    <li>
      <h3>{item.name}</h3>
      <p>{item.year}</p>
      <ul>
        {item.description.map((desc: any, index: number) => (
          desc.length ? <li key={index}>{desc}</li> : null
        ))}
        {item.links?.map((link: any, index: number) => (
          <li key={index}>
            <a href={link.link} target="_blank" rel="noopener noreferrer">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
      {item.sub_items && (
        <ul>
          {item.sub_items.map((subItem: any, index: number) => (
            <ResumeItem key={index} item={subItem} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default ResumePlusPlus;
