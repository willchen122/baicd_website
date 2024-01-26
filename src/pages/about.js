import React from "react";
 
const About = () => {
    const styles = {
        aboutText: {
            marginLeft: "25%",
            marginRight: "25%",

            textAlign: "justify",
        //   backgroundColor: "#f1f1f1",
        //   width: "100%",
        },
        inputText: {
          padding: "10px",
          color: "red",
        },
      };
    return (
        <div
            style={{
                display: "flex",
                // justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                height: "100vh",
            }}
        >
        

            <h1>
                ABOUT
            </h1>

            <div className="aboutText" style={styles.aboutText}>
            BAICD is a collective of independent Chinese dancers, choreographers, 
            and allied artists who use traditional arts to tell new Bay Area and 
            global stories in our own voices. While we were created to provide a 
            gender-inclusive home for 22-50 year-old Chinese dancers, we are open 
            to anyone who shares our passion for creating new work in traditional 
            arts and original interpretations of derived pieces, regardless of age, 
            national origin, gender, or other dance team/studio affiliations. Our 
            goal is not to replicate the traditional studio model, but to focus on 
            original choreographies and solos that better fit with working adults’ 
            schedules while democratizing individual dancers’ artistic voice. We hope 
            to connect traditional audiences with local issues, and use our public 
            engagement to introduce new communities to the diversity of Chinese dance. 
            </div>
        </div>
    );
};
 
export default About;