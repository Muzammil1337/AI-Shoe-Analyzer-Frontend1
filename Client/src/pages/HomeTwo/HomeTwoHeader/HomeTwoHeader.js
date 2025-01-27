import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Sidebar from '../../../components/Sidebar/Sidebar';
import useGlobalContext from '../../../hooks/useGlobalContext';

const HomeTwoHeader = () => {
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const { stickyMenu } = useGlobalContext();
   return (
      <>
         <header>
            <div className="header__area p-relative header__transparent">
               <div id="header__sticky" className={stickyMenu ? 'sticky header__bottom header__bottom-2' : 'header__bottom header__bottom-2'}>
                  <div className="container">
                     <div className="row align-items-center">
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                           <div className="logo">
                              <NavLink to="/">
                                 {/* AI SHOE ANALYZER */}
                                 {/* <img src="assets/img/logo/logo.png" alt="logo"/> */}
                              </NavLink>
                           </div>
                           <div className="logo-gradient">
                              <NavLink to="/">
                                 {/* AI SHOE ANALYZER */}
                                 {/* <img src="assets/img/logo/logo-gradient.png" alt="logo"/> */}
                              </NavLink>
                           </div>
                        </div>
                        <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6">
                           <div className="header__bottom-right d-flex justify-content-end align-items-center">
                            <div className="main-menu menu_wrapper_one">
                                 <nav id="mobile-menu">
                                    <ul>
                                       <li>
                                          <NavLink to="/homeTwo">Home</NavLink>
                                       </li>
                                       <li><NavLink to="/about">About Us </NavLink></li>
                                       <li>
                                          <NavLink to="/services">Services</NavLink>
                                       </li>
                                       <li>
                                          <NavLink to="/develop">Develop</NavLink>
                                       </li>
                                       <li>
                                          <NavLink to="/price">Pricing</NavLink>
                                       </li>
                                       <li><NavLink to="/contact">Contact Us</NavLink></li>
                                    </ul>
                                 </nav>
                              </div>
                              <div className="header__btn d-none d-sm-block d-xl-block ml-50" >
                                 <Link to="/login" className="z-btn z-btn-white z-btn-white-2">Login</Link>
                              </div>
                              <div className="header__btn d-none d-sm-block d-xl-block ml-50">
                                 <Link to="/signup" className="z-btn z-btn-purple z-btn-white-2">Sign Up</Link>
                              </div>
                              <div onClick={handleShow} className="sidebar__menu d-lg-none">
                                 <div className="sidebar-toggle-btn" id="sidebar-toggle">
                                    <span className="line"></span>
                                    <span className="line"></span>
                                    <span className="line"></span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </header>


         <Sidebar show={show} handleClose={handleClose} />
      </>
   );
};

export default HomeTwoHeader;