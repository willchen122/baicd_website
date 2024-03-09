import React from "react";
import BAICD_BannerImage from '../components/Banner/BAICD_BannerImage.png'

const Ticket = () => {
    const styles = {
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
                // height: "100vh",
            }}
        >
            <div className="banner" style={styles.banner}>
                <img src={BAICD_BannerImage}></img>
            </div>

            <h1>
                <div className="pageTitles">
                TICKETS/DONATE
                </div>
            </h1>

            <div className="ticketTexts defaultFontXLarge">                
                <strong>閩橋 Min Bridges: stories from the Malay World, Taiwan, and mainland China</strong> is our first produced show, on May 4th, 2024 at 7:30 pm at Theatre of Yugen in San Francisco. Stay tuned for the official ticket site. In the meantime, you can secure early access to the ticketing website by donating to our company below  and keep in touch by signing up for our mailing list on the Contact/Booking tab.  
                <br></br>
                <br></br>
                <strong>Donations</strong> Donors like you are a valuable part of our community here at BAICD. We're all volunteers, but we aspire to pay our members and collaborators equitable market rates, We can't do that without your support.  You help us secure the innovative, equitable, and democratic traditional arts we all believe in. Thanks to our fiscal sponsor Shawl Anderson Dance Center (SADC), all donations to BAICD are tax-deductible. Please donate through SADC's website <a className="allLinks" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" target="_blank">here</a>.
                
            </div>
        </div>
    );
};
 
export default Ticket;