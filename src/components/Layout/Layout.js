import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import classes from './Layout.module.css';
import LayoutSelector from './LayoutSelector/LayoutSelector';
import Loader from '../UI/spinner/spinner';
import {AuthContext} from '../../context/AuthContext';
import {connect } from 'react-redux';
import * as actionCreators from "../../store-redux/actions/index";


//a component that i use inside App.js
//layout has 2 section
//1- components
//2-components that we want to wrap with this layout
const Layout = (props) => {
  console.log(props.uiState);
  const { isAutenticated, user } = React.useContext(AuthContext); 
  if (props.uiState.isLoading) {
    return (
      <div className={classes.Content}>
        <Navbar className={classes.Navbar} />
        {isAutenticated && (
          <LayoutSelector changeLayout={props.layoutSelector} active={props.uiState.display} />
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
  }else{
    return (
      <div className={classes.Content}>
        <Navbar className={classes.Navbar} />
        {isAutenticated && (
          <LayoutSelector changeLayout={props.layoutSelector} active={props.uiState.display} />
        )}
        <main dir="rtl" className={classes.mainContent}>
          {props.children}
        </main>
        <Footer />
      </div>
    );
  }
  };
const mapStateToProps = (state) => {
  return {
    uiState: state.ui,
  };
};
const mapDispatchToProps =(dispatch) => {
  return{
    layoutSelector: () => dispatch(actionCreators.change_display())
  }
} ;


export default connect(mapStateToProps,mapDispatchToProps)(Layout);

