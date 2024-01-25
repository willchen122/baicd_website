// components/Navbar/index.js

import React from "react";
import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
	NavBtn,
	NavBtnLink,
} from "./navbarElements";

const Navbar = () => {
	return (
		<>
			<Nav>
				<Bars />

				<NavMenu>
					<NavLink to="/about" >
						About
					</NavLink>
					<NavLink to="/blog" activeStyle>
						Blog
					</NavLink>
					<NavLink to="/cast" activeStyle>
						Cast
					</NavLink>
					<NavLink to="/check" activeStyle>
						Check
					</NavLink>
					<NavLink to="/media" activeStyle>
						Media
					</NavLink>
					<NavLink to="/tickets" activeStyle>
						Tickets
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
