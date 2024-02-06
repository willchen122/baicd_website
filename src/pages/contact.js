import React from "react";
import BAICD_BannerImage from '../components/Banner/BAICD_BannerImage.png';
 
const Contact = () => {
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
            <h3>
                CONTACT/BOOKING
            </h3>
            <p>
            Please fill out our form below to book us for public or private performances or panels, collaborations, business proposals, press inquiries, &c. We love being a part of the community, and we look forward from hearing from you! You can also use this form to sign up for our mailing list! 
            </p>
            <div className="booking-form">
            <form>
                <div className="leftColContact">
                <label for="name">Name</label><br></br>
                <input type="text" id="name" name="name" /><br></br>
                <label for="email">Email address</label><br></br>
                <input type="text" id="email" name="email" /><br></br>
                </div>

                <div className="rightColContact">
                <label for="phoneNum">Phone number</label><br></br>
                <input type="text" id="phoneNum" name="phoneNum" /><br></br>
                <label for="inquiryChoice">Inquiry type</label><br></br>

                <input list="inquiry-choice" id="inquiryChoice" name="inquiryChoice" />

                <datalist id="inquiry-choice">
                    <option value="Book"></option>
                    <option value="General"></option>
                    <option value="Get in contact"></option>
                    <option value="Customer support"></option>
                    <option value="Buy tickets"></option>
                </datalist>
                <br></br>
                </div>

                <div className="bottomContact">
                <label for="messages">Messages</label><br></br>
                <input type="text" id="messages" name="messages" /><br></br>
                <label for="sign-up">Sign up for our mailing list</label><br></br>
                <input type="checkbox" id="sign-up" name="sign-up" /><br></br>
                </div>
            </form>
            <div className="bottomIcons">
                
            </div>
            </div>
            <br></br>
            <span>Photography by Zoe Moore, Isabelle Hodge, Nathaniel Goh, and others and logo designs by Tiffany Lin Art (https://www.instagram.com/tiffanyyilinart/). Bay Area Independent Chinese Dancers is a fiscally sponsored project of Shawl Anderson Dance Center. Website design by Shawn Lee, @studiocreator and @hopdesignstudio on Canva and implemented by Nala Chen. All rights reserved.</span>
        </div>
    );
};
 
export default Contact;