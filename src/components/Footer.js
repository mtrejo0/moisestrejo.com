import { Box, useMediaQuery, useTheme } from "@mui/material";


const Footer = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Box 
            sx={{
                color: '#000',
                padding: '32px',
                borderTop: '1px solid black',
                marginTop: '128px',
                marginBottom: '64px',
                flexDirection: isMobile ? 'column' : 'row', // Stack content on mobile
                alignItems: 'center', // Center content
                justifyContent: 'space-evenly', // Align content evenly
                textAlign: isMobile ? 'center' : 'left', // Center text on mobile
                display: 'flex'
            }}
        >
            <Box>
                <p>Contact Me.</p>
                <a
                    href="https://moisestrejo.com/contact"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                    target="_blank"
                    rel="noreferrer"
                >
                    <b>moisestrejo.com/contact</b>
                </a>
                <br />
                <div className="fb-like" 
                    data-href="https://moisestrejo.com" 
                    data-width="" 
                    data-layout="" 
                    data-action="" 
                    data-size="" 
                    data-share="true"
                    style={{ marginTop: '16px' }}
                ></div>
            </Box>
            <p>© Moises Trejo Industries</p>
        </Box>
    );
};

export default Footer;