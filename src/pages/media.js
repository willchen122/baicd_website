import React from "react";
import BAICD_BannerImage from '../components/Banner/BAICD_BannerImage.png'
 
const Media = () => {
    const styles = {
        // aboutText: {
        //     marginLeft: "15%",
        //     marginRight: "15%",
        //     textAlign: "justify",

        // },
        // inputText: {
        //   padding: "10px",
        //   color: "red",
        // },
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
                height: "100vh",
            }}
        >
             <div className="banner" style={styles.banner}>
                <img src={BAICD_BannerImage}></img>
            </div>

            <div className="mediaText">
                <p className="mediaInquiry">Highlights from engagement with reviewers, partners, and journalists. For inquiries, please see our contact/booking tab.</p>
                <br></br>

                <div className="linkReview"><p className="mediaSpan">"<a className="allLinks" href="https://www.youtube.com/watch?v=djV11Xbc914&ab_channel=a-ha" target="blank">Dance Mission Theater Presents HARVEST Choreographers Showcase</a>" Jenn Norris Dance Reviews 9 Oct 2023</p></div>
                <div className="reviewTexts">“Two solos drawn from world dance forms shine brightly on this evening. The first, Keluarga Laut (Sea Families) is choreographed and performed by Shawn Lee to a light-hearted song sung by a Chinese high school choir. The movement, with its repeating gestures to the sky and the sea, has the flavor of classical Chinese dance. Lee’s focus is a woven Chinese fishing hat with a domed top and wide round brim. Lee wears a calf length skirt, which highlights the frequent backward foot flicks that create the dance’s accents. Smiling broadly with joyous energy Lee windmills and then spins dervish-like hat in hand. I imagine if this dance is traditional, it is danced to invite or celebrate a successful fishing outing.”</div>
            </div>
        </div>
    );
};
 
export default Media;