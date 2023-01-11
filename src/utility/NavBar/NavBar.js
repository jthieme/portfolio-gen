import React, { useState, useEffect } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
// import openModal from '../../actions/openModal';
// import logoutAction from '../../actions/logoutAction';
// import Login from '../../pages/Login/Login';
// import SignUp from '../../pages/Login/SignUp';
// import Queue from '../../pages/Queue/Queue';
// import penguin from '../../images/penguin.png'


function NavBar(props){

    // const dispatch = useDispatch();
    // const email = useSelector(state=>state.auth.email);
    // // const token = useSelector(state=>state.auth.token);

    // useEffect(()=>{
    //     dispatch(openModal('closed',''));
    // },[])




    let navColor = 'black';
    
    return(
    <div className="container-fluid nav">
        <div className="row">
            <nav className={navColor}>
                <div className="nav-wrapper">
                    <Link to="/" className="left"><img className="nav-penguin" src={"https://www.google.com/aclk?sa=l&ai=DChcSEwjJsqbLwr78AhWpKUwKHWnbAHcYABAHGgJvYQ&sig=AOD64_2yPtkKHcKHvKRR_583mSbJMQlrNw&adurl&ctype=5&ved=2ahUKEwj5pJjLwr78AhUAKt4AHcNuDwcQvhd6BAgBEH0"}/></Link>
                    <ul id="nav-mobile" className="right">


                         <span> 
                            <li><Link to="/queue">My Queue</Link></li>
                            <li><Link to="/">Hello, Josh</Link></li>
                            {/* <li onClick={()=>dispatch(logoutAction())}>Logout</li> */}
                        </span>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
    )

}




export default NavBar;