import React from "react";
import "../App.css";
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
        //     // fontFamily: 'Noto Sans TC' "sans-serif",
        //     // font-optical-sizing: auto;
        //     // font-weight: <weight>;
        //     // font-style: normal;
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

        },
        
      };
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: '100%',
                min_height: '100vh',
                
                
            }}
        >
            <h1>
                <div className="castText defaultFont">
                CAST AND CREW
                </div>
            </h1>

            {/* <div className="castText" style={styles.castText}> */}
            <div className="castText defaultFont">
            
            We are proud to invest equally in cast and crew. 
            We are especially proud of our broad array of artistic 
            collaborators and technical supports, and the many talents 
            they have outside of BAICD.
            </div>

            {/* <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 30,  marginLeft: "5%",
            marginRight: "5%",}}> */}
            {/* <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 30}}> */}
            <div className="parent">
            
                <div className="castText defaultFont"><Genevieve /></div>
                <div className="castText defaultFont"><Shawn /></div>
                <div className="castText defaultFont"><Stephanie /></div>
                <div className="castText defaultFont"><Ariel /></div>
                <div className="castText defaultFont"><Rebs /></div>
                <div className="castText defaultFont"><Laura /></div>
                <div className="castText defaultFont"><Shirley /></div>
                <div className="castText defaultFont"><Alex /></div>
                <div className="castText defaultFont"><Erin /></div>
                <div className="castText defaultFont"><Nathaniel /></div>
                <div className="castText defaultFont"><Ellie /></div>
                <div className="castText defaultFont"><Tiffany /></div>
                <div className="castText defaultFont"><Nala /></div>
                <div className="castText defaultFont"><Jimmy /></div>
                <div className="castText defaultFont"><Swathi /></div>
                
            </div>

            
        </div>
    );
};
 
export default Cast;