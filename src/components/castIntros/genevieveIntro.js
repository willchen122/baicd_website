import React from "react";
import replacablePhoto from "../../images/castPhotos/replacablePhoto.png";
// import replacable
 

const Genevieve = () => {
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
            Assitant director and HR director genevieve hodge
            </div>

            <div className="castImage" style={styles.castImage}>
                <img src={replacablePhoto}></img>
            </div>

            <div>
            Genevieve Hodge comes from an artistic background molded by 19+ years of dance and performance experience; she first trained in dance forms such as ballet, tap, and jazz, then expanded her repertoire to incorporate Classical and Folk Chinese dance forms and street forms such as hip hop, while building together her own style of open choreography - a blend of her various movement backgrounds. As an Artistic Director and board member for AFX Dance Company (a UC Berkeley competitive collegiate dance team) she co-led a team for 3 years, helping shape the vision, choreography, and logistical organization of their semesterly competition sets. Through their performances, she and her team enjoyed accolades such as “Best Theme” two years in a row at World Of Dance Orange County and “Most Creative” at Maxt Out. Currently, in addition to BAICD, she continues her performance work as a company member of Ballet Afsaneh, a critically acclaimed dance ensemble performing dances from the Silk Road networks of Eurasia (primarily Persian and Afghan dance) and as a teaching artist at the EOSP Introductory School of Dance.
            </div>
        </div>
    );
};
 
export default Genevieve;
            
            