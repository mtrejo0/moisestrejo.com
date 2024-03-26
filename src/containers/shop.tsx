import { Box, Stack, Typography } from "@mui/material";

const MenuItem = ({
  label,
  price,
  description,
}: {
  label: any;
  price: any;
  description?: any;
}) => (
  <div
    key={label}
    style={{
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      borderBottom: "1px dotted black",
      textAlign: "left",
    }}
  >
    <Box>
      <Typography sx={{ textAlign: "left", fontWeight: "600" }}>
        {label}
      </Typography>
      {description && (
        <Typography fontSize={11} sx={{ textAlign: "left" }}>
          {description}
        </Typography>
      )}
    </Box>

    <Typography sx={{ fontWeight: "600" }}>
      <span
        style={{
          flexGrow: 1,
          borderBottom: "1px dotted #000",
          marginLeft: "10px",
          marginRight: "10px",
        }}
      ></span>
      {price}
    </Typography>
  </div>
);

const Shop = () => {
  const councellingItems: any = [
    {
      label: "College Counseling",
      price: "$50/hr",
      description:
        "Accepted to MIT, Stanford, Columbia, Carnegie Mellon, UT Austin, UT Dallas, MIT Sloan Business School, MIT Masters of Engineering",
    },
    {
      label: "STEM Subject Counseling - CS, Calc, Chem...",
      price: "$50/hr",
      description: "MIT Graduate, AP National Scolar, 1530 SAT",
    },
    {
      label: "Mock Interview Technical/Behavioral",
      price: "$50/hr",
      description:
        "Offers from: Instacart, Twitter, Facebook, Google, Snapchat",
    },
    { label: "Business Counseling", price: "$50/hr" },
    { label: "Dance Lessons - In Person", price: "$50/hr" },
    { label: "Boxing Lessons - In Person", price: "$50/hr" },
    { label: "Brazilian Jiu Jitsu Lessons - In Person", price: "$50/hr" },
    { label: "Yoga and Meditation Classes", price: "$50/hr" },
    { label: "Music Lessons", price: "$50/hr" },
  ];

  const creatingItems: any = [
    { label: "Single Page Website", price: "$100" },
    { label: "p5.js Art Piece", price: "$100" },
    { label: "Custom Candle", price: "$25/pc" },
    { label: "Instrumental/Beat", price: "$50" },
  ];

  return (
    <Stack sx={{ alignItems: "center", marginTop: "32px" }}>
      <h2>Councelling</h2>
      <Stack
        spacing={2}
        sx={{ alignItems: "flex-start", width: { md: 500, xs: "90%" } }}
      >
        {councellingItems.map((item: any) => (
          <MenuItem
            key={item.label}
            label={item.label}
            price={item.price}
            description={item.description}
          />
        ))}
      </Stack>

      <h2>Making</h2>

      <Stack
        spacing={2}
        sx={{ alignItems: "flex-start", width: { md: 500, xs: "90%" } }}
      >
        {creatingItems.map((item: any) => (
          <MenuItem
            key={item.label}
            label={item.label}
            price={item.price}
            description={item.description}
          />
        ))}
      </Stack>

      <Typography sx={{ mt: 4 }}>
        Email me for inquiries: moises.trejo0[at]gmail.com
      </Typography>
    </Stack>
  );
};

export default Shop;
