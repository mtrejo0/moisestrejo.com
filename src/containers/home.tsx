import { ReactNode, useEffect, useState } from "react";
import axios from "axios";
import images from "../information/images.json";

const ListItem = ({
  info,
  img,
  small = false,
}: {
  info: string | ReactNode;
  img: string;
  small?: boolean;
}) => {
  return (
    <div className="nice-border">
      <p>{info}</p>
      {img ? (
        <img
          className={small ? "small-image" : "image"}
          src={process.env.PUBLIC_URL + `/images/${img}`}
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
  });

  return (
    <div className="center">
      <div className={"paragraph"}>
        <h1 className="title">Hey I'm Moises!</h1>
        <p>
          You are the {loading ? "Loading..." : users}th person to visit this
          site!
        </p>
      </div>
      <div className={"paragraph"}>
        <p>
          I am currently a senior at MIT studying Computer Science. I am
          passionate about using technology to give everyone the same
          opportinity to live happy and succeed. I love cooking, basketball,
          skateboarding, and philosophy.
        </p>
      </div>

      <h1 className="title">About Me</h1>
      <br />

      <div className="home-grid">
        <ListItem
          info={
            <p>
              Born and raised in Dallas, TX{" "}
              <span role="img" aria-label="tex">
                🤠
              </span>
            </p>
          }
          img="dallas.jpg"
        />
        <ListItem info={"Senior at MIT BS 22'"} img="mit_dome.jpg" />
        <ListItem
          info={
            <p>
              Roots from{" "}
              <a
                href="https://www.google.com/search?q=tlaltenango+zacatecas"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tlaltenango, Zacatecas{" "}
                <span role="img" aria-label="mex">
                  🇲🇽
                </span>
              </a>
            </p>
          }
          img="mexico.jpg"
        />
        <ListItem
          info={<p>FGLI - First generation low income student</p>}
          img="fam.jpg"
        />
      </div>
      <h1 className="title">Art</h1>
      <br />
      <div className="home-grid">
        {images.map((each, i) => (
          <ListItem info={each.text} img={"art/" + each.img} key={i}></ListItem>
        ))}
      </div>
    </div>
  );
};

export default Home;
