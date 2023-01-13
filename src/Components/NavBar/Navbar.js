import React from "react";

const NavBar = () => {
  return (
    <>
      <nav>
        <div class="nav-wrapper" style={{backgroundColor:"black"}}>
          <a href='/' class="brand-logo" style={{marginLeft:20}}>
            Logo
          </a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <a href='/login'>Login</a>
            </li>
            {/* <li>
              <a href="/signup">Sign Up</a>
            </li> */}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
