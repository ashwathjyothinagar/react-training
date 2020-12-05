import React from 'react';

class Greeting extends React.Component 
{
    render() {
            if(this.props.isLoggedIn){
                return <UserGreeting></UserGreeting>;
            }else{
                return <GuestGreeting></GuestGreeting>;
            }
    }
}

function UserGreeting(props){
    return <h1>Welcom back!</h1>
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>
}

export default Greeting;