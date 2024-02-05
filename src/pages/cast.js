import React from "react";
import Genevieve from "../components/castIntros/genevieveIntro";
import Shawn from "../components/castIntros/shawnintro";
import Stephanie from "../components/castIntros/stephanieintro";
import Ariel from "../components/castIntros/ariel";
import Rebs from "../components/castIntros/rebs";
import Laura from "../components/castIntros/laura";
import Shirley from "../components/castIntros/shirley";
import Alex from "../components/castIntros/alex";
import Erin from "../components/castIntros/erin";
import Nathaniel from "../components/castIntros/nathaniel";
import Ellie from "../components/castIntros/ellie";
import Tiffany from "../components/castIntros/tiffany";
import Nala from "../components/castIntros/nala";
import Jimmy from "../components/castIntros/jimmy";
import Swathi from "../components/castIntros/swathi";

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
                <div><Shawn /></div>
                <div><Stephanie /></div>
                <div><Ariel /></div>
                <div><Rebs /></div>
                <div><Laura /></div>
                <div><Shirley /></div>
                <div><Alex /></div>
                <div><Erin /></div>
                <div><Nathaniel /></div>
                <div><Ellie /></div>
                <div><Tiffany /></div>
                <div><Nala /></div>
                <div><Jimmy /></div>
                <div><Swathi /></div>
                
            </div>

            
        </div>
    );
};
 
export default Cast;