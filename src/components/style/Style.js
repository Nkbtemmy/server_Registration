import React, { Component } from 'react'

export default class Style extends Component {
    render() {
        return (
            <div className="stlyeContainer">
                <h2 className="pt-5 text-secondary"> Styles <span className="float-right"><button><i className="fa fa-repeat" aria-hidden="true"></i></button></span></h2> 
                <div>
                    <input type="text" placeholder="style"  className=" mt-5 p-2 form-control"/>
                    <input type="text" placeholder="style"  className=" mt-5 p-2 form-control"/>
                    <input type="text" placeholder="style"  className=" mt-5 p-2 form-control"/>
                    <input type="text" placeholder="style"  className=" mt-5 p-2 form-control"/>
                    <input type="text" placeholder="style"  className=" mt-5 p-2 form-control"/>
                    <input type="text" placeholder="style"  className=" mt-5 p-2 form-control"/>
                </div>
            </div>
        )
    }
}
