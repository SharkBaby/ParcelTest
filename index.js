import React from 'react';
import ReactDOM from 'react-dom';
class HelloMessage extends React.Component{
    constructor(){
        super();
    }
    render(){
        return <div>Hello {this.props.name}</div>
    }
}
var appElement = document.getElementById('appId');
ReactDOM.render(<HelloMessage name="Perry Xiang"/>,appElement);
