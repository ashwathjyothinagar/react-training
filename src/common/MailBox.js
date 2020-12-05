import React from 'react';

class MailBox extends React.Component {
    constructor(props){
        super(props);
        this.unreadMessage = props.unreadMessages;
    }
    
    render (){
        const count = true;
        return (
            <div>
                <h1>Hello!</h1>
                {count  && 
                    <h2>
                        You have {this.unreadMessage.length} unread messages.
                    </h2>
                }
            </div>
        );
    }
}

export default MailBox;