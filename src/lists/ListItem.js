import React from 'react';

// function ListItem(props) {
//     const value = props.value;

//     return (
//         <li key={value.toString()}>{value}</li>
//     );
// }

function ListItem(props) {
    return <li>{props.value}</li>;
}

class ListItems extends React.Component {
    constructor(props){
        super(props);
        this.numbers = props.numbers;
        this.listItems = this.numbers.map((number) => 
        <ListItem key={number.toString()} value={number}></ListItem>
    );

    }

    

    
    render(){
        return (
            <ul> {this.listItems}</ul>
        );
    }
}

export default ListItems;

//Keys must only be unique among sibilings
