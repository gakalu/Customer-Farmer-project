import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Header from './components/Header'
import Section from './components/Section'
import Footer from './components/Footer';
import {DataProvider} from './components/Context'
//import Admin from './components/Admin';


class Common extends React.Component{
  render(){
    return(
      <DataProvider>
        <div className="app">
          <Router>
            <Header />
            {/* <Admin/> */}
             <Section />  
            <Footer/>
          </Router>
        </div>
      </DataProvider>
    );
  }
}

export default Common;