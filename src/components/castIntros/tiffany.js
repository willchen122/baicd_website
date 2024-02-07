import React from "react";
import tiffanylin_photo from "../../images/castPhotos/tiffanylin_photo.png";
// import replacable
 

const Tiffany = () => {
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
            visual designer tiffany lin
            </div>

            <div className="castImage" style={styles.castImage}>
                <img src={tiffanylin_photo}></img>
            </div>

            <div>
            Tiffany is a an illustrator and wildlife biologist 
            interested in learning about Chinese culture, history, 
            and dance. In her spare time she enjoys studying martial arts.



            </div>
        </div>
    );
};
 
export default Tiffany;
            
            