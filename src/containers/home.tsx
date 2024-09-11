import { ReactNode, useEffect, useState } from "react";
import axios from "axios";
import { Avatar, Box, Grid, useMediaQuery, useTheme } from "@mui/material";
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
      <div style={{ marginLeft: isMobile ? '0px' : '32px' }}> 
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '20px',
            marginTop: '40px',
          }}
        >
          <Avatar
            alt="Moises Trejo"
            src={`${process.env.PUBLIC_URL}/images/portrait.png`}
            sx={{
              width: 200,
              height: 200,
              border: '3px solid #fff',
              boxShadow: '0 0 10px rgba(0,0,0,0.2)',
            }}
          />
        </Box>


        <div>
          <p style={{ fontSize: '24px', fontWeight: 'bold', textAlign: 'center'}}>
            Moises Trejo
          </p>
        </div>

        <div>
          <p style={{ fontSize: '16px', textAlign: 'center', marginBottom: '40px'}}>
            You are the {loading ? "Loading..." : users.toLocaleString()}th
            person to visit this page!
          </p>
        </div>

        <div>
          <p>A little about me:</p>
          <ul>
            <li>Software Engineer at Instacart on the Catalog Enrichment Team!</li>
            <li>Live in Dallas, Texas - hometown and beloved city.</li>
            <li>MIT Class of 2022 BS in Computer Science.</li>
            <li>Enjoy cooking Mexican food and working out.</li>
            <li>Love making generative art using P5.js.</li>
            <li>Love building useful web apps.</li>
            <li>Passionate about using technology.</li>
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
