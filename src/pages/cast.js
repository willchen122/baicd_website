import React from "react";
 
const Cast = () => {
    const styles = {
        aboutText: {
            marginLeft: "15%",
            marginRight: "15%",
            textAlign: "justify",

        },
        inputText: {
          padding: "10px",
          color: "red",
        },
        banner:{
            marginLeft: "15%",
            marginRight: "15%",

        }
      };
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: "100vh",
            }}
        >
            <h1>
                ABOUT
            </h1>

            <div className="castText" style={styles.castText}>
            We are proud to invest equally in cast and crew. 
            We are especially proud of our broad array of artistic 
            collaborators and technical supports, and the many talents 
            they have outside of BAICD.
            </div>

            
        </div>
    );
};
 
export default Cast;