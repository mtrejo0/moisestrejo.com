import { ReactNode, useEffect, useState } from "react";
import axios from "axios";
import { Grid } from "@mui/material";

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

  return (
    <div className="center">
      <div className={"paragraph"}>
        <p>
          You are the {loading ? "Loading..." : users.toLocaleString()}th person
          to visit this page!
        </p>
      </div>
      <div className={"paragraph"}>
        <p>
          Currently im a Software Engineer at Instacart on the Catalog
          Enrichment Team! I post DJ mixes on my YouTube in my free time. I like
          cooking Mexican food and working out. I live in Dallas, Texas where I
          am from and I love it very much. I love making generative art using
          P5.js. I make web apps that are fun and useful. I am recent graduate
          of MIT 22 where I studied Computer Science. I am passionate about
          using technology to give everyone the same opportunity to live happy
          and succeed.
        </p>
      </div>

      <div className={"paragraph"}>
        <p>I love all of the following:</p>
        <p>{interests.join(", ")}</p>
      </div>

      <h1 className="title" style={{ marginBottom: "-16px" }}>
        About Me
      </h1>

      <Grid
        container
        pl={{ xs: "32px", md: "10%" }}
        pr={{ xs: "32px", md: "10%" }}
      >
        <Grid item xs={12} md={4}>
          <ImageWithText
            info={"The handsome devil in question: Moises Trejo"}
            img={`profile_picture.jpg`}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <ImageWithText
            info={"Born and raised in Dallas, TX  🤠"}
            img="dallas.jpg"
          />
        </Grid>

        <Grid item xs={12} md={4}>
          {" "}
          <ImageWithText
            info={"MIT Class of 2022, BS in Computer Science"}
            img="mit_dome.jpg"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          {" "}
          <ImageWithText
            info={"Roots from Tlaltenango, Zacatecas 🇲🇽"}
            img="mexico.jpg"
          />{" "}
        </Grid>
        <Grid item xs={12} md={4}>
          {" "}
          <ImageWithText
            info={<p>FGLI - First generation low income student</p>}
            img="fam.jpg"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          {" "}
          <ImageWithText
            info={<p>I love the mavericks</p>}
            img="moi_mavs.png"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
