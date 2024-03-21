import React from 'react'
import { useHistory } from 'react-router'
// import { Component } from 'react';
// import Common from './Common';
// import Signup from './Signup';
import axios from 'axios';
export default class Login extends React.Component{

    state = {
        user: {
            email: '',
            password: ''
        },
        isUserLoggedIn:true
    }

    propertyChanged = (event) => {
        let copy = { ...this.state.user }
        copy[event.target.name] = event.target.value;
        this.setState({ user: copy })
    }

    loginButtonClicked = () => {
        axios.post('/users', this.state.user)
            .then((response) => {
                localStorage.setItem('accessToken', response.data.token)
                this.setState({isUserLoggedIn:true})
            })
            console.log(localStorage.getItem('accessToken'))
    }

    render() { 

        return(
        <div>
          <header class='head'>
            
          </header>
               <h1 color='red'><marquee>WellCome to our website to buy and Sell farm products</marquee></h1>
               <div className="page1">
                   <div>Role</div>
                      <input type="text" name="" placeholder="role"/>
                   </div><hr/>
                   <div class="page2">
                   <div>username</div>
                      <input type="text" name="" placeholder="username"/>
                   </div><hr/>
                   <div class="page3">
                   <div>password</div>
                       <input type="password" name="" placeholder="password"/>
                   </div><hr/>
                   <div className="page4">
                       <input type="submit" value="LogIn"
                       onClick={''}
                       />
                       <input type="submit" value="SignUp"
                       onClick={''}
                       />
                   </div><hr/>
            
            <footer class='footer'>
            
            </footer>
        </div>
            
        )
        }
    }