import React from "react";
import replacablePhoto from "../../images/castPhotos/replacablePhoto.png";
// import replacable
 

const Nala = () => {
    const styles = {
        castImage:{
            marginLeft: "15%",
            marginRight: "15%",
            display: "flex",
            flex: 1,
        width: 200,
        height: 200,
        resizeMode: 'contain'
            

        }
      };
    return (
        <div
        style={{ display: "grid", gridTemplateColumns: "repeat(1, 1fr)", gridGap: 10}}
        >
            <div className="castIntroTitle">
            LEAD WEB DEVELOPER<br />NALA CHEN
            </div>

            <div className="castImage">
                <img src={replacablePhoto} style={{ maxWidth: "100%" }}></img>
            </div>

            <div>
            



            </div>
        </div>
    );
};
 
export default Nala;
            
            