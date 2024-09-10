import { ReactNode, useEffect, useState } from "react";
import axios from "axios";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import { MailChimpForm } from "../components/MailChimpForm";
import Contact from "./contact";
import Art from "./art";
import Press from "./press";

export const borderStyle = {
  border: "2px black solid",
  borderRadius: "8px",
};

const ImageWithText = ({
  info,
  img,
  src,
  small = false,
}: {
  info: string | ReactNode;
  img?: string;
  src?: string;
  small?: boolean;
}) => {
  return (
    <div style={{ padding: "16px", margin: "32px", textAlign: "center" }}>
      <p>{info}</p>
      {img ? (
        <img
          className={small ? "small-image" : "image"}
          style={{ width: "100%", ...borderStyle }}
          src={process.env.PUBLIC_URL + `/images/${img}`}
          alt={img}
        ></img>
      ) : null}
      {src ? (
        <img
          className={small ? "small-image" : "image"}
          style={{ width: "100%", border: "2px black solid" }}
          src={src}
          alt={img}
        ></img>
      ) : null}
    </div>
  );
};

const Home = () => {
  const [loading, setLoading] = useState(true);

  const [users, setUsers] = useState(0);

  const interests = [
    "Computer Science",
    "Design",
    "Entrepreneurship",
    "Making: 3D printing, laser cutting, embedded systems",
    "Cooking",
    "Art and its various forms: Painting, Digital Design",
    "Sports: Kickboxing, Brazilian Jiu Jitsu, Basketball, Soccer",
    "Dancing: Contemporary Dance, Salsa, Merengue, Cumbias, Breakdancing",
    "Skateboarding",
    "Philosophy, Ethics, Theology, Psychology",
    "Anthropology",
    "Natural Sciences: Mathematics, Chemistry, Biology, Physics",
    "Music: Music Producing, DJing",
    "Comedy",
    "Video Editing",
    "Literature",
    "Urban Planning",
    "the list goes on...",
  ];

  useEffect(() => {
    axios
      .get(`https://2r2wddk4i6.execute-api.us-east-2.amazonaws.com/test`)
      .then((res) => {
        setLoading(false);

        setUsers(res.data.body.userCount);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div className="nice-border" style={{ maxWidth: isMobile ? '80%' : '50%', margin: '0 auto'}}>
      <div style={{ marginLeft: "32px" }}>
        <div>
          <p>
            You are the {loading ? "Loading..." : users.toLocaleString()}th
            person to visit this page!
          </p>
        </div>

        <div>
          <p>A little about me:</p>
          <ul>
            <li>Software Engineer at Instacart on the Catalog Enrichment Team!</li>
            <li>I post DJ mixes on my YouTube in my free time.</li>
            <li>I like cooking Mexican food and working out.</li>
            <li>I live in Dallas, Texas where I am from and I love it very much.</li>
            <li>I love making generative art using P5.js.</li>
            <li>I make web apps that are fun and useful.</li>
            <li>I am a recent graduate of MIT '22 where I studied Computer Science.</li>
            <li>I am passionate about using technology to give everyone the same opportunity to live happy and succeed.</li>
          </ul>
        </div>

        <div>
          <p>I love all of the following:</p>
          <ul>
            {interests.map((interest, index) => (
              <li key={index}>{interest}</li>
            ))}
          </ul>
        </div>
      </div>
      <Contact />

    </div>
  );
};

export default Home;
