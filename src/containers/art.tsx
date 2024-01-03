import artList from "../information/art.json";
import AppListDisplay from "../components/AppListDisplay";
import { Stack } from "@mui/material";

const ArtDisplay = ({app}:{app: any}) => {

  return <Stack alignItems={"center"}>
    <h3 style={{marginTop: "0px"}}>{app.name}</h3>
    <img
      style={{ maxHeight: "80vh", padding: 0, maxWidth: "80%" }}
      src={process.env.PUBLIC_URL + `/images/art/${app.img}`}
      alt={app.img}
      className="nice-border"
    ></img>
  </Stack>
}

const Art = () => {
  return (
    <div>
      <AppListDisplay apps={artList} displayApp={(app: any) => <ArtDisplay app={app}/>} subRoute = "images"/>
    </div>
  );
};

export default Art;
