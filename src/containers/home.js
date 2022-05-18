import React from 'react'
import axios from 'axios'
import images from "../information/images.json";

const ListItem = ({ info, img, small = false }) => {
  return (
    <div class="nice-border">
      <p>{info}</p>
      {img ? (
        <img
          class={small ? "small-image" : "image"}
          src={process.env.PUBLIC_URL + `/images/${img}`}
          alt={img}
        ></img>
      ) : null}
    </div>
  );
};

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      users: 0,
      error: null,
    };
  }

  async componentDidMount() {
    axios
      .get(`https://2r2wddk4i6.execute-api.us-east-2.amazonaws.com/test`)
      .then((res) => {
        this.setState({
          isLoading: false,
          users: res.data.body.userCount,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { isLoading, users } = this.state;

    return (
      <div class="center">
        <div className={"paragraph"}>
          <h1 class="title">Hey I'm Moises!</h1>
          <p>
            You are the {isLoading ? "Loading..." : users}th person to visit
            this site!
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

        <h1 class="title">About Me</h1>
        <br />

        <div class="home-grid">
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
        <h1 class="title">Art</h1>
        <br />
        <div class="home-grid">
          {images.map((each, i) => (
            <ListItem
              info={each.text}
              img={"art/" + each.img}
              key={i}
            ></ListItem>
          ))}
        </div>
      </div>
    );
  }
}



export default Home;
