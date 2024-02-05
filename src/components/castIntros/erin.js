import React from "react";
import replacablePhoto from "../../images/castPhotos/replacablePhoto.png";
// import replacable
 

const Erin = () => {
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
            company dancer erin pang
            </div>

            <div className="castImage" style={styles.castImage}>
                <img src={replacablePhoto}></img>
            </div>

            <div>
            Erin grew up in San Jose in the Bay Area. Throughout 
            elementary school, she enjoyed learning and performing 
            Chinese dance at the local Chinese school. Now living 
            in Oakland and after a long hiatus from dancing, Erin 
            is returning to Chinese dance and excited to explore 
            new techniques and styles.



            </div>
        </div>
    );
};
 
export default Erin;
            
            