import React from "react";
import stefaniechen_photo from "../../images/castPhotos/stefaniechen_photo.png";
// import replacable
 

const Stephanie = () => {
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
            assistant director stefanie chen
            </div>

            <div className="castImage" style={styles.castImage}>
                <img src={stefaniechen_photo}></img>
            </div>

            <div>
            Stefanie is a dancer from Taiwan trained in Classical 
            Chinese dance and various Chinese/Taiwanese folk dance 
            styles. She started her journey in dancing at four 
            years old, mainly training with Ms. Hui-Zhu Shi. Stefanie 
            loves the fluidity, strength, and cultural values 
            underlying the Classical Chinese dance style. In the 
            future, she hopes to advance her training in Classical 
            Chinese and Chinese/Taiwanese folk dance styles while 
            working on fusion pieces that bring these styles and 
            other styles (ie. hip-hop, contemporary, ballet) together. 
            In addition to BACID, Stefanie is also a member with 
            FeiTian Dancers at UC Berkeley.

            </div>
        </div>
    );
};
 
export default Stephanie;
            
            