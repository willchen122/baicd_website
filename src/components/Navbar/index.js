// components/Navbar/index.js

import React from "react";
import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
	NavBtn,
	NavBtnLink,
} from "../Navbar/navbarElements";

const Navbar = () => {
	return (
		<>
			<Nav>
				<Bars />

				<NavMenu>
					<NavLink to="/about" >
						<img src= "baicd_logo.png" alt="logo" height="125px" width="auto"/>
					</NavLink>
					<NavLink to="/about" >
						ABOUT
					</NavLink>
					<NavLink to="/blog" activeStyle>
						BLOG: /CHECK-INS
					</NavLink>
					<NavLink to="/cast" activeStyle>
						CAST AND CREW
					</NavLink>
					<NavLink to="/tickets" activeStyle>
						TICKETS/DONATE
					</NavLink>
					<NavLink to="/media" activeStyle>
						MEDIA COVERAGE
					</NavLink>
					<NavLink to="/contact" activeStyle>
						CONTACT/BOOKING
					</NavLink>
					{/* Second Nav */}
					{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
				</NavMenu>
				{/* <NavBtn>
					<NavBtnLink to="/signin">
						Sign In
					</NavBtnLink>
				</NavBtn> */}
			</Nav>
		</>
	);
};

export default Navbar;
