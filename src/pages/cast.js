import React from "react";
import Genevieve from "../components/castIntros/genevieveIntro";
 
const Cast = () => {
    const styles = {
        castText: {
            marginLeft: "15%",
            marginRight: "15%",
            textAlign: "justify",
        },
        hodgeText:{
            marginLeft: "15%",
            marginRight: "50%",
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
                CAST AND CREW
            </h1>

            <div className="castText" style={styles.castText}>
            We are proud to invest equally in cast and crew. 
            We are especially proud of our broad array of artistic 
            collaborators and technical supports, and the many talents 
            they have outside of BAICD.
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 30 }}>
            
                <div><Genevieve /></div>
                <div><Genevieve /></div>
                <div><Genevieve /></div>
                <div><Genevieve /></div>
                <div><Genevieve /></div>
                <div><Genevieve /></div>
            </div>

            
        </div>
    );
};
 
export default Cast;