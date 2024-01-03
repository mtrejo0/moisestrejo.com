import React from 'react';

const Footer = () => {
    return (
        <footer style={styles.footerStyle}>
            <div style={styles.sidePanelStyle}>
                <p>Contact Me.</p>
                <a
                    href={"https://moisestrejo.com/contact"}
                    style={{ textDecoration: "none", color: "inherit" }}
                    target="_blank"
                    rel="noreferrer"
                >
                    <b>moisestrejo.com/contact</b>
                </a>
                <br></br>
                
                <div class="fb-like" 
                    data-href="https://moisestrejo.com" 
                    data-width="" 
                    data-layout="" 
                    data-action="" 
                    data-size="" 
                    data-share="true"
                    style={{marginTop: "16px"}}
                ></div>
            </div>
            <p>© Moises Trejo Industries</p>
        </footer>
    );
};

const styles = {
    footerStyle: {
        color: '#000',
        padding: '32px',
        left: '0',
        bottom: '0',
        display: 'flex',
        justifyContent: 'space-evenly', // Aligns the content and side panel
        borderTop: "1px black solid",
        marginTop: "128px",
        marginBottom: "64px"
    },
    sidePanelStyle: {
        textAlign: 'left' // Aligns the contact information to the right
    }
};

export default Footer;
