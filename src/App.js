import React , {Component} from 'react';
import Layout from './components/Layout/Layout';
import Property from './containers/PropertyContainer';


class App extends Component {
  render(){
    return (
      <Layout>
        <Property />
      </Layout>
    );
  }
}

export default App;
