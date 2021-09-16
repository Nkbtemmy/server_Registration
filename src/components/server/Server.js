import React, { Component } from 'react'

export default class Server extends Component {
    constructor(props){
        super(props);
        this.state = {
            server: '',
        };
            this.baseState = { server: '' }
    }
    
    reset = () => {
        this.setState(this.baseState)
    }
    handleChange = e => {
        this.setState({server: e.target.value});
    }
    render() {
        return (
            <div>
                <h2 className="pt-5 text-secondary">Create Server <span className="float-right"><button onClick={this.reset} ><i className="fa fa-repeat" aria-hidden="true"></i></button></span></h2>
                <input type="text" placeholder="Type in Server Name" name="server" onChange={this.handleChange} value={this.state.server} name="serverName"  className=" mt-2 p-2  form-control"/>
            </div>
        )
    }
}
