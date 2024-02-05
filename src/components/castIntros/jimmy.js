import React from "react";
import replacablePhoto from "../../images/castPhotos/replacablePhoto.png";
// import replacable
 

const Jimmy = () => {
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
            composer and sound technician jimmy wing
            </div>

            <div className="castImage" style={styles.castImage}>
                <img src={replacablePhoto}></img>
            </div>

            <div>
            



            </div>
        </div>
    );
};
 
export default Jimmy;
            
            