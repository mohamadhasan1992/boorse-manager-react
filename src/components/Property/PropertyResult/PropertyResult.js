import React, {Component} from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
import classes from '../PropertyResult/propertyResult.module.css'


class PropertyResult extends Component{
    render(){
        return (
          <div className={classes.Content}>
            <div>دارایی لحظه ای</div>
            <div>سود و زیان امروز</div>
            
          </div>
        );
    }
}

export default PropertyResult;