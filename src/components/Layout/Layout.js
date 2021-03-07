import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import classes from './Layout.module.css';
import {BoorseContext} from '../../context/context';
import LayoutSelector from './LayoutSelector/LayoutSelector';
import Loader from '../UI/spinner/spinner';
import {AuthContext} from '../../context/AuthContext';


//a component that i use inside App.js
//layout has 2 section
//1- components
//2-components that we want to wrap with this layout
const Layout = (props) => {
  const { isLoading,display,layoutSelector } = React.useContext(BoorseContext); 
  const { isAutenticated, user } = React.useContext(AuthContext); 
  if(isLoading){
    return (
      <div className={classes.Content}>
        <Navbar className={classes.Navbar} />
        {isAutenticated && (
          <LayoutSelector changeLayout={layoutSelector} active={display} />
        )}
        <Loader
          className={classes.spinner}
          type="Circles"
          color="#34363b"
          height={100}
          width={100}
        />
        <Footer />
      </div>
    );
  }
  return (
    <div className={classes.Content}>
      <Navbar className={classes.Navbar} />
      {isAutenticated && (
        <LayoutSelector changeLayout={layoutSelector} active={display} />
      )}
      <main dir="rtl" className={classes.mainContent}>
        {props.children}
      </main>
      <Footer />
    </div>
  );};

export default Layout;

