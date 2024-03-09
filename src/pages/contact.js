import React from "react";
import BAICD_BannerImage from '../components/Banner/BAICD_BannerImage.png';
 
const sayHello = () => {
    alert("Hello!")
};

const Contact = () => {
    
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
                CONTACT/BOOKING
                </div>
            </h1>
            <div className="bookingText">
                <p className="booking-disclaimer">
                Please fill out our form below to book us for public or private performances or panels, collaborations, business proposals, press inquiries, &c. We love being a part of the community, and we look forward from hearing from you! You can also use this form to sign up for our mailing list! 
                </p>
                <div className="booking-form">
                <form>
                    <div className="leftColContact">
                        <div className="form-padding">
                            <label for="name">Name</label><br></br>
                            <input type="text" placeholder="Joe Mama" id="name" name="name" /><br></br>
                        </div>
                        <div className="form-padding">
                            <label for="email">Email address</label><br></br>
                            <input type="text" placeholder="info@gmail" id="email" name="email" /><br></br>
                        </div>
                    </div>

                    <div className="rightColContact">
                    <div className="form-padding">
                        <label for="phoneNum">Phone number</label><br></br>
                        <input type="text" placeholder="###-###-####" id="phoneNum" name="phoneNum" /><br></br>
                    </div>

                    <div className="form-padding" include="form-input-select()">
                            <label for="inquiryChoice">Inquiry type</label><br></br>
                            {/* <input className="dropDown" placeholder="Select one" list="inquiry-choice" id="inquiryChoice" name="inquiryChoice" /> */}
                        <select className="dropDown-content dropDown" id="inquiry-choice">
                            <option selected="true" value="" disabled="disabled">Select One</option>

                            <option value="1">Book</option>
                            <option value="2">General</option>
                            <option value="3">Get in Contact</option>
                            <option value="4">Customer Support</option>
                            <option value="5">Buy Tickets</option>
                        </select>
                        <br></br>
                        </div>
                    </div>

                    <div className="bottomContact">

                    <div className="form-padding">
                        <div className="messagesBox">
                            <label for="messages">Messages</label><br></br>
                            <input className="form-padding messageLabel" placeholder="Type your message here" type="text" id="messages" name="messages" /><br></br>
                        </div>
                    </div>
                    <div className="signUpBox">
                        <input type="checkbox" id="sign-up" name="sign-up" />
                        <label for="sign-up">Sign up for our mailing list</label><br></br>

                        <input className="submitButton" onClick={sayHello} type="submit" id="submitButton" name="submitButton" />
                        <br></br>
                    </div>
                
                    </div>
                </form>
                <div className="bottomIcons">
                    {/* still gotta do this */}
                </div>
                </div>
                <br></br>
                <p className="booking-disclaimer">Photography by Zoe Moore, Isabelle Hodge, Nathaniel Goh, and others and logo designs by Tiffany Lin Art <a className="allLinks" href="https://www.instagram.com/tiffanyyilinart/" target="blank">(https://www.instagram.com/tiffanyyilinart/)</a>. Bay Area Independent Chinese Dancers is a fiscally sponsored project of Shawl Anderson Dance Center. Website design by Shawn Lee, @studiocreator and @hopdesignstudio on Canva and implemented by Joy Hwang, William Chen, and Nala Chen. All rights reserved.</p>
            </div>
        </div>
    );
};
 
export default Contact;