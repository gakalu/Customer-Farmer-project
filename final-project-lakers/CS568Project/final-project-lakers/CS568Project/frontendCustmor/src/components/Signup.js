import axios from "axios";
import React from "react";

export default class Signup extends React.Component {
    state = {
        user: {
            username:'', password: '', role: ''
        }
    }

    componentDidMount() {
        axios.get('/users').then((response)=>{
            let copy = {...this.state.user}
            copy = response.data
            this.setState({user: copy})
        })
    }
    propertyOnchange = (event)=>{
        let copy = {...this.state.user}
        copy[event.target.name] = event.target.value
        this.setState({user: copy})
        console.log(this.state.user)
    }
    signUpButtonClicked = ()=>{
        axios.post('/signup', this.state.user).then((response)=>{
            alert("User Signed up Successfully!")
        })
    }
    
    render(){
        return(
            <div>
                <h4>Signup Here</h4>
                <div>FirstName:</div><input type = 'text'
                                      name = 'username'
                                      placeholder = 'username'
                                      onChange = {(event)=>{this.propertyOnchange(event)}}
                                      />
                <div>LastName:</div><input type = 'text'
                                      name = 'username'
                                      placeholder = 'username'
                                      onChange = {(event)=>{this.propertyOnchange(event)}}
                                      />
                <div>UserName:</div><input type = 'text'
                                      name = 'username'
                                      placeholder = 'username'
                                      onChange = {(event)=>{this.propertyOnchange(event)}}
                                      
                                      />
                <div>Password:</div><input type = 'password'
                                      name = 'password'
                                      placeholder = 'password'
                                      onChange = {(event)=>{this.propertyOnchange(event)}}
                                      />
                <div>Role:</div><input type = 'text'
                                      name = 'role'
                                      placeholder = 'role'
                                      onChange = {(event)=>{this.propertyOnchange(event)}}
                                      />
                <div> <input type = 'button'
                                      value = 'Signup'
                                      onClick = {()=>{this.signUpButtonClicked()}}
                                      /></div>
            </div>
        )
    }
}
