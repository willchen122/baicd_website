import React from "react";
import replacablePhoto from "../../images/castPhotos/replacablePhoto.png";
// import replacable
 

const Shirley = () => {
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
            choreographer and company dancer shirley cheng
            </div>

            <div className="castImage" style={styles.castImage}>
                <img src={replacablePhoto}></img>
            </div>

            <div>
            Shirley began dancing when she was nine years old, 
            training in classical Chinese dance at the Academy 
            of Chinese Performing Arts. At age fifteen, Shirley 
            decided to focus more on ballet and began training 
            at the Ramon Moreno School of Ballet. She later danced 
            as a trainee with the American Repertory Ballet performing 
            roles in Raymonda, Giselle, and The Nutcracker.


            </div>
        </div>
    );
};
 
export default Shirley;
            
            