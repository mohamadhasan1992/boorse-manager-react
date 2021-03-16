import React,{useEffect} from 'react';
import Layout from '../components/Layout/Layout';
import WholeProperty from '../components/Property/WholeProperty/WholeProperty';
import PropertyResult from '../components/Property/PropertyResult/PropertyResult';
import PropertyTitle from '../components/Property/PropertyTitle/PropertyTitle';
import PropertyList from '../components/Property/PropertyList/PropertyList';
import PropertyInput from '../components/Property/PropertyInput/PropertyInput';
import DailyPropertyContainer from '../containers/DailyProperty';
import {connect } from 'react-redux';
import * as actionCreators from '../store-redux/actions/index';


const Property = (props) => {

  useEffect(() => {
    props.getInitProperty();
    props.getInitDailyProperty();
  }, []);
  
    return (
      <Layout>
        {props.display || (
          <>
            <WholeProperty />
            <PropertyTitle />
            <PropertyInput />
            <PropertyList />

            {/* <PropertyResult
        // propertyResult={props.propertiesSum}
        /> */}
          </>
        )}
        {props.display && <DailyPropertyContainer />}
      </Layout>
    );
  }
const mapStateToProps = (state) => {
  return {
    display:state.ui.display,
    property:state.property.property
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getInitProperty: () => dispatch(actionCreators.get_init_property()),
    getInitDailyProperty: () =>
      dispatch(actionCreators.get_init_daily_property()),
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Property);