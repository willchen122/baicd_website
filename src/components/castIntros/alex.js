import React from "react";
import replacablePhoto from "../../images/castPhotos/replacablePhoto.png";
// import replacable
 

const Alex = () => {
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
            <div>
            lighting director and stage manager alex wong
            </div>

            <div className="castImage" style={styles.castImage}>
                <img src={replacablePhoto}></img>
            </div>

            <div>
            Alex is a software engineer and lighting designer with 
            over 15 years experience in theatre, dance and live events 
            in the SF Bay Area and Boston. He is thrilled to be working 
            with BAICD on the Min Bridges project, his first in several 
            years.



            </div>
        </div>
    );
};
 
export default Alex;
            
            