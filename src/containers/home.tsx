import { ReactNode, useEffect, useState } from "react";
import axios from "axios";
import images from "../information/images.json";
import { Grid } from "@mui/material";
import RandomNumbers from "../components/RandomNumbers";

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
    <div className="nice-border">
      <p>{info}</p>
      {img ? (
        <img
          className={small ? "small-image" : "image"}
          style={{ width: "100%" }}
          src={process.env.PUBLIC_URL + `/images/${img}`}
          alt={img}
        ></img>
      ) : null}
      {src ? (
        <img
          className={small ? "small-image" : "image"}
          style={{ width: "100%" }}
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
          I am recent graduate of MIT 22 where I studied Computer Science. I am
          passionate about using technology to give everyone the same
          opportunity to live happy and succeed.
        </p>

        <p>I love all of the following:</p>
      </div>

      <ul>
        <li>Computer Science</li>
        <li>Design</li>
        <li>Entrepreneurship</li>
        <li>Making: 3D printing, laser cutting, embedded systems</li>
        <li>Cooking</li>
        <li>Art and its various forms: Painting, Digital Design</li>
        <li>Sports: Kickboxing, Brazilian Jiu Jitsu, Basketball, Soccer</li>
        <li>
          Dancing: Contemporary Dance, Salsa, Merengue, Cumbias, Breakdancing
        </li>
        <li>Skateboarding</li>
        <li>Philosophy, Ethics, Theology, Psychology</li>
        <li>Anthropology</li>
        <li>Natural Sciences: Mathematics, Chemistry, Biology, Physics</li>
        <li>Music: Music Producing, DJing</li>
        <li>Comedy</li>
        <li>Video Editing</li>
        <li>Literature</li>
        <li>Urban Planning</li>
        <li>the list goes on...</li>
      </ul>

      <h1 className="title">About Me</h1>
      <br />

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
        <Grid item xs={12}>
          {" "}
          <h1 className="title">Art</h1>
        </Grid>

        {images.map((each, i) => (
          <Grid item xs={12} md={4}>
            <ImageWithText
              info={each.text}
              img={"art/" + each.img}
              key={i}
            ></ImageWithText>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
