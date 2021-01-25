import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Navbar from '../Navbar/Navbar';
import classes from './Layout.module.css';

//layout has 2 section
//1- components
//2-components that we want to wrap with this layout
const Layout = (props) => (
  <Auxiliary>
    <Navbar className={classes.Navbar}/>
    <main dir="rtl" className={classes.Content}>
      {props.children}
    </main>
  </Auxiliary>
);

export default Layout;