import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Header from './components/Header'
import Section from './components/Section'
import Footer from './components/Footer';
import {DataProvider} from './components/Context'
import Admin from './components/Admin';
import Signup from './components/Signup'
class App extends React.Component{
  
  render(){
    return(
      <DataProvider>
        <div className="app">
          <Router>
            <Header />
            <Section />
            <Footer/> 
            <Route path='./signup' component={Signup}/>
            <Route path='./signin' component={Admin}/>
            <Route path='./customer' component={Signup}/>
          </Router>
        </div>
      </DataProvider>
    );
  }
}

export default App;