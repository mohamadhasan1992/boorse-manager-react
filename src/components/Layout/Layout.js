import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import classes from './Layout.module.css';


//layout has 2 section
//1- components
//2-components that we want to wrap with this layout
const Layout = (props) => (
  <div className={classes.Content}>
    <Navbar className={classes.Navbar} />
    <main dir="rtl" className={classes.mainContent}>
      {props.children}
    </main>
    <Footer />
  </div>
);

export default Layout;