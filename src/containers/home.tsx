import { Box } from "@mui/material";

const Home = () => {


  const email = "atozdfw@gmail.com"
  const telephone = "972-469-9652"
  
  return (
    <Box>

      <h1>DFW Contracting</h1>
      <p><a href={`mailto:${email}`}>{email}</a></p>
      <p><a href={`tel:${telephone}`}>{telephone}</a></p>
    </Box>
      
  );
};

export default Home;
